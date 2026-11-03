import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Dashboard Pneumonia Balita - Kabupaten Pekalongan 2024",
  description: "Sistem Informasi Kesehatan Publik dan Surveilans Pneumonia Balita Kabupaten Pekalongan Tahun 2024",
  icons: {
    icon: "/assets/Logo-Kabupaten-Pekalongan.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen lg:h-screen w-full lg:w-screen flex flex-col lg:flex-row bg-[#f3f7fa] font-sans antialiased overflow-x-hidden lg:overflow-hidden selection:bg-blue-200">
        <Sidebar />
        <div className="flex-1 min-w-0 h-full overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
