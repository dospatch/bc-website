import ProductPage from "../../components/ProductPage";

export default function BCMdtPage() {
  return (
    <ProductPage
      product={{
        slug: "bc-mdt",

        name: "BC-MDT",

        category: "Law Enforcement",

        tagline:
          "Mobile Data Terminal",

        description:
          "A modern, professional Mobile Data Terminal designed for FiveM roleplay communities. Manage people, vehicles, reports, warrants, BOLOs and more from one powerful system.",

        image:
          "/products/bc-mdt.png",

        status:
          "COMING SOON",

        price:
          "Coming Soon",

        features: [
          "Character Database",
          "Vehicle Database",
          "Warrants",
          "BOLO System",
          "Mugshots",
          "Reports",
          "Citations",
          "Dispatch Calls",
          "NCIC-Style Search",
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