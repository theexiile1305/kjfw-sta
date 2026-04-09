export interface ContactFormState {
  status: "idle" | "success" | "error" | "rate_limited";
  message?: string;
}
