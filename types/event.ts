export type EventCategory = "competition" | "training" | "event" | "other";

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // ISO 8601 "YYYY-MM-DD"
  endDate?: string;
  location?: string;
  description?: string;
  category: EventCategory;
}
