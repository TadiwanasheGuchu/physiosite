import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="relative pt-24 overflow-x-hidden min-h-svh">
        {children}
      </main>
      <Footer />
    </>
  );
}
