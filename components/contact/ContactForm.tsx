"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/kontakt/actions";
import type { ContactFormState } from "@/types/contact";
import Button from "@/components/ui/Button";

const initialState: ContactFormState = { status: "idle" };

const inputClass =
  "w-full rounded-button border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 " +
  "shadow-sm placeholder:text-neutral-400 " +
  "focus:border-fire-500 focus:outline-none focus:ring-1 focus:ring-fire-500 " +
  "disabled:opacity-50";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div
        role="alert"
        className="rounded-card border border-green-200 bg-green-50 p-6 text-green-800"
      >
        <h2 className="text-lg font-semibold mb-2">Nachricht gesendet!</h2>
        <p className="text-sm">
          Vielen Dank für deine Nachricht. Wir melden uns so bald wie möglich bei dir.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-6">
      {/* Honeypot — hidden from real users, filled by bots */}
      <div aria-hidden="true" style={{ display: "none" }}>
        <label htmlFor="website">Website (bitte leer lassen)</label>
        <input id="website" name="website" type="text" autoComplete="off" tabIndex={-1} />
      </div>

      {(state.status === "error" || state.status === "rate_limited") && (
        <div
          role="alert"
          className="rounded border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          {state.message ?? "Ein Fehler ist aufgetreten. Bitte versuche es erneut."}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-700">
            Name{" "}
            <span aria-hidden="true" className="text-fire-500">
              *
            </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={100}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-700">
            E-Mail{" "}
            <span aria-hidden="true" className="text-fire-500">
              *
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-neutral-700">
          Betreff{" "}
          <span aria-hidden="true" className="text-fire-500">
            *
          </span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={200}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-700">
          Nachricht{" "}
          <span aria-hidden="true" className="text-fire-500">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          className={`${inputClass} resize-y`}
        />
      </div>

      <p className="text-xs text-neutral-500">
        Felder mit{" "}
        <span aria-hidden="true" className="text-fire-500">
          *
        </span>{" "}
        sind Pflichtfelder.
      </p>

      <Button type="submit" disabled={isPending} variant="primary">
        {isPending ? "Wird gesendet…" : "Nachricht senden"}
      </Button>
    </form>
  );
}
