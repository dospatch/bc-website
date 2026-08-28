import ProductPage from "@/components/ProductPage";

export default function BCDispatchPage() {
  return (
    <ProductPage
      product={{
        slug: "bc-dispatch",
        name: "BC-Dispatch",
        category: "Communications",
        tagline: "Professional Dispatch System",
        description:
          "A modern dispatch platform built for police, fire, EMS and communications departments. Manage calls, units, statuses and communications from one powerful system.",
        image: null,
        status: "COMING SOON",
        price: "Coming Soon",
        features: [
          "Live Calls",
          "911 Calls",
          "Unit Management",
          "Dispatch Status",
          "CAD Integration",
          "Radio Integration",
          "Department Support",
          "Call Management",
        ],
        integrations: [
          "QBCore",
          "ESX",
          "Sonoran CAD",
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