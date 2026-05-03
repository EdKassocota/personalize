import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-12">
      <FadeIn>
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
            Fale Connosco
          </h1>
          <p className="text-slate-500">
            Estamos prontos para ajudar a realizar o seu projeto de decoração.
          </p>
        </div>
      </FadeIn>

      <div className="bg-brand-surface border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="flex flex-col md:flex-row gap-12">
          
          <FadeIn delay={0.1} className="flex-1 space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Localização</h3>
                <p className="text-slate-600">Luanda, Angola</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">E-mail</h3>
                <p className="text-slate-600">geral@personalize.ao</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Horário</h3>
                <p className="text-slate-600">Segunda a Sexta: 09:00 - 18:00<br/>Sábado: 09:00 - 13:00</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="flex-1 flex flex-col justify-center gap-6">
            <div className="bg-brand-bg rounded-xl p-6 text-center space-y-4">
              <h3 className="font-medium text-slate-800">Atendimento Rápido</h3>
              <p className="text-sm text-slate-500">
                A maneira mais fácil e rápida de realizar a sua encomenda ou tirar dúvidas é através do nosso WhatsApp.
              </p>
              
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert("Redirecionando para o WhatsApp..."); }}
                className="inline-flex w-full items-center justify-center rounded-md bg-brand-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-green/90"
              >
                Mensagem no WhatsApp
              </a>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </div>
  );
}
