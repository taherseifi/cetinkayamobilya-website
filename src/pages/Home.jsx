import Hero from "../componet/Hero";
import AboutSection from "../componet/AboutSection";
import ProductSlider from "../componet/ProductSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />

      <ProductSlider
        title="TV Ünitesi"
        images={[
          "/images/tv1.webp",
          "/images/tv2.webp",
          "/images/tv3.webp",
          "/images/tv4.webp",
        ]}
      />

      <ProductSlider
        title="Mutfak Dolabı"
        reverse
        images={[
          "/images/kitchen1.webp",
          "/images/kitchen2.webp",
          "/images/kitchen3.webp",
          "/images/kitchen4.webp",
          "/images/kitchen5.webp",
          "/images/kitchen6.webp",
          "/images/kitchen7.webp",
          "/images/kitchen8.webp",
          "/images/kitchen9.webp",
          "/images/kitchen10.webp",
          "/images/kitchen11.webp",
          "/images/kitchen12.webp",
        ]}
      />

      <ProductSlider
        title="Banyo Dolabı"
        images={[
          "/images/bath1.webp",
          "/images/bath2.webp",
          "/images/bath3.webp",
          "/images/bath4.webp",
          "/images/bath5.webp",
          "/images/bath6.webp",
        ]}
      />
    </>
  );
}