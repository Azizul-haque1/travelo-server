export interface IDestination {
  _id?: string;
  name: string;
  country: string;
  city: string;
  shortDescription?: string;
  description: string;

  images: string[];
  thumbnail: string;

  category:
    | "Beach"
    | "Mountain"
    | "City"
    | "Island"
    | "Forest"
    | "Historical"
    | "Culture"
    | "Nature"
    | "Luxury"
    | "Adventure";

  tags?: string[];

  popularActivities?: string[];

  priceRange: {
    min: number;
    max: number;
  };

  location?: {
    lat: number;
    lng: number;
  };

  bestTimeToVisit?: string;

  rating?: number;
  totalReviews?: number;

  isFeatured?: boolean;

  createdAt?: string;
  updatedAt?: string;
}
