import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer/footer";
import {
  Brain,
  BookOpen,
  Users,
  Bot,
  Target,
  School,
  MessageSquare,
  Clock,
  Zap,
  Award,
  CheckCircle,
} from 'lucide-react';
import { motion } from "framer-motion";
import { WhatsAppButton } from "./components/whatsapp-button";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      {/* What is RAR Section */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-16">O Que é o RAR Educação 5.0?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
              RAR Educação 5.0 é uma solução completa para transformar a experiência educacional de sua instituição,
              integrando tecnologia de ponta, inteligência artificial e metodologias inovadoras para preparar docentes
              e engajar alunos.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Brain}
              title="Workshop de IA"
              description="Capacitação em Inteligência Artificial para educadores"
            />
            <FeatureCard
              icon={Target}
              title="Consultoria Estratégica"
              description="Planejamento e implementação personalizada"
            />
            <FeatureCard
              icon={Bot}
              title="Atendimento Inteligente"
              description="Automação e eficiência no atendimento"
            />
            <FeatureCard
              icon={BookOpen}
              title="Estudos Personalizados"
              description="Trilhas de aprendizado adaptativas"
            />
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gray-100" id="solutions">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Os Desafios que Enfrentamos Juntos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: School, text: "Concorrência crescente entre instituições" },
              { icon: Bot, text: "Falta de uso de tecnologias modernas no ensino" },
              { icon: Users, text: "Docentes despreparados para novas tecnologias" },
              { icon: MessageSquare, text: "Comunicação ineficiente com pais e alunos" },
              { icon: Clock, text: "Atendimentos administrativos lentos e burocráticos" },
              { icon: Zap, text: "Ensino desatualizado para a Geração Z" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-6 bg-white rounded-lg shadow-md"
              >
                <item.icon className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Por Que Escolher o RAR Educação 5.0?
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {[
              "Aumente a competitividade da sua instituição",
              "Melhore o engajamento de alunos com ensino interativo",
              "Automatize processos e economize recursos",
              "Ofereça uma experiência satisfatória para pais e alunos",
              "Prepare docentes para o futuro da educação",
              "Ofereça atendimento cada vez mais automatizado e com linguagem natural"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center mb-6"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Uma Solução Desenvolvida por Especialistas</h2>
            <p className="text-xl text-gray-600 mb-8">
              Liderado por Michelle Hanne, mestre em Ciência da Computação, o RAR Educação 5.0 foi criado para
              conectar instituições de ensino ao futuro, com tecnologia ética e acessível.
            </p>
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Professional workspace"
              className="rounded-lg shadow-xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforme Sua Instituição Agora</h2>
            <p className="text-xl mb-12 text-blue-100">
              Entre em contato conosco e descubra como levar sua instituição para o futuro da educação.
            </p>
            <div className="flex justify-center mb-8">
              <WhatsAppButton
                text="Fale com um Consultor"
                message="Olá, preciso de mais informações sobre o RAR Educação 5.0."
                variant="outline"
              />
            </div>
            <p className="text-blue-100">
              Não perca a oportunidade de preparar sua instituição para o futuro. Fale conosco agora mesmo!
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}