import type { Metadata } from "next";
import ResumeContent from "@/components/site/ResumeContent";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Benard M (Benard Mulindi) — music business consultant and full-stack developer based in Nakuru, Kenya, working with small and medium-sized businesses and upcoming artists across all towns in Kenya.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return <ResumeContent />;
}
