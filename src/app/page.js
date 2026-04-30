import HeroSection from "@/components/homePage/HeroSection";
import PopularCourses from "@/components/homePage/PopularCourses";
import TipsSection from "@/components/homePage/TipsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <PopularCourses/>
      <TipsSection/>
    </div>
  );
}
