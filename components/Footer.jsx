import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-6 pt-0 pb-16 bg-[#f7f1f0] relative z-10">
      <div className="mx-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* About Us */}
        <div className="md:col-span-2 flex flex-col space-y-6 pt-12 pr-0 md:pr-12 text-center md:text-left">
          <h2 className="text-[14px] tracking-[0.2em] text-[#171717] font-normal uppercase">
            About us
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#676869] font-normal px-4 md:px-0">
            The house of Arooj Aziz is synonymous with sophistication and
            elegance. Imbued with a time-honoured aesthetic and inimitable
            artistry the brand stands as an icon of our gloriously regal
            heritage reimagined through a kaleidoscope of colour, cut and craft.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-6 pt-12 text-center md:text-left">
          <h2 className="text-[14px] tracking-[0.2em] text-[#171717] font-normal uppercase">
            Quick links
          </h2>
          <ul className="space-y-4 text-[15px] text-[#676869] font-normal">
            <li><Link href="/" className="hover:text-[#171717] transition-colors">Home</Link></li>
            <li><Link href="/bridals" className="hover:text-[#171717] transition-colors">Bridal</Link></li>
            <li><Link href="/luxury-pret" className="hover:text-[#171717] transition-colors">Luxury pret</Link></li>
            <li><Link href="/formal" className="hover:text-[#171717] transition-colors">Formal</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-6 pt-12 items-center md:items-end text-center">
          <h2 className="text-[14px] tracking-[0.2em] text-[#171717] font-normal uppercase">
            Follow us
          </h2>
          <div className="flex gap-8 md:gap-6">
            <a href="https://www.facebook.com/p/Arooj-Aziz-100063690026718/" target="_blank" rel="noopener noreferrer" className="text-[#676869] hover:text-[#171717] transition-all hover:-translate-y-1">
              <FaFacebookF size={16} />
            </a>
            <a href="https://www.instagram.com/aroojaziz_/" target="_blank" rel="noopener noreferrer" className="text-[#676869] hover:text-[#171717] transition-all hover:-translate-y-1">
              <FaInstagram size={18} />
            </a>
            <a href="https://wa.me/923330601258" target="_blank" rel="noopener noreferrer" className="text-[#676869] hover:text-[#171717] transition-all hover:-translate-y-1">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200/40 text-center">
        <p className="text-[11px] tracking-[0.3em] text-[#676869] font-normal uppercase opacity-80">
          © {new Date().getFullYear()} Arooj Aziz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;