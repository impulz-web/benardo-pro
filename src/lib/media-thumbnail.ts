const YOUTUBE_HOSTS = new Set([
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "youtu.be",
  "www.youtu.be",
]);

function getYouTubeVideoId(url: URL): string | null {
  if (url.hostname.includes("youtu.be")) {
    return url.pathname.split("/").filter(Boolean)[0] ?? null;
  }

  const v = url.searchParams.get("v");
  if (v) return v;

  const segments = url.pathname.split("/").filter(Boolean);
  const idAfter = segments.findIndex((segment) => segment === "embed" || segment === "shorts");

  if (idAfter >= 0 && segments[idAfter + 1]) {
    return segments[idAfter + 1];
  }

  return null;
}

function getOEmbedEndpoint(url: URL): string | null {
  const encodedUrl = encodeURIComponent(url.toString());
  const host = url.hostname.replace(/^www\./, "");

  if (host.includes("soundcloud.com")) {
    return `https://soundcloud.com/oembed?format=json&url=${encodedUrl}`;
  }

  if (host.includes("spotify.com")) {
    return `https://open.spotify.com/oembed?url=${encodedUrl}`;
  }

  if (host.includes("youtube.com") || host.includes("youtu.be")) {
    return `https://www.youtube.com/oembed?format=json&url=${encodedUrl}`;
  }

  return null;
}

export async function extractMediaThumbnail(link: string): Promise<string | null> {
  try {
    const parsedUrl = new URL(link);

    if (YOUTUBE_HOSTS.has(parsedUrl.hostname)) {
      const videoId = getYouTubeVideoId(parsedUrl);
      if (videoId) {
        return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      }
    }

    const oEmbedEndpoint = getOEmbedEndpoint(parsedUrl);
    if (!oEmbedEndpoint) return null;

    const response = await fetch(oEmbedEndpoint, {
      next: { revalidate: 60 * 60 * 12 },
    });

    if (!response.ok) return null;

    const payload = (await response.json()) as {
      thumbnail_url?: string;
      thumbnail_url_with_play_button?: string;
    };

    return payload.thumbnail_url ?? payload.thumbnail_url_with_play_button ?? null;
  } catch {
    return null;
  }
}
