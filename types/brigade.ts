export interface BrigadeAddress {
  street: string;
  streetNumber: string;
  postCode: string;
  city: string;
}

export interface Brigade {
  id: string;
  name: string;
  type: "youth" | "children";
  website?: string;
  email?: string;
  fireStation?: BrigadeAddress;
}
