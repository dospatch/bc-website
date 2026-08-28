import ProductPage from "@/components/ProductPage";

export default function BCTaxi() {
  return (
    <ProductPage
      product={{
        name: "BC-Taxi",
        category: "Jobs",
        tagline: "Complete Taxi Job System",
        description:
          "A professional taxi experience for FiveM servers featuring driver management, customer trips and immersive job functionality.",
        features: [
          "Taxi Job",
          "Driver Management",
          "Customer Requests",
          "Trip System",
          "Fare Calculation",
          "Driver Statistics",
          "Job Ranks",
          "Vehicle Integration",
          "Payment System",
        ],
        integrations: [
          "QBCore",
          "ESX",
          "ox_target",
          "ox_lib",
        ],
        requirements: [
          "FiveM Server",
          "QBCore or ESX",
          "ox_lib",
        ],
        status: "COMING SOON",
      }}
    />
  );
}
