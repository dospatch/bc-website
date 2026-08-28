import ProductPage from "../../../components/ProductPage";

export default function BCDOJPage() {
  return (
    <ProductPage
      product={{
        slug: "bc-doj",
        name: "BC-DOJ",
        category: "Justice",
        tagline: "Justice Management System",
        description:
          "A complete justice-management platform for courts, prosecutors, attorneys and law enforcement agencies. Manage cases, charges, court records, warrants and more.",
        image: "/products/bc-doj.png",
        status: "COMING SOON",
        price: "Coming Soon",
        features: [
          "Case Management",
          "Court Records",
          "Warrants",
          "Citations",
          "Charges",
          "Judge Management",
          "Attorney Management",
          "Court Documents",
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