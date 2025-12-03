import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t-16 border-white text-gray-300 font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-red-700">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-red-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-red-700 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/what-you-need"
                  className="hover:text-red-700 transition-colors"
                >
                  What You Need
                </Link>
              </li>
              <li>
                <a
                  href="#download"
                  className="hover:text-red-700 transition-colors"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-red-700">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@aeroduel.com"
                  className="hover:text-red-700 transition-colors flex items-center gap-2"
                >
                  <span>contact@aeroduel.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Aeroduel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-700 transition-colors flex items-center gap-2"
                >
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/flashing-logo-text-stacked-subtle.gif"
                alt="jet logo"
                height={40}
                width={400}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-skyblue/60">
            <p>© {currentYear} Aeroduel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
