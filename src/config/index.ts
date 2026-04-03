import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT || 4000,
  database_url: process.env.MONGODB_URI,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS || 12,
  jwt_secret: process.env.JWT_SECRET,
  jwt_expires_in: process.env.JWT_EXPIRES_IN,
  gemini_api_key: process.env.GEMINI_API_KEY,
  cookie_max_age: Number(process.env.COOKIE_MAX_AGE) || 7 * 24 * 60 * 60 * 1000,
  cookie_secure: process.env.NODE_ENV === "production",
  cookie_same_site: "lax" as const,
  frontend_url: process.env.FRONTEND_URL || "http://localhost:3000",
  backend_url: process.env.BACKEND_URL || "http://localhost:4000",
};
