import { motion } from "framer-motion";
import { WhatsAppButton } from "./whatsapp-button";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10" />
        <img
          src="https://f9d9c4f415c1e144e8a5b378fc4e6321.cdn.bubble.io/f1733618441923x214548623908139100/hero-img.png"
          alt="Education Technology"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative pt-24">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            RAR Educação 5.0: Transforme Sua Instituição de Ensino
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12"
          >
            Capacite docentes, engaje alunos, agilize o atendimento com os assistentes, automatize processos e modernize sua instituição com soluções inteligentes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <WhatsAppButton 
              text="Fale com um Consultor"
              message="Olá, preciso de mais informações sobre RAR Educação 5.0."
              variant="outline"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}