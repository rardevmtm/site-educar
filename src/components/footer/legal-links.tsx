import { motion } from 'framer-motion';

const links = [
  { href: '#', label: 'Política de Privacidade' },
  { href: '#', label: 'Termos de Uso' },
];

export function LegalLinks() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Links Úteis</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <motion.a
              href={link.href}
              whileHover={{ x: 5 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
}