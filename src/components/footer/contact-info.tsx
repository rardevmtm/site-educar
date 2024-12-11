import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Fale Conosco</h3>
      <ul className="space-y-4">
        <li>
          <motion.a
            href="tel:+5531999985651"
            className="flex items-center text-gray-300 hover:text-white transition-colors"
            whileHover={{ x: 5 }}
          >
            <Phone className="w-5 h-5 mr-2" />
            (31) 9 9998-5651
          </motion.a>
        </li>
        <li>
          <motion.a
            href="mailto:falecom@rardev.io"
            className="flex items-center text-gray-300 hover:text-white transition-colors"
            whileHover={{ x: 5 }}
          >
            <Mail className="w-5 h-5 mr-2" />
            falecom@rardev.io
          </motion.a>
        </li>
        <li>
          <motion.a
            href="https://wa.me/5531999985651"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-white transition-colors"
            whileHover={{ x: 5 }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </motion.a>
        </li>
      </ul>
    </div>
  );
}