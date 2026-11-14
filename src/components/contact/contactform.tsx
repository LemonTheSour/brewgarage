"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { ContactFormValues } from "@/types/types";

const field =
  "w-full rounded-sm border border-neutral-400 p-2 text-base shadow-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20";
const errorText = "mt-1 text-sm text-red-700";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  // TODO: send to an email service / API route. For now we just confirm.
  const onSubmit: SubmitHandler<ContactFormValues> = async () => {
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <div role="status" className="rounded-md bg-neutral-100 p-6 text-center">
        <p className="text-lg font-bold">Thanks, we&apos;ll be in touch soon!</p>
        <button type="button" onClick={() => setSent(false)} className="mt-3 underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="firstName" className="sr-only">First name</label>
        <input
          id="firstName"
          placeholder="First Name *"
          autoComplete="given-name"
          aria-invalid={!!errors.firstName}
          {...register("firstName", { required: "Please enter your first name" })}
          className={field}
        />
        {errors.firstName && <p className={errorText}>{errors.firstName.message}</p>}
      </div>

      <div>
        <label htmlFor="lastName" className="sr-only">Last name</label>
        <input
          id="lastName"
          placeholder="Last Name"
          autoComplete="family-name"
          {...register("lastName")}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          inputMode="email"
          placeholder="Email *"
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
        <label htmlFor="phone" className="sr-only">Phone</label>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          placeholder="Phone"
          autoComplete="tel"
          {...register("phone")}
          className={field}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          placeholder="Message *"
          rows={5}
          aria-invalid={!!errors.message}
          {...register("message", { required: "Please enter a message" })}
          className={field}
        />
        {errors.message && <p className={errorText}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-11 w-full rounded-sm bg-black font-bold text-white shadow-md transition-colors hover:bg-neutral-800 disabled:opacity-60 sm:w-40"
      >
        Submit
      </button>
    </form>
  );
}
