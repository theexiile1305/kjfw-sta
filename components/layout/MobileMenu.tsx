"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NAV_ITEMS } from "./Header";

interface Props {
  items: typeof NAV_ITEMS;
}

export default function MobileMenu({ items }: Props) {
  const pathname = usePathname();
  // Derive open state from which pathname the menu was opened on.
  // When the route changes, isOpen automatically becomes false.
  const [openedAtPathname, setOpenedAtPathname] = useState<string | null>(null);
  const isOpen = openedAtPathname === pathname;
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setOpenedAtPathname(null);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpenedAtPathname((v) => (v === pathname ? null : pathname))}
        className="flex h-9 w-9 items-center justify-center rounded text-neutral-600
                   hover:bg-neutral-100 hover:text-fire-600 transition-colors"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-0 top-16 z-30 bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col divide-y divide-neutral-100 p-4" role="list">
              {items.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center py-4 text-lg font-medium text-neutral-800
                               no-underline hover:text-fire-600 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
