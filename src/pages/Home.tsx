import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "react-router-dom";
import { Check, Truck, ShieldCheck, Camera, ArrowRight, Star } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-8 md:pt-16">
        <div className="flex-1 pt-8 md:pt-0 text-center md:text-left">
          <FadeIn>
            <span className="text-brand-green uppercase font-bold text-xs tracking-widest mb-4 inline-block">Arte para o seu espaço</span>
            <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.1] mb-6 font-normal">
              Seu momento,<br /><span className="italic">emoldurado</span> com elegância.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-[#2D3436]/80 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
              Loja especializada em quadros personalizados em Luanda. Transformamos suas memórias em peças de design exclusivas.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex gap-4 justify-center md:justify-start items-center">
              <Link
                to="/contacto"
                className="bg-brand-green text-white px-8 py-[14px] rounded-[2px] text-[14px] font-semibold tracking-[1px] uppercase transition-colors hover:bg-[#86c89a]"
              >
                Encomendar Agora
              </Link>
              <Link
                to="/galeria"
                className="text-xs font-bold uppercase tracking-widest border-b-2 border-brand-yellow pb-1 text-[#2D3436] hover:text-brand-green transition-colors pt-2"
              >
                Ver Galeria
              </Link>
            </div>
            
            <div className="mt-16 flex gap-4 md:gap-8 justify-center md:justify-start items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-pink"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-blue"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-green"></div>
              </div>
              <span className="text-xs text-[#2D3436]/60 font-medium tracking-wide">+500 quadros entregues em Luanda e Benguela</span>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.3} className="flex-1 w-full relative flex items-center justify-center pt-10 md:pt-0">
          <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
            
            <div className="absolute w-[220px] h-[280px] md:w-64 md:h-80 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rotate-[-6deg] z-10 border border-gray-100 flex flex-col">
              <div className="w-full h-full bg-gray-100 overflow-hidden relative">
                 <img 
                   src="/imgs/img1.jpg" 
                   alt="Série Pastel" 
                   loading="lazy"
                   className="object-cover w-full h-full"
                 />
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-widest font-bold opacity-30 text-[#2D3436]">Série Pastel - 01</div>
            </div>

            <div className="absolute w-[240px] h-[320px] md:w-72 md:h-96 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rotate-[4deg] z-20 border border-gray-100 flex flex-col">
              <div className="w-full h-full bg-[#E5E7EB] overflow-hidden relative">
                 <img 
                   src="/imgs/img2.jpg" 
                   alt="Retrato" 
                   loading="lazy"
                   className="object-cover w-full h-full"
                 />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#2D3436]">Retrato de Família</span>
                <span className="text-[10px] font-bold text-brand-green">NEW</span>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-4 w-40 h-40 bg-brand-yellow opacity-20 rounded-full blur-3xl"></div>
          </div>
        </FadeIn>
      </section>

      {/* Featured Products */}
      <section className="flex flex-col gap-10">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-center text-[#2D3436] mb-4">
            Destaques
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { id: 1, title: "Moldura Minimalista", price: "25.000 Kz", img: "/imgs/img3.jpg" },
            { id: 2, title: "Composição Botânica", price: "40.000 Kz", img: "/imgs/img4.jpg" },
            { id: 3, title: "Abstrato Suave", price: "35.000 Kz", img: "/imgs/img5.jpg" },
          ].map((item, index) => (
            <FadeIn key={item.id} delay={0.1 * (index + 1)} className="group cursor-pointer">
              <div className="flex flex-col gap-3">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-slate-100 transition-transform duration-300 md:group-hover:scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center px-1 mt-2">
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-[#2D3436]">{item.title}</h3>
                  <span className="text-[12px] font-bold text-brand-green">{item.price}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4} className="flex justify-center mt-4">
          <Link
            to="/galeria"
            className="text-xs font-bold uppercase tracking-widest border-b-2 border-brand-yellow pb-1 text-[#2D3436] hover:text-brand-green transition-colors"
          >
            Explorar todas as peças &rarr;
          </Link>
        </FadeIn>
      </section>

      {/* Process Section */}
      <section className="bg-brand-surface -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div>
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2D3436] mb-4">
              O Nosso Processo
            </h2>
            <p className="text-[#2D3436]/80 max-w-xl mx-auto">
              Transformar os seus momentos em arte é mais simples do que imagina.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Camera className="w-8 h-8 text-brand-green" />, 
                title: "1. Escolha a sua Foto", 
                desc: "Selecione aquela memória especial que merece um lugar de destaque na sua parede." 
              },
              { 
                icon: <Check className="w-8 h-8 text-brand-yellow" />, 
                title: "2. Personalize", 
                desc: "Escolha o tamanho, o tipo de moldura e o acabamento que melhor combina com o seu espaço." 
              },
              { 
                icon: <Truck className="w-8 h-8 text-brand-blue" />, 
                title: "3. Receba em Casa", 
                desc: "Nós tratamos de tudo. Produção artesanal e entrega segura em qualquer ponto de Luanda." 
              },
            ].map((step, index) => (
              <FadeIn key={index} delay={0.1 * index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-[12px] uppercase tracking-widest font-bold text-[#2D3436] mb-3">{step.title}</h3>
                <p className="text-sm text-[#2D3436]/80 leading-relaxed max-w-[250px]">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Categories / Styles Section */}
      <section className="flex flex-col gap-10">
        <FadeIn className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2D3436] mb-4">
              Estilos que <span className="italic text-brand-green">Inspiram</span>
            </h2>
            <p className="text-[#2D3436]/80">
              Descubra a nossa curadoria de estilos pensada para cada personalidade.
            </p>
          </div>
          <Link to="/galeria" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green">
            Ver Coleções <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeIn delay={0.1} className="relative group cursor-pointer overflow-hidden aspect-[16/9] md:aspect-auto md:h-[400px]">
            <img src="/imgs/img8.jpg" alt="Minimalista" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-[10px] uppercase tracking-[3px] font-bold mb-2 block">Coleção</span>
              <h3 className="text-3xl font-serif">Minimalista</h3>
            </div>
          </FadeIn>
          
          <div className="grid grid-rows-2 gap-6">
            <FadeIn delay={0.2} className="relative group cursor-pointer overflow-hidden">
              <img src="/imgs/img9.jpg" alt="Abstrato" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-serif">Abstrato Moderno</h3>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="relative group cursor-pointer overflow-hidden">
              <img src="/imgs/img6.jpg" alt="Clássico" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-serif">Retratos Clássicos</h3>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-[#2D3436] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-brand-green uppercase font-bold text-xs tracking-widest mb-4 inline-block">Qualidade Personalize</span>
              <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                O que torna os nossos quadros <span className="italic text-brand-yellow">excecionais</span>.
              </h2>
              <div className="space-y-8">
                {[
                  { icon: <ShieldCheck className="text-brand-green" />, title: "Materiais Premium", desc: "Molduras em madeira tratada e vidros de alta transparência." },
                  { icon: <Star className="text-brand-yellow" />, title: "Artesanato Local", desc: "Cada peça é montada à mão por artesãos experientes em Luanda." },
                  { icon: <Check className="text-brand-blue" />, title: "Satisfação Garantida", desc: "Se não ficar satisfeito, fazemos os ajustes necessários." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-[11px] mb-1">{item.title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative hidden lg:block">
              <div className="aspect-square bg-brand-green/20 rounded-full flex items-center justify-center p-12">
                <div className="w-full h-full border border-white/10 rounded-full flex items-center justify-center relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#2D3436] px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-xl">
                    Excelência
                  </div>
                  <div className="absolute bottom-10 left-0 -translate-x-1/2 bg-brand-yellow text-[#2D3436] px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-xl">
                    Durabilidade
                  </div>
                  <div className="absolute bottom-10 right-0 translate-x-1/2 bg-brand-pink text-[#2D3436] px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-xl">
                    Elegância
                  </div>
                  <img src="/imgs/logo.png" alt="Personalize" className="w-32 opacity-80 brightness-0 invert" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="py-10">
        <FadeIn className="bg-brand-pink/5 rounded-3xl p-8 md:p-16 flex flex-col items-center text-center gap-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-pink opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-blue opacity-10 rounded-full blur-3xl"></div>
          
          <div className="max-w-2xl z-10">
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2D3436] mb-6">
              Pronto para transformar a sua <span className="italic">casa</span>?
            </h2>
            <p className="text-[#2D3436]/80 mb-10">
              Subscreva para receber dicas de decoração e ofertas exclusivas da Personalize Luanda.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="O seu melhor e-mail" 
                className="flex-1 px-6 py-4 bg-white border border-gray-100 focus:outline-none focus:border-brand-green transition-colors text-sm rounded-[2px]"
              />
              <button className="bg-[#2D3436] text-white px-8 py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-brand-green transition-colors rounded-[2px]">
                Subscrever
              </button>
            </form>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
