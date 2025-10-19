import HomeFeatures from "@/components/sections/HomeFeatures";
import HomeHero from "@/components/sections/HomeHero";
import PricingSection from "@/components/sections/PricingSection";
import SecuritySection from "@/components/sections/SecuritySection";
import { Lock } from 'lucide-react';
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],

})



export default function Home() {
  return (
    <>

      <HomeHero />

      <section className=" flex flex-col  items-center gap-3 py-6 mt-20 ">

        <span className="flex items-center bg-gray-500 w-fit p-1 gap-2 px-4 font-bold rounded-3xl text-sm text-white"><Lock style={{ width: '18px' }} />Trusted by millions</span>

        <h1 className={`font-bold text-center text-2xl ${poppins.className}`}>Upload and store your files - all in one place</h1>
        <span className="block w-80 text-center text-gray-700">cloudify brings cloud storage, file and folder sharing,  — together into one place </span>
      </section>

      <HomeFeatures />

      <SecuritySection />
      <PricingSection />



    </>
  );
}
