import { model, Schema } from "mongoose";
import { IDestination } from "../types/destination.interface";

const destinationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    shortDescription: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    images: {
      type: [String],
      required: true,
      validate: {
        validator: (value: string[]) => value.length > 0,
        message: "At least one image is required",
      },
    },

    thumbnail: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "Beach",
        "Mountain",
        "City",
        "Island",
        "Forest",
        "Historical",
        "Adventure",
        "Culture",
        "Nature",
        "Luxury",
      ],
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    popularActivities: {
      type: [String],
      default: [],
    },

    priceRange: {
      min: {
        type: Number,
        required: true,
        min: 0,
      },

      max: {
        type: Number,
        required: true,
        min: 0,
      },
    },

    location: {
      lat: Number,
      lng: Number,
    },

    bestTimeToVisit: {
      type: String,
      trim: true,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    totalReviews: {
      type: Number,
      default: 0,
      min: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Destination = model("Destination", destinationSchema);
