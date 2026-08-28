import ProductPage from "@/components/ProductPage";

export default function BCDOJ() {
  return (
    <ProductPage
      product={{
        name: "BC-DOJ",
        category: "Justice",
        tagline: "Department of Justice System",
        description:
          "A complete justice-management platform for courts, prosecutors, attorneys and law enforcement agencies.",
        features: [
          "Case Management",
          "Court Cases",
          "Warrants",
          "Citations",
          "Court Documents",
          "Attorney Management",
          "Judge Management",
          "Case History",
          "Justice Records",
        ],
        integrations: [
          "QBCore",
          "ESX",
          "Sonoran CAD",
          "oxmysql",
        ],
        requirements: [
          "FiveM Server",
          "QBCore or ESX",
          "MySQL Database",
          "ox_lib",
        ],
        status: "COMING SOON",
      }}
    />
  );
}
