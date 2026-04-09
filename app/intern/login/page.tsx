"use client";

import { useActionState } from "react";
import Image from "next/image";
import { loginIntern } from "@/app/intern/actions";

const initialState = { error: null };

export default function InternLoginPage() {
  const [state, formAction, pending] = useActionState(loginIntern, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Image
            src="/logo.png"
            alt="KJF Starnberg"
            width={72}
            height={72}
            className="mx-auto mb-4 rounded object-contain"
          />
          <h1 className="text-2xl font-bold text-neutral-900">Interner Bereich</h1>
          <p className="mt-2 text-sm text-neutral-500">
            Geschützter Bereich für Mitglieder der Kreisjugendfeuerwehr Starnberg. Hier finden Sie
            interne Dokumente und Dateien zum Herunterladen.
          </p>
        </div>

        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
              Passwort
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded border border-neutral-300 px-3 py-2 text-sm
                         focus:border-fire-500 focus:outline-none focus:ring-1 focus:ring-fire-500"
            />
          </div>

          {state.error && (
            <p role="alert" className="text-sm text-red-600 font-medium">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-button bg-fire-500 px-4 py-2 text-sm font-semibold
                       text-white hover:bg-fire-600 transition-colors disabled:opacity-60
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire-400"
          >
            {pending ? "Bitte warten…" : "Anmelden"}
          </button>
        </form>
      </div>
    </div>
  );
}
