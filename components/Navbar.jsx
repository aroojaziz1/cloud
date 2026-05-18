'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { FiMapPin, FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileDropdownBridal, setMobileDropdownBridal] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const MenuDivider = () => (
    <div className="w-[92%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-100" />
  );

  const linkStyles =
    "block w-full px-6 py-2.5 text-center text-[13px] tracking-[0.1em] text-[#676869] hover:text-[#171717] hover:bg-gray-50/80 transition-all duration-300 font-normal";

  const activeLinkClass = "text-[#171717] font-medium";
  const inactiveLinkClass = "hover:text-[#171717]";

  return (
    <header className="sticky top-0 z-[999] bg-white shadow-sm">
      {/* ================= TOP BAR ================= */}
      <div className="border-b bg-[#f7f1f0]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-6 md:gap-12 text-[#676869]">
          <div className="hidden md:flex items-center gap-3 text-[11px] font-normal tracking-wider">
            <FiMapPin size={12} />
            <span>Plot-014A-GF Hall, DHA Phase 7</span>
          </div>

          <span className="hidden md:block w-px h-3 bg-gray-300/60" />

          <a
            href="tel:+923330601258"
            className="hidden md:flex items-center gap-3 text-[11px] font-normal tracking-wider hover:text-[#171717]"
          >
            <FiPhone size={12} />
            0333-0601258
          </a>

          <span className="hidden md:block w-px h-3 bg-gray-300/60" />

          <div className="flex items-center gap-7">
            <a href="https://www.facebook.com/p/Arooj-Aziz-100063690026718/" target="_blank" rel="noreferrer" className="hover:text-[#171717]"><FaFacebookF size={13} /></a>
            <a href="https://www.instagram.com/aroojaziz_/" target="_blank" rel="noreferrer" className="hover:text-[#171717]"><FaInstagram size={14} /></a>
            <a href="https://wa.me/923330601258" target="_blank" rel="noreferrer" className="hover:text-[#171717]"><FaWhatsapp size={15} /></a>
          </div>
        </div>
      </div>

      {/* ================= LOGO & MOBILE HAMBURGER ================= */}
      {/* Fixed: Balanced py-4 padding and clean items-center positioning */}
      <div className="py-4 px-6 border-b border-gray-100 flex items-center justify-between md:justify-center relative">
        <Link href="/" className="hover:opacity-80 transition-opacity block z-10">
          <h1 className="text-lg md:text-xl tracking-[5px] font-normal text-[#171717] m-0 leading-none">
            AROOJ AZIZ
          </h1>
        </Link>
        
        <button 
          className="md:hidden text-[#676869] p-1 flex items-center justify-center transition-transform active:scale-95" 
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle Menu"
        >
          {mobileMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="relative bg-white border-b border-gray-100 hidden md:block">
        <div className="flex items-center justify-center px-6 pt-2 py-4">
          <ul className="flex items-center gap-14 text-[12px] tracking-[0.2em] font-normal text-[#676869]">
            <li>
              <Link href="/" className={`${isActive('/') ? activeLinkClass : inactiveLinkClass}`}>
                HOME
              </Link>
            </li>

            {/* BRIDAL DROPDOWN */}
            <li className="relative group py-1">
              <Link
                href="/bridals"
                className={`hover:text-[#171717] uppercase ${isActive('/bridals') ? activeLinkClass : ''}`}
              >
                Bridal
              </Link>
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-48 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="flex flex-col py-1">
                  <Link href="/bridals/gulbadan" className={linkStyles}>Gulbadan</Link>
                  <MenuDivider />
                  <Link href="/bridals/zebaish" className={linkStyles}>Zebaish</Link>
                  <MenuDivider />
                  <Link href="/bridals/bridal-couture-2026" className={linkStyles}>Bridal Couture'26</Link>
                </div>
              </div>
            </li>

            {/* LUXURY PRET DROPDOWN */}
            <li className="relative group py-1">
              <Link
                href="/luxury-pret"
                className={`hover:text-[#171717] uppercase ${isActive('/luxury-pret') ? activeLinkClass : ''}`}
              >
                Luxury pret
              </Link>
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-48 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="flex flex-col py-1">
                  <Link href="/luxury-pret/aaira" className={linkStyles}>Aaira</Link>
                  <MenuDivider />
                  <Link href="/luxury-pret/wania" className={linkStyles}>Wania</Link>
                  <MenuDivider />
                  <Link href="/luxury-pret/velvet" className={linkStyles}>Velvet Edition </Link>
                </div>
              </div>
            </li>

            {/* FORMAL */}
            <li>
              <Link
                href="/formal"
                className={`hover:text-[#171717] uppercase ${isActive('/formal') ? activeLinkClass : ''}`}
              >
                Formal
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ================= MOBILE NAV ================= */}
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden z-[1000] border-t">
          <ul className="flex flex-col text-[13px] tracking-widest text-[#676869]">
            <Link href="/" className="py-4 text-center border-b" onClick={() => setMobileMenu(false)}>Home</Link>

            {/* Fixed: Split row into Main Category Link + Toggle Dropdown Button */}
            <li className="border-b flex items-center justify-between pl-12 pr-6">
              <Link href="/bridals" className="py-4 flex-1 text-center translate-x-3" onClick={() => setMobileMenu(false)}>
                Bridal
              </Link>
              <button 
                onClick={() => setMobileDropdownBridal(!mobileDropdownBridal)} 
                className={`p-2 transition-transform duration-200 ${mobileDropdownBridal ? 'rotate-180' : ''}`}
              >
                <FaChevronDown size={14} />
              </button>
            </li>
            {mobileDropdownBridal && (
              <div className="bg-gray-50 flex flex-col border-b">
                <Link href="/bridals/gulbadan" className="py-3 text-center" onClick={() => setMobileMenu(false)}>Gulbadan</Link>
                <Link href="/bridals/zebaish" className="py-3 text-center" onClick={() => setMobileMenu(false)}>Zebaish</Link>
                <Link href="/bridals/bridal-couture-2026" className="py-3 text-center" onClick={() => setMobileMenu(false)}>Bridal Couture'26</Link>
              </div>
            )}

            {/* Fixed: Split row into Main Category Link + Toggle Dropdown Button */}
            <li className="border-b flex items-center justify-between pl-12 pr-6">
              <Link href="/luxury-pret" className="py-4 flex-1 text-center translate-x-3" onClick={() => setMobileMenu(false)}>
                Luxury Pret
              </Link>
              <button 
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} 
                className={`p-2 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
              >
                <FaChevronDown size={14} />
              </button>
            </li>
            {mobileDropdownOpen && (
              <div className="bg-gray-50 flex flex-col border-b">
                <Link href="/luxury-pret/aaira" className="py-3 text-center" onClick={() => setMobileMenu(false)}>Aaira</Link>
                <Link href="/luxury-pret/wania" className="py-3 text-center" onClick={() => setMobileMenu(false)}>Wania</Link>
                <Link href="/luxury-pret/velvet" className="py-3 text-center" onClick={() => setMobileMenu(false)}>Velvet Edition </Link>
              </div>
            )}

            <Link href="/formal" className="py-4 text-center border-b" onClick={() => setMobileMenu(false)}>Formal</Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;