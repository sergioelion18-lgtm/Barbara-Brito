/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, Instagram, MessageCircle, Phone, MapPin, Sparkles, User, Stethoscope, HeartPulse } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5584987418106&text=Oi%2C+Dra.Barbara+Brito%2C+vim+do+Instagram+e+gostaria+de+marcar+uma+consulta.&type=phone_number&app_absent=0";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-neutral-200">
      {/* Sticky Header for Mobile */}
      <nav className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md md:hidden">
        <div className="flex h-16 items-center justify-between px-6">
          <span className="font-semibold tracking-tight">Dra. Barbara Brito</span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-xs font-medium text-white shadow-sm transition-transform active:scale-95">
            <MessageCircle size={14} />
            Agendar
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-screen-xl">
        {/* Hero Section */}
        <section id="hero" className="relative grid min-h-[90vh] grid-cols-1 items-center overflow-hidden pt-16 md:grid-cols-2 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center px-6 py-12 md:px-12"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-neutral-200/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                <Sparkles size={12} className="text-neutral-950" />
                Natal - RN
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tighter text-neutral-950 sm:text-5xl lg:text-7xl">
              Eu ajudo você a voltar a sorrir com <span className="italic italic text-neutral-600">confiança</span>
            </h1>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-neutral-600 md:text-xl">
              Atendimento humanizado, direto comigo, focado em estética, saúde e na sua autoestima. Sem dor, sem insegurança.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-8 py-4 text-sm font-semibold text-white shadow-2xl transition-all hover:bg-neutral-800 hover:shadow-neutral-950/20 active:scale-95"
              >
                <MessageCircle size={18} />
                Agendar Consulta Gratuita
              </a>
              <div className="flex flex-col justify-center sm:ml-2">
                <span className="text-xs font-medium text-neutral-400">Resposta rápida • Sem compromisso</span>
                <span className="text-xs font-bold text-red-500">⚠️ Poucas vagas disponíveis esta semana</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-full min-h-[400px] md:min-h-screen"
          >
            <img 
              src="https://i.imgur.com/7LavIOo.png" 
              alt="Dra. Barbara Brito" 
              className="absolute inset-0 h-full w-full object-cover object-top brightness-105"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlay for integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-transparent md:bg-gradient-to-r md:from-neutral-50 md:via-transparent md:to-transparent" />
          </motion.div>
        </section>

        {/* Identification Section */}
        <section id="pain" className="bg-neutral-950 py-24 text-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div {...fadeIn} className="text-center">
              <h2 className="mb-12 text-3xl font-semibold tracking-tight md:text-4xl">Se você se identifica com isso, eu posso te ajudar:</h2>
              <div className="grid gap-6 text-left md:grid-cols-2">
                {[
                  "Você evita sorrir em fotos",
                  "Sente vergonha ou insegurança com seus dentes",
                  "Já adiou tratamentos por medo do dentista",
                  "Não confia em qualquer profissional",
                  "Quer um atendimento calmo e sem pressa",
                  "Busca resultados estéticos naturais"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-white" />
                    <span className="text-lg font-medium text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[2.5rem] bg-neutral-200"
              >
                <img 
                  src="https://i.imgur.com/5klDYDH.png" 
                  alt="Dra. Barbara Brito Atendimento" 
                  className="h-full w-full object-cover grayscale-[20%] transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div {...fadeIn} viewport={{ once: true }}>
                <span className="mb-4 inline-block font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">Minha Missão</span>
                <h2 className="mb-6 text-4xl font-semibold tracking-tight text-neutral-950 lg:text-5xl">Eu não trato apenas dentes. Eu cuido de <span className="italic">pessoas</span>.</h2>
                <p className="mb-8 text-lg leading-relaxed text-neutral-600">
                  Minha missão é devolver sua confiança através de um sorriso saudável, com um atendimento leve, humano e totalmente personalizado. Acredito que a odontologia de qualidade deve ser acessível e acolhedora.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: <Stethoscope size={20} />, text: "Pós-graduada em Endodontia" },
                    { icon: <HeartPulse size={20} />, text: "Pós-graduanda em Ortodontia" },
                    { icon: <User size={20} />, text: "Atendimento direto comigo" },
                    { icon: <CheckCircle2 size={20} />, text: "Clareza total e sem pressão" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-neutral-700">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 italic transition-transform hover:rotate-12">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="bg-white py-24">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              {/* VERSION 2.0 - UPDATED IMAGES - 2026-04-20 */}
              <h2 className="text-3xl font-extrabold uppercase tracking-tighter text-neutral-950 md:text-6xl">Provas Reais de Transformação</h2>
              <p className="mt-4 text-neutral-500">Resultados que comprovam a excelência e o cuidado em cada detalhe.</p>
            </div>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6"
            >
              {[
                "https://i.imgur.com/scyzBU6.png",
                "https://i.imgur.com/9kVYetf.png",
                "https://i.imgur.com/lQk9WP5.png",
                "https://i.imgur.com/dxLAc40.png",
                "https://i.imgur.com/qo6wryz.png",
                "https://i.imgur.com/8zhrZwr.png"
              ].map((src, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeIn}
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-100"
                >
                  <img 
                    src={src} 
                    alt={`Resultado ${i + 1}`} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>
            <p className="mx-auto mt-8 max-w-sm text-center text-[10px] uppercase leading-tight tracking-widest text-neutral-400">
              *Resultados podem variar de pessoa para pessoa. Imagens compartilhadas com autorização dos pacientes.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-neutral-50 py-24">
          <div className="container mx-auto px-6 max-w-4xl">
             <div className="grid gap-8 md:grid-cols-3">
               {[
                 "“Eu tinha muita vergonha de sorrir… hoje eu sorrio sem medo em todas as fotos. A Dra. Barbara é incrível.”",
                 "“Atendimento impecável! Me senti segura e acolhida desde o primeiro contato no WhatsApp até o consultório.”",
                 "“Explica tudo com calma, sem empurrar procedimentos. Super profissional e humana. Recomendo para todos.”"
               ].map((quote, i) => (
                 <motion.div 
                  key={i} 
                  {...fadeIn} 
                  transition={{ delay: i * 0.2 }}
                  className="relative flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                 >
                   <p className="text-lg italic leading-relaxed text-neutral-800">{quote}</p>
                   <div className="mt-6 flex items-center gap-2">
                     <div className="h-1 w-8 rounded-full bg-neutral-200" />
                     <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Paciente Real</span>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24">
           <div className="container mx-auto px-6 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid gap-12 md:grid-cols-2"
            >
              <div>
                <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">Por que confiar <br /> em mim?</h2>
                <p className="text-lg text-neutral-600">Escolher o profissional certo é fundamental para um tratamento tranquilo e duradouro.</p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Atendimento personalizado diretamente comigo",
                  "Sem tratamentos ou gastos desnecessários",
                  "Ambiente confortável e seguro",
                  "Transparência total sobre seu caso",
                  "Uso das melhores tecnologias e materiais",
                  "Foco na estética aliado à saúde bucal"
                ].map((benefit, i) => (
                  <div key={i} className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-950/20">
                    <Sparkles size={20} className="text-neutral-950" />
                    <span className="font-semibold text-neutral-900 leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
           </div>
        </section>

        {/* Steps */}
        <section className="bg-neutral-950 py-24 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-16 text-3xl font-semibold tracking-tight md:text-4xl">Sua jornada para um novo sorriso</h2>
            <div className="relative mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              {[
                { step: "01", title: "Primeiro Contato", desc: "Clique no botão e fale comigo diretamente no WhatsApp." },
                { step: "02", title: "Agendamento", desc: "Escolha o melhor horário para sua visita." },
                { step: "03", title: "Avaliação Gratuita", desc: "Venha fazer seu diagnóstico sem qualquer compromisso." }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 text-2xl font-bold italic">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
              {/* Connector line for desktop */}
              <div className="absolute top-8 left-0 hidden h-px w-full bg-white/10 md:block" />
            </div>
          </div>
        </section>

        {/* Daily Gallery */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="mb-12 flex flex-col items-end justify-between md:flex-row md:items-center">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">Meu dia a dia</h2>
              <a href="https://www.instagram.com/dra.barbarabritto/" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 font-semibold text-neutral-500 transition-colors hover:text-neutral-950">
                <Instagram size={20} />
                Siga no Instagram
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {[
                "https://i.imgur.com/qo6wryz.png",
                "https://i.imgur.com/8zhrZwr.png",
                "https://i.imgur.com/UJD9iB7.png"
              ].map((src, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={`${i === 0 ? "col-span-2 md:col-span-1" : ""} aspect-[4/5] overflow-hidden rounded-[2rem] bg-neutral-100`}
                >
                  <img 
                    src={src} 
                    alt={`Dia a dia ${i + 1}`} 
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden py-32 text-center">
          <div className="container relative z-10 mx-auto px-6">
            <motion.div {...fadeIn}>
              <h2 className="mb-8 text-4xl font-semibold tracking-tighter text-neutral-950 md:text-6xl">
                Seu sorriso pode mudar — e <br /> começa com uma conversa
              </h2>
              <p className="mx-auto mb-12 max-w-lg text-lg text-neutral-500">
                Agende sua avaliação gratuita hoje mesmo e descubra como transformaremos sua autoestima.
              </p>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 rounded-2xl bg-neutral-950 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all hover:bg-neutral-800 hover:shadow-neutral-950/20 active:scale-95"
              >
                <MessageCircle size={24} />
                Quero Agendar Minha Consulta
              </a>
            </motion.div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-neutral-200/50 blur-3xl" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-neutral-200/50 blur-3xl" />
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-200 py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-xl font-bold tracking-tighter">Dra. Barbara Brito</h3>
                <p className="text-sm font-medium text-neutral-400">CRO/RN 8112 • Cirurgiã dentista</p>
              </div>
              <div className="grid grid-cols-2 gap-12 md:gap-24">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">Localização</span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-neutral-600">
                    <MapPin size={16} />
                    Natal - RN
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">Contato</span>
                  <a href={WHATSAPP_URL} className="flex items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors hover:text-neutral-950">
                    <Phone size={16} />
                    WhatsApp
                  </a>
                  <a href="https://www.instagram.com/dra.barbarabritto/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors hover:text-neutral-950">
                    <Instagram size={16} />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center justify-between border-t border-neutral-100 pt-8 gap-4 md:flex-row">
              <p className="text-[10px] font-medium uppercase tracking-widest text-neutral-300">
                © {new Date().getFullYear()} Dra. Barbara Brito. Todos os direitos reservados.
              </p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-neutral-300">
               Feito com excelência para sorrisos incríveis.
              </p>
            </div>
          </div>
        </footer>

        {/* Fixed Floating CTA for Mobile */}
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-48px)] -translate-x-1/2 md:hidden"
        >
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-neutral-950 py-4 text-sm font-bold text-white shadow-2xl ring-4 ring-neutral-50"
          >
            <MessageCircle size={18} />
            Agendar Avaliação Gratuita
          </a>
        </motion.div>
      </main>
    </div>
  );
}
