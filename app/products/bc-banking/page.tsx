import ProductPage from "@/components/ProductPage";

export default function BCBanking() {
  return (
    <ProductPage
      product={{
        name: "BC-Banking",
        category: "Economy",
        tagline: "Modern FiveM Banking System",
        description:
          "A professional banking experience designed to bring a complete financial system to your FiveM roleplay server.",
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
        status: "COMING SOON",
      }}
    />
  );
}
