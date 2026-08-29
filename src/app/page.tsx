import { getAllPosts } from "@/lib/posts";
import HomePageClient from "@/components/HomePageClient";

export default async function Home() {
  // Fetch the latest 3 posts on the server
  const latestPosts = getAllPosts().slice(0, 3);

  // Pass them down to the animated client component
  return <HomePageClient insightsPosts={latestPosts} />;
}