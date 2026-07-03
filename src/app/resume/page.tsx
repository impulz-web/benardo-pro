import type { Metadata } from "next";
import ResumeContent from "@/components/site/ResumeContent";

export const metadata: Metadata = {
  title: "Resume | Benard Mulindi",
  description: "Professional resume of Benard Mulindi - Full-Stack Developer & Media Producer",
};

export default function ResumePage() {
  return <ResumeContent />;
}
