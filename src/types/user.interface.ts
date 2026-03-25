export interface IUser {
  _id?: string;

  name: string;
  email: string;
  password?: string;

  avatar?: string;

  role: "user" | "admin";

  wishlist?: string[];
  bookings?: string[];
  reviews?: string[];

  isVerified: boolean;

  createdAt: string;
  updatedAt: string;
}