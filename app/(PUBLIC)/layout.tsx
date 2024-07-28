import {Footer} from "@/COMPONENTS/footer";
import Navbars from "@/COMPONENTS/navbar";
import { footerMenu } from "@/CONFIG/site";



export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbars />
      <main className="antialiased min-h-screen" >
        {children}
      </main>
      <Footer menuLink={footerMenu}  />
    </>
  );
}
