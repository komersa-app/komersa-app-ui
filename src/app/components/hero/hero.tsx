// Hero.tsx
import { Height } from "@mui/icons-material";
import CustomButton from "../button/Button";

export default function Hero() {
  return (
    <section className="hero " style={{minHeight:"90vh"}}>
      <div className="hero-content space-x-72 lg:flex-row flex-col " style={{width:"90%",height:"70%"}}>
        <div className="flex flex-col items-start gap-5" style={{height:"70%",justifyContent:"center"}}>
          <h1
            className=" bg-clip-text text-wrap max-w-xl  md:text-5xl font-bold " style={{fontSize:"40px"}}
          >
           BEST CAR SELLER
          </h1>
          <p className="max-w-xl text-xl font-semibold ">
            LET US HELP YOU TO GET YOUR  CAR
          </p>
          <button className="btn   btn-outline">Explore Car</button>
        </div>
        
        <div><img src="/images/hero.webp" alt="car-bg" className="max-w-xl" /></div>
      </div>
    </section>
   
  );
}
