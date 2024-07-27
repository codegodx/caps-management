
import { ContainerScroll } from "@/COMPONENTS/animation-tablet";
import Image from "next/image";
import { GoogleGeminiEffects } from "@/COMPONENTS/google-gemini";
import { Headerstext, Products } from "@/CONFIG/site";
import { Globe } from "@/COMPONENTS/globe/globe";
import HeroParallax from "@/COMPONENTS/hero-paralax";

export default function page() {
  return (
    <>
      <section className="w-full h-full bg-black">
        <GoogleGeminiEffects className="tracking-tighter leading-tight h-[55rem] relative " title={Headerstext.title} Desc={Headerstext.desc} buttonText="Telusuri" />
      </section>
      <section className="w-full h-full bg-black">
        <ContainerScroll
          titleComponent="Dashboard Panel."
          subtitleComponent="Memudahkan anda dalam mengelola usaha jasa servis smartphone secara digital."
          className="relative -top-[10rem]">
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
      <section >
        <HeroParallax className="w-full md:max-w-7xl md:mx-auto py-0 md:py-16 relative z-20 rounded-2xl no-visible-scrollbar " products={Products} textclassName="p-10" headerTitle="Easy and Friendly Access" headerDesc="Mudah untuk dioprasian dalam mengelola dan memanajemen jasa perbaikan smartphone. Anda dapat dengan mudah mengatur jadwal layanan, mengelola sparepart, accessories dan anda juga dapat mengakses informasi tentang status perbaikan." />
      </section>
      <section>
        <Globe className="max-w-screen-2xl mx-auto relative z-40" />
      </section>



    </>

  )
}












