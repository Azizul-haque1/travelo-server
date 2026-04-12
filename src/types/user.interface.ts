export interface IUser {
  _id?: string;

  name: string;
  email: string;
  password?: string;

  image?: string;

  role: "user" | "admin";
  status: "active" | "inactive" | "suspended"; // access control

  wishlist?: string[];
  bookings?: string[];
  reviews?: string[];
  lastLoginAt?: Date;

  isVerified: boolean;

  createdAt?: string;
  updatedAt?: string;
}
