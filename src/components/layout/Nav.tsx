"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Assess Pain", href: "/assess" },
  { label: "Book Now", href: "/book" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-on-surface/10 transition-all duration-300 ease-in-out ${
        scrolled ? "py-sm shadow-md" : "py-md shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-headline-md text-headline-md text-primary tracking-tight"
        >
          Sossus Physiotherapy
        </Link>

        <div className="hidden md:flex gap-lg items-center">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary-container"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/portal/sign-in"
          className="bg-primary text-on-primary px-lg py-sm rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all shadow-md active:scale-95"
        >
          Patient Portal
        </Link>
      </div>
    </nav>
  );
}
