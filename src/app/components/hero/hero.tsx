// Hero.tsx
import CustomButton from "../button/Button";

export default function Hero() {
  return (
    <section className="hero min-h-screen ">
      <div className="hero-content gap-5 lg:flex-row flex-col">
        <div className="flex flex-col items-start gap-5">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-wrap max-w-xl text-5xl md:text-7xl font-extrabold text-transparent"
          >
            Find your dream car
          </h1>
          <p className="max-w-xl text-2xl ">
            Let us help you get your next car
          </p>
          <CustomButton type="button" style="text-[#F5F5F5] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-full">Explore cars</CustomButton>
        </div>
        <img src="/images/hero.webp" alt="car-bg" className="max-w-xl" />
      </div>
    </section>
  );
}
