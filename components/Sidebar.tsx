"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
  icon: (active: boolean) => React.ReactNode;
}

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      name: "Beranda",
      href: "/",
      icon: () => (
        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
      ),
    },
    {
      name: "Demografi",
      href: "/demografi",
      icon: () => (
        <svg className="w-4 h-4 mr-3 opacity-80" fill="currentColor" viewBox="0 0 20 20">
          <path clipRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fillRule="evenodd"></path>
        </svg>
      ),
    },
    {
      name: "Kasus Pneumonia",
      href: "/kasus-pneumonia",
      icon: () => (
        <svg className="w-4 h-4 mr-3 opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="6"></circle>
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.5-6.5l-2.8 2.8m-7.4 7.4l-2.8 2.8m0-13l2.8 2.8m7.4 7.4l2.8 2.8"></path>
        </svg>
      ),
    },
    {
      name: "Imunisasi",
      href: "/imunisasi",
      icon: () => (
        <svg className="w-4 h-4 mr-3 opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
    },
    {
      name: "Tenaga Kesehatan",
      href: "/tenaga-kesehatan",
      icon: () => (
        <svg className="w-4 h-4 mr-3 opacity-80" fill="currentColor" viewBox="0 0 20 20">
          <path clipRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd"></path>
        </svg>
      ),
    },
    {
      name: "Per Kecamatan",
      href: "/per-kecamatan",
      icon: () => (
        <svg className="w-4 h-4 mr-3 opacity-80" fill="currentColor" viewBox="0 0 20 20">
          <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"></path>
        </svg>
      ),
    },
    {
      name: "Tentang Data",
      href: "/tentang-data",
      icon: () => (
        <svg className="w-4 h-4 mr-3 opacity-80" fill="currentColor" viewBox="0 0 20 20">
          <path clipRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fillRule="evenodd"></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Mobile Sidebar Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300"
        />
      )}

      {/* Mobile Hamburger Floating Button (if sidebar closed) */}
      <button
        onClick={() => setMobileOpen(true)}
        aria-label="Buka Menu Navigasi"
        className="lg:hidden fixed bottom-4 right-4 z-50 p-3 rounded-full bg-[#0b224e] text-white shadow-xl hover:bg-blue-900 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0b224e] text-white flex-shrink-0 flex flex-col justify-between shadow-2xl lg:shadow-xl h-full pt-2 pb-0 overflow-y-auto lg:overflow-hidden transition-transform duration-300 ease-in-out lg:static ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Top Part: Logo & Navigation Items */}
        <div className="px-3 py-1 flex flex-col items-center flex-shrink-0">
          {/* Top Branding Row with Mobile Close Button */}
          <div className="w-full flex items-center justify-between mb-2 pt-0.5">
            <div className="w-7 lg:hidden"></div>
            {/* Government Logo Emblem */}
            <div className="flex flex-col items-center flex-1 text-center" data-purpose="region-branding">
              <div className="w-12 h-14 relative mb-1.5 flex items-center justify-center">
                <img
                  src="/assets/Logo-Kabupaten-Pekalongan.png"
                  alt="Logo Kabupaten Pekalongan"
                  className="w-full h-full object-contain drop-shadow"
                />
              </div>
              <h1 className="text-xs font-bold tracking-wide uppercase leading-tight text-slate-100">
                Kabupaten<br />Pekalongan
              </h1>
            </div>
            {/* Mobile Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Tutup Menu"
              className="lg:hidden p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="w-full space-y-1" data-purpose="navigation-menu">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/" || pathname === "/code.html" || pathname === "/index.html"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center px-3.5 py-1.5 rounded-lg text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-[#2563eb] text-white font-semibold shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-[#14326d] font-medium"
                  }`}
                >
                  {item.icon(isActive)}
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Healthcare Mother & Child Illustration */}
        <div
          className="w-full h-44 lg:h-1/2 px-2 flex items-end justify-center flex-shrink-0"
          data-purpose="sidebar-bottom-illustration"
        >
          <img
            src="/assets/Protected Mother and Baby Illustration.png"
            alt="Ilustrasi Ibu dan Bayi Sehat"
            className="w-full h-full object-contain object-bottom drop-shadow-lg"
          />
        </div>
      </aside>
    </>
  );
}
