import { ContainerScroll } from "@/COMPONENTS/animation-tablet";
import Image from "next/image";
import { GoogleGeminiEffects } from "@/COMPONENTS/google-gemini";
import { Headerstext, Products } from "@/CONFIG/site";
import { Globe } from "@/COMPONENTS/globe/globe";
import HeroParallax from "@/COMPONENTS/hero-paralax";
import { FeaturesSection } from "@/COMPONENTS/feature";
import {StarsBackground} from "@/COMPONENTS/background-stars";
import {Stars} from "@/COMPONENTS/stars";

export default function page() {
  return (
    <>
      <section className="w-full h-[130vh] md:h-[140vh] relative">
        <div >
          <GoogleGeminiEffects
            title={Headerstext.title}
            Desc={Headerstext.desc}
            buttonText="Telusuri"
          
          />
        </div>
      </section>

      <section className="w-full h-full relative">
        <ContainerScroll
          titleComponent="Dashboard Panel."
          subtitleComponent="Memudahkan anda dalam mengelola usaha jasa servis smartphone secara digital."
          className="relative -top-[10rem]"
        >
          <Image
            src="/apps-1.png"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>
      <section className="w-full h-full relative">
        <HeroParallax
          className="w-full md:max-w-7xl md:mx-auto py-0 md:py-16 relative z-20 rounded-2xl "
          products={Products}
          textclassName="p-10"
          headerTitle="Easy and Friendly Access"
          headerDesc="Mudah untuk dioprasian dalam mengelola dan memanajemen jasa perbaikan smartphone. Anda dapat dengan mudah mengatur jadwal layanan, mengelola sparepart, accessories dan anda juga dapat mengakses informasi tentang status perbaikan."
        />
      </section>
      <section className="max-w-2xl md:max-w-screen-2xl md:mx-auto h-full relative">
        <Globe />
        <StarsBackground />
        <Stars />
      </section>
      <section className="w-full px-4 md:px-0 py-20 h-full relative">
        <FeaturesSection  />
      </section>
    </>
  );
}
