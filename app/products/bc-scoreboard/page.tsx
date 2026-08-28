import ProductPage from "../../../components/ProductPage";

export default function BCScoreboardPage() {
  return (
    <ProductPage
      product={{
        slug: "bc-scoreboard",
        name: "BC-Scoreboard",
        category: "Core",
        tagline: "Professional FiveM Scoreboard",
        description:
          "A professional FiveM scoreboard displaying live player information, server statistics, department counts and custom server branding.",
        image: "/products/bc-scoreboard.png",
        status: "COMING SOON",
        price: "Coming Soon",
        features: [
          "Live Player Count",
          "Server Uptime",
          "Player Avatars",
          "Department Counts",
          "Custom Branding",
          "QBCore Support",
          "ESX Support",
          "Server Statistics",
        ],
        integrations: [
          "QBCore",
          "ESX",
          "ox_lib",
          "oxmysql",
        ],
        requirements: [
          "FiveM Server",
          "QBCore or ESX",
          "ox_lib",
          "MySQL Database",
        ],
      }}
    />
  );
}