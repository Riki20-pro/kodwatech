import React from "react";
import Link from "next/link";
import { Mail, Phone, Globe, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-premium-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter">
              KODWA<span className="text-primary-purple">TECH</span>
            </span>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Agensi transformasi digital terpercaya yang berfokus pada kualitas
            tinggi dan kepuasan klien.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com/techkodwa.id"
              target="_blank"
              className="hover:text-primary-purple transition-colors"
            >
              <Globe size={20} />
            </Link>
            <Link
              href="https://wa.me/628567336883"
              target="_blank"
              className="hover:text-primary-purple transition-colors"
            >
              <MessageSquare size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Layanan</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Perusahaan</h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="hover:text-white transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Kontak</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-primary-purple" />
              <span>techkodwa@gmail.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-primary-purple" />
              <span>+62 856 7336 883</span>
            </li>
            <li className="text-sm">Jl. Mangga Besar II, Jakarta Barat</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} KODWA TECH. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
