"use client";

import { FormEvent, useState } from "react";
import type { ServiceOffered } from "@/lib/supabase/server";

type ContactFormProps = {
  services: ServiceOffered[];
};

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

export function ContactForm({ services }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      timeline: String(formData.get("timeline") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      serviceId: String(formData.get("serviceId") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to submit form right now.");
      }

      setStatus({
        type: "success",
        message: "Thanks! Your request was submitted successfully.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-foreground">Full name *</span>
          <input
            name="fullName"
            required
            className="w-full rounded-xl border border-white/12 bg-[#111] px-4 py-2.5 text-foreground outline-none ring-accent/40 transition focus:ring"
            placeholder="Jane Doe"
          />
        </label>

        <label className="space-y-2 text-sm">
          <span className="text-foreground">Email *</span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-white/12 bg-[#111] px-4 py-2.5 text-foreground outline-none ring-accent/40 transition focus:ring"
            placeholder="you@example.com"
          />
        </label>

        <label className="space-y-2 text-sm">
          <span className="text-foreground">Phone</span>
          <input
            name="phone"
            className="w-full rounded-xl border border-white/12 bg-[#111] px-4 py-2.5 text-foreground outline-none ring-accent/40 transition focus:ring"
            placeholder="+254..."
          />
        </label>

        <label className="space-y-2 text-sm">
          <span className="text-foreground">Company / Brand</span>
          <input
            name="company"
            className="w-full rounded-xl border border-white/12 bg-[#111] px-4 py-2.5 text-foreground outline-none ring-accent/40 transition focus:ring"
            placeholder="Your company"
          />
        </label>

        <label className="space-y-2 text-sm sm:col-span-2">
          <span className="text-foreground">Service needed *</span>
          <select
            name="serviceId"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/12 bg-[#111] px-4 py-2.5 text-foreground outline-none ring-accent/40 transition focus:ring"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm sm:col-span-2">
          <span className="text-foreground">Timeline</span>
          <input
            name="timeline"
            className="w-full rounded-xl border border-white/12 bg-[#111] px-4 py-2.5 text-foreground outline-none ring-accent/40 transition focus:ring"
            placeholder="Example: Need to launch in 4 weeks"
          />
        </label>

        <label className="space-y-2 text-sm sm:col-span-2">
          <span className="text-foreground">Project details *</span>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full rounded-xl border border-white/12 bg-[#111] px-4 py-2.5 text-foreground outline-none ring-accent/40 transition focus:ring"
            placeholder="Tell me about your goals, constraints, and what success looks like."
          />
        </label>
      </div>

      {status.type !== "idle" ? (
        <p className={`text-sm ${status.type === "success" ? "text-accent" : "text-red-400"}`}>
          {status.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-semibold tracking-tight text-[#0B0B0B] shadow-[0_12px_30px_rgba(97,206,112,0.3)] transition duration-200 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send inquiry"}
      </button>
    </form>
  );
}