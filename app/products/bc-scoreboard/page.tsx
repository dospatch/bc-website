import ProductPage from "@/components/ProductPage";

export default function BCScoreboard() {
  return (
    <ProductPage
      product={{
        name: "BC-Scoreboard",
        category: "Core",
        tagline: "Advanced FiveM Server Scoreboard",
        description:
          "A clean and modern server scoreboard providing live player information, departments, server statistics and more.",
        features: [
          "Live Player List",
          "Department Counts",
          "Server Statistics",
          "Server Clock",
          "Server Uptime",
          "Player Information",
          "Priority Department Display",
          "Custom Branding",
          "Framework Detection",
        ],
        integrations: [
          "QBCore",
          "ESX",
          "ox_lib",
          "FiveM",
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
