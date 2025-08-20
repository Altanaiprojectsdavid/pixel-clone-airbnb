import { useState } from "react";
import { Search, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import heroImage from "@/assets/hero-cabin.jpg";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("stays");

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful cabin in the woods"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center text-white mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Not sure where to go? Perfect.
          </h1>
          <p className="text-xl opacity-90">
            Discover amazing places to stay around the world
          </p>
        </div>

        {/* Search Card */}
        <Card className="max-w-4xl mx-auto bg-background p-8 rounded-2xl shadow-2xl">
          {/* Tabs */}
          <div className="flex space-x-8 mb-8">
            <Button
              variant={activeTab === "stays" ? "default" : "ghost"}
              onClick={() => setActiveTab("stays")}
              className="text-base font-medium"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Stays
            </Button>
            <Button
              variant={activeTab === "experiences" ? "default" : "ghost"}
              onClick={() => setActiveTab("experiences")}
              className="text-base font-medium"
            >
              Experiences
            </Button>
            <Button
              variant={activeTab === "online" ? "default" : "ghost"}
              onClick={() => setActiveTab("online")}
              className="text-base font-medium"
            >
              Online Experiences
            </Button>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-border rounded-2xl overflow-hidden">
            {/* Where */}
            <div className="p-6 border-r border-border hover:bg-muted/50 cursor-pointer">
              <label className="block text-xs font-semibold text-foreground mb-1">
                WHERE
              </label>
              <input
                type="text"
                placeholder="Search destinations"
                className="w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
              />
            </div>

            {/* Check in */}
            <div className="p-6 border-r border-border hover:bg-muted/50 cursor-pointer">
              <label className="block text-xs font-semibold text-foreground mb-1">
                CHECK IN
              </label>
              <span className="text-sm text-muted-foreground">Add dates</span>
            </div>

            {/* Check out */}
            <div className="p-6 border-r border-border hover:bg-muted/50 cursor-pointer">
              <label className="block text-xs font-semibold text-foreground mb-1">
                CHECK OUT
              </label>
              <span className="text-sm text-muted-foreground">Add dates</span>
            </div>

            {/* Who */}
            <div className="p-6 hover:bg-muted/50 cursor-pointer flex items-center justify-between">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  WHO
                </label>
                <span className="text-sm text-muted-foreground">Add guests</span>
              </div>
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;