"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  const pathname = usePathname();

  // Daftar halaman tanpa header/footer
  const hideLayout = pathname.startsWith("/mydrive");

  return (
    <div className="size-full py-3">
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </div>
  );
};
