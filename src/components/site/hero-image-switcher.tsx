"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroImages = [
  {
    src: "/benardo-hero image.png",
    alt: "Benardo portrait",
    imageClassName: "object-cover",
  },
  {
    src: "/benardo-pro-hero-hero background.png",
    alt: "Benardo hero background",
    imageClassName: "object-contain object-center",
  },
];

export function HeroImageSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative aspect-[7/9] overflow-hidden rounded-[18px] border border-white/10 bg-black/20">
      {heroImages.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className={`${image.imageClassName} transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
