import { Link } from "wouter";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import logoSymbol from "@assets/logo_scaled2_1764865971860.png";

export function Footer() {
  return (
    <footer
      className="relative bg-gray-50 dark:bg-gray-900 border-t border-border overflow-hidden"
      data-testid="footer"
    >
      {/* Background Watermark */}
      <img
        src={logoSymbol}
        alt="Orbtrix Watermark"
        className="absolute opacity-[0.07] dark:opacity-[0.04] -z-10 w-[450px] bottom-0 right-0 translate-x-1/4 translate-y-1/4 pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + Socials + Phone */}
          <div className="flex flex-col items-start text-left -ml-2 sm:ml-0">
            <Link href="/" className="cursor-pointer">
              <img
                src={logoSymbol}
                alt="Orbtrix"
                className="h-12 w-auto"
                data-testid="img-logo-footer"
              />
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground font-medium">
              +91 89211 76123
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products/satellite-bus"
                  className="hover:text-primary"
                >
                  Autonomous EO Satellite
                </Link>
              </li>
              <li>
                <Link href="/products/rigel-os" className="hover:text-primary">
                  Rigel OS
                </Link>
              </li>
              <li>
                <Link href="/products/videra" className="hover:text-primary">
                  Videra
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-primary">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <address className="text-sm text-muted-foreground not-italic space-y-2">
              <p>
                <a
                  href="mailto:info@orbtrix.space"
                  className="hover:text-primary"
                >
                  info@orbtrix.space
                </a>
              </p>
              <p>
                No. 1190/1, FD 49, 4th Floor,
                <br />
                HSR Layout, Sector 3,
                <br />
                22nd Cross Road,
                <br />
                Bengaluru — 560102, India
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Orbtrix Space Private Limited.
            Bengaluru, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
