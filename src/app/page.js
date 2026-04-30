import HeroSection from "@/components/homePage/HeroSection";
import PopularCourses from "@/components/homePage/PopularCourses";
import TipsSection from "@/components/homePage/TipsSection";
import TopInstructors from "@/components/homePage/TopInstructors";
import TrendingSection from "@/components/homePage/TrendingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <PopularCourses/>
      <TipsSection/>
      <TopInstructors/>
      <TrendingSection/>
    </div>
  );
}
