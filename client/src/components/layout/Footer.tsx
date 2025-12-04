import { Link } from "wouter";
import logoSymbol from "@assets/logo_scaled2_1764865971860.png";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/">
              <span className="flex items-center gap-2 cursor-pointer" data-testid="link-footer-logo">
                <img
                  src={logoSymbol}
                  alt="Orbtrix"
                  className="h-10 w-auto"
                  data-testid="img-logo-footer"
                />
                <span className="text-lg font-semibold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                  Orbtrix
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Autonomous satellites. Operational by default.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-products-heading">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/satellite-bus">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-satellite-bus">
                    Autonomous EO Satellite Bus
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products/rigel-os">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-rigel-os">
                    Rigel OS
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products/videra">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-videra">
                    Videra
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-company-heading">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-solutions">
                    Solutions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-contact">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-contact-heading">Contact</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>
                <a 
                  href="mailto:contact@orbtrix.space" 
                  className="hover:text-primary transition-colors" 
                  data-testid="link-footer-email"
                >
                  contact@orbtrix.space
                </a>
              </p>
              <p data-testid="text-footer-address">
                No. 1190/1, FD 49, 4th Floor,<br />
                HSR Layout, Sector 3,<br />
                22nd Cross Road,<br />
                Bengaluru — 560102
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Orbtrix Space Private Limited. Bengaluru, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
