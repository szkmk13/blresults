export interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

export async function getReviews(): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.PLACE_ID;

  if (!apiKey || !placeId) {
    return [];
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating&key=${apiKey}`,
      { next: { revalidate: 86400 } }
    );
    const data = await res.json();
    return data.result?.reviews ?? [];
  } catch {
    return [];
  }
}
