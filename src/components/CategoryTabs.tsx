import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import categoryHouse from "@/assets/category-house.jpg";
import categoryBeach from "@/assets/category-beach.jpg";
import categoryMountain from "@/assets/category-mountain.jpg";

const categories = [
  { id: "trending", name: "Trending", icon: "🔥" },
  { id: "beachfront", name: "Beachfront", icon: "🏖️", image: categoryBeach },
  { id: "cabins", name: "Cabins", icon: "🏡", image: categoryHouse },
  { id: "design", name: "Design", icon: "🎨" },
  { id: "amazing-views", name: "Amazing views", icon: "🏔️", image: categoryMountain },
  { id: "luxe", name: "Luxe", icon: "💎" },
  { id: "national-parks", name: "National parks", icon: "🏞️" },
  { id: "tiny-homes", name: "Tiny homes", icon: "🏘️" },
  { id: "lakefront", name: "Lakefront", icon: "🏞️" },
  { id: "mansions", name: "Mansions", icon: "🏰" },
  { id: "countryside", name: "Countryside", icon: "🌾" },
  { id: "pools", name: "Amazing pools", icon: "🏊" },
];

const CategoryTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState("trending");

  return (
    <section className="border-b border-border bg-background sticky top-20 z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="p-2 shrink-0">
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col items-center space-y-2 py-3 px-2 whitespace-nowrap border-b-2 transition-colors ${
                  selectedCategory === category.id
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                }`}
              >
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-6 h-6 object-cover rounded"
                  />
                ) : (
                  <span className="text-xl">{category.icon}</span>
                )}
                <span className="text-xs font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          <Button variant="ghost" size="sm" className="p-2 shrink-0">
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="ml-8 pl-8 border-l border-border">
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              <span className="mr-2">⚙️</span>
              Filters
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;