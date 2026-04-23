import { getPlaceDetails } from "@/lib/google-reviews";
import About from "./About";

export default async function AboutSection() {
  const { rating } = await getPlaceDetails();
  return <About rating={rating} />;
}
