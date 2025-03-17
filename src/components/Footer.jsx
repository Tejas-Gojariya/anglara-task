import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const socialLinks = [
  { href: "#", icon: Facebook },
  { href: "#", icon: Twitter },
  { href: "#", icon: Instagram },
  { href: "#", icon: Linkedin },
];

const footerLinks = [
  {
    title: "Product Links",
    links: ["Categories", "New Arrival", "Features", "Collections"],
  },
  {
    title: "Quick Links",
    links: ["About", "Contact", "Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Contact Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center text-white mb-4">
              <span className="font-bold text-xl">Logo</span>
            </Link>
            {[
              { Icon: Mail, text: "info@example.com" },
              { Icon: Phone, text: "+123 456 7890" },
              { Icon: MapPin, text: "123 Street, City, Country" },
            ].map(({ Icon, text }, index) => (
              <div key={index} className="flex items-center mb-4">
                <Icon className="w-5 h-5 mr-2 text-gray-400" />
                <span>{text}</span>
              </div>
            ))}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map(({ href, icon: Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map(({ title, links }, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* App Download Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <p className="text-gray-400 mb-4">
              Download our mobile app for a better experience
            </p>
            <div className="space-y-2">
              <a href="#" className="block">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OxWAbMw_Jp41aqVcNWAkb07sUMNv55R_vg&s" alt="App Store" className="h-10" />
              </a>
              <a href="#" className="block">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLt680BMynt45ppezbEzWnGjDlmd32b330A&s" alt="Google Play" className="h-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
