import { motion } from 'framer-motion';
import { SocialLinks } from './social-links';
import { LegalLinks } from './legal-links';
import { ContactForm } from './contact-form';
import { ContactInfo } from './contact-info';

export function Footer() {
  return (
    <footer className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-purple-900/90 z-10" />
        <img
          src="https://f9d9c4f415c1e144e8a5b378fc4e6321.cdn.bubble.io/f1733864630201x590170934439262500/rar-educacaofooter.png"
          alt="Footer background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <SocialLinks />
          <LegalLinks />
          <ContactForm />
          <ContactInfo />
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 - RAR INSIDE BUSINESSS. Todos os direitos reservados.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Política de Cookies
              </a>
              <span>•</span>
              <p>Site Desenvolvido pela equipe de designer da RAR</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}