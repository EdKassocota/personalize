import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      <div className="noise-overlay" />
      <div className="min-h-screen flex flex-col relative z-0">
        <Navbar />
        <main className="flex-1 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
