import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/legal" },
  { label: "Terms of Service", href: "/legal" },
  { label: "Contact", href: "/contact" },
  { label: "Our Team", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="w-full rounded-t-xl bg-secondary-container mt-xl">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter py-xl gap-md max-w-container-max mx-auto">
        <div className="space-y-sm text-center md:text-left">
          <p className="font-headline-md text-headline-md text-primary tracking-tight">
            Sossus Physiotherapy
          </p>
          <p className="text-on-secondary-container/80 font-body-md text-body-md">
            © {new Date().getFullYear()} Sossus Physiotherapy Namibia.
            Desert-Modern Healing.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-md">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-on-secondary-container/80 font-body-md text-body-md hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
