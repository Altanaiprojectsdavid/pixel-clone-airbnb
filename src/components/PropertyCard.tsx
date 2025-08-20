import { Heart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  distance: string;
  dates: string;
  price: number;
  rating: number;
  isNew?: boolean;
}

const PropertyCard = ({
  image,
  title,
  location,
  distance,
  dates,
  price,
  rating,
  isNew = false,
}: PropertyCardProps) => {
  return (
    <Card className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-2xl"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 p-2 hover:bg-background/80 rounded-full"
        >
          <Heart className="h-4 w-4" />
        </Button>
        {isNew && (
          <div className="absolute top-3 left-3 bg-background text-foreground text-xs font-semibold px-2 py-1 rounded">
            Guest favourite
          </div>
        )}
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-medium text-foreground line-clamp-1">{location}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-1">{distance}</p>
        <p className="text-sm text-muted-foreground mb-3">{dates}</p>

        <div className="flex items-baseline space-x-1">
          <span className="font-semibold text-foreground">${price}</span>
          <span className="text-sm text-muted-foreground">night</span>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;