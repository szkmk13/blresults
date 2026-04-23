export interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

export interface PlaceDetails {
  reviews: Review[];
  rating: number | null;
}

export async function getPlaceDetails(): Promise<PlaceDetails> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.PLACE_ID;

  if (!apiKey || !placeId) return { reviews: [], rating: null };

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&language=pl`,
      { next: { revalidate: 86400 } }
    );
    const data = await res.json();
    console.log("Google Places API response:", data);
    return {
      reviews: data.result?.reviews ?? [],
      rating: data.result?.rating ?? null,
    };
  } catch {
    return { reviews: [], rating: null };
  }
}
