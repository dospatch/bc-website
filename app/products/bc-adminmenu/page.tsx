import ProductPage from "@/components/ProductPage";

export default function BCAdminMenuPage() {
  return (
    <ProductPage
      product={{
        slug: "bc-adminmenu",
        name: "BC-AdminMenu",
        category: "Administration",
        tagline: "Professional FiveM Admin Menu",
        description:
          "A powerful administration menu designed for FiveM server staff. Manage players, server tools, permissions and administrative actions from one professional interface.",
        image: "/products/bc-adminmenu.png",
        status: "COMING SOON",
        price: "Coming Soon",
        features: [
          "Player Management",
          "Teleport Tools",
          "Vehicle Management",
          "Ban & Kick Tools",
          "Server Management",
          "Permission System",
          "Staff Tools",
          "Developer Tools",
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