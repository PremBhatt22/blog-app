import BlogFooter from "@/components/home/BlogFooter";
import Navbar from "@/components/home/header/Navbar";
import TopArticles from "@/components/home/header/TopArticles";
import HeroSection from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-3xl lg-text-3xl sm:text-3xl">Featured Articles</h2>
              <p>Discover our most popular and trending content</p>
            </div>

            <TopArticles />
            <div className="pt-3 text-center">
              <Link href={"articles"}>
                <Button className="rounded-full bg-gray-800 text-white">View all articles...</Button>
              </Link>
            </div>
          </div>
        </section>
        <BlogFooter />
      </main>
    </>

  );
}
