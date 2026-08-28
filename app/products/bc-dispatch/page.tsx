import ProductPage from "@/components/ProductPage";

export default function BCDispatch() {
  return (
    <ProductPage
      product={{
        name: "BC-Dispatch",
        category: "Communications",
        tagline: "Professional Dispatch System",
        description:
          "A modern communications and dispatch platform designed for police, fire, EMS and emergency communications departments.",
        features: [
          "Live Dispatch Calls",
          "Unit Management",
          "Call Assignment",
          "Priority System",
          "Department Channels",
          "Emergency Alerts",
          "Call History",
          "CAD Integration",
          "Dispatcher Tools",
        ],
        integrations: [
          "QBCore",
          "ESX",
          "Sonoran CAD",
          "ox_lib",
        ],
        requirements: [
          "FiveM Server",
          "QBCore or ESX",
          "oxmysql",
          "ox_lib",
        ],
        status: "COMING SOON",
      }}
    />
  );
}
