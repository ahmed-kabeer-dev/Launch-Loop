import HeroSection from "@/components/ui/landing-page/hero-section";
import FeaturedProducts from "@/components/ui/landing-page/featured-products";
import RecentlyLaunchedProducts from "@/components/ui/landing-page/recently-launched-products";

export default function Home() {
  return (
    <div>
    <HeroSection />
    <FeaturedProducts />
    <RecentlyLaunchedProducts />
  </div>
  );
}
