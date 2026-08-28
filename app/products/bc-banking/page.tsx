import ProductPage from "../../../components/ProductPage";

export default function BCBankingPage() {
  return (
    <ProductPage
      product={{
        slug: "bc-banking",
        name: "BC-Banking",
        category: "Economy",
        tagline: "Modern FiveM Banking System",

        description:
          "A professional banking experience designed to bring a complete financial system to your FiveM roleplay server.",

        image: "/products/bc-banking.png",

        status: "COMING SOON",
        price: "Coming Soon",

        features: [
          "Personal Accounts",
          "Business Accounts",
          "Money Transfers",
          "Transaction History",
          "Deposits",
          "Withdrawals",
          "Account Management",
          "Bank Locations",
          "Secure Transactions",
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
          "ox_lib",
        ],
      }}
    />
  );
}