import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: "1",
    image: property1,
    title: "Beautiful Modern Apartment",
    location: "New York, United States",
    distance: "1,283 kilometers away",
    dates: "Nov 1–6",
    price: 145,
    rating: 4.98,
    isNew: true,
  },
  {
    id: "2",
    image: property2,
    title: "Cozy City Bedroom",
    location: "Los Angeles, United States",
    distance: "932 kilometers away",
    dates: "Oct 15–20",
    price: 89,
    rating: 4.87,
  },
  {
    id: "3",
    image: property3,
    title: "Luxury Villa with Pool",
    location: "Miami, United States",
    distance: "1,567 kilometers away",
    dates: "Dec 3–8",
    price: 289,
    rating: 4.95,
    isNew: true,
  },
  {
    id: "4",
    image: property1,
    title: "Modern Loft Downtown",
    location: "Chicago, United States",
    distance: "845 kilometers away",
    dates: "Nov 12–17",
    price: 125,
    rating: 4.92,
  },
  {
    id: "5",
    image: property2,
    title: "Stylish Studio Apartment",
    location: "San Francisco, United States",
    distance: "1,128 kilometers away",
    dates: "Oct 28–Nov 2",
    price: 179,
    rating: 4.89,
  },
  {
    id: "6",
    image: property3,
    title: "Beachfront Villa Paradise",
    location: "San Diego, United States",
    distance: "1,456 kilometers away",
    dates: "Nov 20–25",
    price: 320,
    rating: 4.96,
    isNew: true,
  },
  {
    id: "7",
    image: property1,
    title: "Contemporary Urban Home",
    location: "Seattle, United States",
    distance: "692 kilometers away",
    dates: "Dec 1–6",
    price: 95,
    rating: 4.84,
  },
  {
    id: "8",
    image: property2,
    title: "Elegant City Center Flat",
    location: "Portland, United States",
    distance: "578 kilometers away",
    dates: "Nov 8–13",
    price: 110,
    rating: 4.91,
  },
  {
    id: "9",
    image: property3,
    title: "Luxury Mountain Retreat",
    location: "Denver, United States",
    distance: "1,234 kilometers away",
    dates: "Dec 10–15",
    price: 245,
    rating: 4.97,
  },
  {
    id: "10",
    image: property1,
    title: "Modern Waterfront Condo",
    location: "Boston, United States",
    distance: "1,678 kilometers away",
    dates: "Nov 25–30",
    price: 165,
    rating: 4.93,
  },
  {
    id: "11",
    image: property2,
    title: "Chic Downtown Apartment",
    location: "Austin, United States",
    distance: "987 kilometers away",
    dates: "Oct 22–27",
    price: 135,
    rating: 4.88,
  },
  {
    id: "12",
    image: property3,
    title: "Designer Beach House",
    location: "Malibu, United States",
    distance: "1,345 kilometers away",
    dates: "Dec 5–10",
    price: 450,
    rating: 4.99,
    isNew: true,
  },
];

const PropertyGrid = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;