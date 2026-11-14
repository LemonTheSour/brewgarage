"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { ContactFormValues } from "@/types/types";
import { btnDark } from "@/lib/ui";

const field =
  "w-full rounded-sm border border-ink/25 bg-paper px-3 py-2.5 text-base focus:border-ink focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/60";
const errorText = "mt-1 text-sm text-red-700";
const labelCls = "mb-1 block text-sm font-semibold uppercase tracking-wide";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  // Demo only for now. TODO: send via EmailJS (emailjs.send) once the client confirms.
  const onSubmit: SubmitHandler<ContactFormValues> = async () => {
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <div role="status" className="rounded-sm border-l-4 border-brand bg-paper p-8">
        <p className="font-display text-3xl font-bold uppercase">Thanks, we&apos;ll be in touch soon!</p>
        <button type="button" onClick={() => setSent(false)} className="mt-3 underline underline-offset-4">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="firstName" className={labelCls}>First name *</label>
        <input
          id="firstName"
          autoComplete="given-name"
          aria-invalid={!!errors.firstName}
          {...register("firstName", { required: "Please enter your first name" })}
          className={field}
        />
        {errors.firstName && <p className={errorText}>{errors.firstName.message}</p>}
      </div>

      <div>
        <label htmlFor="lastName" className={labelCls}>Last name</label>
        <input
          id="lastName"
          autoComplete="family-name"
          {...register("lastName")}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>Email *</label>
        <input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email", {
            required: "Please enter your email",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email" },
          })}
          className={field}
        />
        {errors.email && <p className={errorText}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className={labelCls}>Phone</label>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          {...register("phone")}
          className={field}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelCls}>Message *</label>
        <textarea
          id="message"
          rows={6}
          aria-invalid={!!errors.message}
          {...register("message", { required: "Please enter a message" })}
          className={field}
        />
        {errors.message && <p className={errorText}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`${btnDark} w-full disabled:opacity-60 sm:w-48`}
      >
        Submit
      </button>
    </form>
  );
}
