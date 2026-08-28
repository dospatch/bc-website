import ProductPage from "@/components/ProductPage";

export default function BCTaxiPage() {
  return (
    <ProductPage
      product={{
        slug: "bc-taxi",
        name: "BC-Taxi",
        category: "Jobs",
        tagline: "Complete Taxi Job System",
        description:
          "A complete taxi job system with driver management, customer trips, fares and configurable payouts designed for immersive FiveM roleplay.",
        image: null,
        status: "COMING SOON",
        price: "Coming Soon",
        features: [
          "Taxi Requests",
          "Driver Status",
          "Trip Management",
          "Fare System",
          "Driver Payouts",
          "Job Integration",
          "Configurable Rates",
          "Customer Management",
        ],
        integrations: [
          "QBCore",
          "ESX",
          "oxmysql",
          "ox_lib",
        ],
        requirements: [
          "FiveM Server",
          "QBCore or ESX",
          "MySQL Database",
          "oxmysql",
          "ox_lib",
        ],
      }}
    />
  );
}