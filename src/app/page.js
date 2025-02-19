import HeroSection from "@/components/Hero/HeroSection";

export default function Home() {
  return (
    <div className="home">
      <HeroSection
        title="Homepage Title"
        description="Build fast, responsive websites with Next.js and Tailwind CSS"
        imgSrc="/hero.webp"
        isActiveBtn
      />
    </div>
  );
}
