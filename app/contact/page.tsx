import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 bg-white dark:bg-premium-dark">
        <div className="container mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 text-center">
              <div className="bg-primary-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-primary-purple" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-400">
                +62 856 7336 883
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 text-center">
              <div className="bg-primary-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-primary-purple" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">
                techkodwa@gmail.com
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 text-center">
              <div className="bg-primary-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-primary-purple" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Alamat</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Jl. Mangga Besar II, Jakarta Barat
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
