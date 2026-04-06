import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GSAPProvider } from "@/components/ui/GSAPProvider";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content">
        <GSAPProvider>{children}</GSAPProvider>
      </main>
      <Footer />
    </>
  );
}
