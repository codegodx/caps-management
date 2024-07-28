import { Cmlogo } from "@/public/cmlogo";
import Link from "next/link";


export const Footer = ({menuLink}: { 
    menuLink : {
    title: string;
    link: string;
}[];
}) => {
  return (
    <footer className="w-full h-full p-4 bg-slate-800 place-content-center ">
<div className="grid grid-cols-1 sm:grid-cols-12 px-6">
              <div className="col-span-1 md:col-span-3 space-y-4">
                <div className="flex items-center">
                 <Cmlogo className="w-10 h-10" />
                 <p className="pl-2 font-semibold text-sm md:text-lg ">Caps Management</p>
                  </div>
                  <p>Office : Jl. Prof. Dr. Suharso Ruko Wello No.1, Arcawinangun, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah 53113</p>
              </div>    
    
        {menuLink.map((menuLink : any) => (
            <div key={menuLink.title} className="col-span-1 md:col-span-3 text-center">
                <Link href={menuLink.link}>{menuLink.title}</Link>
            </div>    
        ))}

</div>
    </footer>
  )
}
