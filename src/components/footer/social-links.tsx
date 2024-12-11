import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Music } from 'lucide-react';

const socialLinks = [
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/rar.insidebusiness/', 
    label: 'Instagram' 
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/company/rar-inside-business', 
    label: 'LinkedIn' 
  },
  { 
    icon: Youtube, 
    href: 'https://www.youtube.com/@rarinsidebusiness', 
    label: 'YouTube' 
  },
  { 
    icon: Music, 
    href: 'https://open.spotify.com/show/2Wj21xScAHK1tPE4dWgI2g', 
    label: 'Spotify' 
  },
];

export function SocialLinks() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Siga-nos</h3>
      <div className="flex space-x-4">
        {socialLinks.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label={social.label}
          >
            <social.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}