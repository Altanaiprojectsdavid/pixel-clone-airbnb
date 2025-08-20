import { Search, Globe, Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              width="102"
              height="32"
              fill="currentColor"
              className="text-primary"
            >
              <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.47l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.03.03a169 169 0 00-.47 1.67c-.16.39-.26.83-.42 1.21-.38 1.07-.8 2.16-1.14 3.25 0 .16-.07.35-.07.52-.16 1.84-.16 3.65.2 5.41.4 1.78 1.14 3.46 2.27 4.86.16.2.28.37.47.52.2.2.39.34.6.5.36.25.7.52 1.15.73 1.42.73 2.96 1.15 4.58 1.15a10.3 10.3 0 004.25-.89c.23-.1.42-.2.65-.34l.23-.13.16-.09c.13-.06.26-.13.37-.2.4-.2.75-.4 1.18-.73.52-.39 1.04-.83 1.49-1.25.34-.34.65-.73.93-1.09l.1-.08c.2-.2.4-.44.62-.73l.23-.34.33-.45c.2-.28.37-.48.37-.48.18-.3.33-.57.4-.83.1-.13.2-.3.3-.47.15-.22.34-.49.4-.83l.17-.2c.02-.04.05-.08.08-.08a3.53 3.53 0 00.68-2.35c.03-.5-.08-1.01-.17-1.48v-.08c-.16-.39-.31-.83-.47-1.15l.03.03zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.78 5.78 0 01-.1-.3c-.05-.17-.13-.3-.18-.5-.02-.2-.02-.4 0-.6l.02-.15c.05-.2.15-.4.23-.6.1-.2.18-.33.33-.45a.3.3 0 01.17-.07c.18-.02.37 0 .52.07a1 1 0 01.68.5c.15.33.26.67.31 1.03.05.28.08.55.1.82.05.34.1.67.18.97.08.3.18.6.33.87.1.15.2.3.3.4l.15.14c.2.13.4.2.6.2a.6.6 0 00.61-.6c0-.2-.15-.33-.23-.5a4.84 4.84 0 01-.68-2.06c-.05-.17-.05-.34-.05-.5 0-.17.02-.34.07-.5.1-.34.25-.65.47-.9.18-.2.4-.34.67-.4.2-.05.4-.02.6.02.2.05.4.1.57.2.34.2.61.5.75.85.1.47.07.99-.1 1.45-.3.97-.73 1.94-1.18 2.85-.23.45-.5.87-.73 1.3-.05.1-.23.44-.23.53 0 .05 0 .1.07.14.33.53.68 1.06 1.02 1.55.23.34.45.64.68.97l.07.09c.18.22.33.45.5.66.07.1.13.2.23.27.05.03.1.08.17.1a.16.16 0 01.14.13c.02.05.02.1 0 .15-.07.2-.23.33-.4.45-.33.2-.73.2-1.09.07-.2-.08-.4-.2-.57-.33a9.9 9.9 0 01-2.16-2.05c-.2-.3-.34-.6-.5-.9-.08-.15-.23-.44-.23-.44s-.13.04-.18.09c-.17.18-.33.4-.5.6-.07.08-.13.17-.23.25-.05.05-.1.08-.17.1-.02 0-.05.03-.1.03-.05 0-.1-.03-.13-.07-.02-.07-.02-.14.02-.2.15-.33.18-.70.23-1.05.02-.17.07-.34.1-.5.05-.3.1-.55.18-.8.05-.17.13-.3.18-.5z"/>
            </svg>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-background border border-border rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium px-4">Anywhere</span>
              <div className="h-6 w-px bg-border"></div>
              <span className="text-sm font-medium px-4">Any week</span>
              <div className="h-6 w-px bg-border"></div>
              <span className="text-sm text-muted-foreground px-4">Add guests</span>
            </div>
            <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground p-2 ml-2">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-medium">
              Airbnb your home
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Globe className="h-4 w-4" />
            </Button>
            <div className="flex items-center border border-border rounded-full p-1 hover:shadow-md transition-shadow">
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-4 w-4" />
              </Button>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center ml-1">
                <User className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;