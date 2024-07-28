import Navbars from "@/COMPONENTS/navbar";

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
    </>
  );
}
