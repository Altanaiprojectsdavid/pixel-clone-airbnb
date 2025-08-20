import { Globe, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-airbnb-gray-light">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Help Center</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">AirCover</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Anti-discrimination</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Disability support</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Cancellation options</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Report neighborhood concern</a></li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Airbnb your home</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">AirCover for Hosts</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Hosting resources</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Community forum</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Hosting responsibly</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Airbnb-friendly apartments</a></li>
            </ul>
          </div>

          {/* Airbnb */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Airbnb</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Newsroom</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">New features</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Investors</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Gift cards</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Airbnb.org emergency stays</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay informed</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <div className="flex space-x-2 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">
                © 2024 Airbnb, Inc.
              </span>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Sitemap
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Company details
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-sm">
                <Globe className="h-4 w-4 mr-2" />
                English (US)
              </Button>
              <Button variant="ghost" size="sm" className="text-sm">
                $ USD
              </Button>
              <div className="flex space-x-2">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;