import HeroSection from "@/components/homePage/HeroSection";
import PopularCourses from "@/components/homePage/PopularCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <PopularCourses/>
    </div>
  );
}
