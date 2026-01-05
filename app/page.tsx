import Image from "next/image";

const services = [
  {
    title: "Atendimento psicológico individual",
    description:
      "Indicado para adultos que enfrentam sofrimento emocional, processos de perda, mudanças significativas, adoecimento próprio ou de familiares, e outras situações que impactam a saúde mental.",
  },
  {
    title: "Acompanhamento psicológico em luto",
    description:
      "Atendimento especializado para pessoas que vivenciam o luto, respeitando o tempo, a história e a forma singular de cada indivíduo elaborar a perda.",
  },
  {
    title: "Psicologia em cuidados paliativos",
    description:
      "Apoio psicológico a pacientes, familiares e cuidadores em contextos de adoecimento grave e progressivo, com base em experiência clínica e hospitalar.",
  },
  {
    title: "Atendimento familiar",
    description:
      "Acompanhamento psicológico que considera o contexto familiar como parte fundamental do cuidado, promovendo suporte emocional, diálogo e compreensão entre os envolvidos.",
  },
];

const modalities = [
  "Atendimento presencial (Porto Alegre e região)",
  "Atendimento online",
  "Atendimento domiciliar (home care)",
];

const differentials = [
  "Especialização em luto e cuidados paliativos",
  "Formação em Psicologia Hospitalar e experiência em ambiente hospitalar",
  "Atuação em contextos como hemodiálise e internações prolongadas",
  "Atendimento ético, responsável e comprometido",
  "Escuta sensível aliada a um sólido senso clínico",
  "Reconhecimento profissional por pacientes e colegas da área",
  "Abordagem humanizada, sem perder o rigor técnico",
  "Flexibilidade de atendimento para diferentes realidades e necessidades",
];

const steps = [
  {
    title: "Primeiro contato",
    description:
      "Você entra em contato para esclarecer dúvidas e obter informações sobre o atendimento.",
  },
  {
    title: "Avaliação inicial",
    description:
      "Buscamos compreender sua demanda, contexto e necessidades específicas.",
  },
  {
    title: "Acompanhamento psicológico",
    description:
      "As sessões são conduzidas de forma ética, acolhedora e personalizada.",
  },
  {
    title: "Processo contínuo",
    description:
      "O acompanhamento é construído ao longo do tempo, com ajustes conforme as necessidades emocionais e o momento vivido.",
  },
];

export default function Home() {
  return (
    <main className="space-y-16 pb-16">
      <section className="bg-slate-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4D77B3]">
              Atendimento psicológico especializado
            </p>
            <h1 className="font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Atendimento psicológico especializado para adultos e famílias que enfrentam o luto, o sofrimento emocional e os desafios dos cuidados paliativos.
            </h1>
            <p className="text-base text-slate-700 sm:text-lg">
              Com experiência clínica e hospitalar, ofereço um acompanhamento ético, acolhedor e tecnicamente qualificado para quem vive momentos de alta vulnerabilidade emocional.
            </p>
            <p className="text-sm text-slate-500">
              Atendimento presencial em Porto Alegre e região, online e domiciliar (home care).
            </p>
            <a
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#4D77B3] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-[#3f68a1]"
              href="https://wa.me/5551996791968?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20atendimento%20psicológico."
            >
              Falar no WhatsApp
            </a>
          </div>
          <div className="animate-fade-up delay-150">
            <Image
              src="/images/hero-atendimento-psicologico.png"
              alt="Atendimento psicológico"
              width={960}
              height={540}
              priority
              className="h-auto w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-12 px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="animate-fade-up">
            <Image
              src="/images/lais-duarte-retrato-profissional.png"
              alt="Retrato profissional da psicóloga Laís Duarte"
              width={768}
              height={1024}
              className="h-auto w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
          <div className="space-y-5 animate-fade-up delay-150">
            <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">Sobre a profissional</h2>
            <p>
              Sou Laís Duarte, psicóloga clínica, com formação e atuação voltadas para a área da saúde, luto e cuidados paliativos.
            </p>
            <p>
              Graduada em Psicologia com ênfase em saúde, sou especialista em Psicologia Hospitalar e possuo formação multidisciplinar em Cuidados Paliativos. Minha trajetória profissional inclui experiência em contextos hospitalares, como hemodiálise, internações prolongadas e acompanhamento de pacientes e famílias em situações de adoecimento grave.
            </p>
            <p>
              Atuo também na clínica psicológica, com foco no atendimento de adultos e famílias que vivenciam perdas, sofrimento emocional intenso e processos de luto.
            </p>
            <p>
              Meu trabalho é fundamentado na ética, na escuta qualificada e no respeito à singularidade de cada pessoa, oferecendo um espaço seguro para o cuidado emocional em momentos complexos da vida.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
          <div className="space-y-3 animate-fade-up">
            <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">Serviços</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-heading text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-up">
            <h3 className="font-heading text-base font-semibold text-slate-900">Modalidades de atendimento</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 sm:text-base">
              {modalities.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#4D77B3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-12 px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">Diferenciais</h2>
            <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
              {differentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#4D77B3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-up delay-150">
            <Image
              src="/images/diferenciais-autoridade-clinica.png"
              alt="Diferenciais profissionais"
              width={800}
              height={800}
              className="h-auto w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto w-full max-w-5xl space-y-10 px-6 py-16">
          <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl animate-fade-up">Como funciona</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-start"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4D77B3] text-xs font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 sm:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl space-y-8 px-6">
        <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl animate-fade-up">Prova de credibilidade</h2>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm sm:text-base">
          <p>
            A atuação profissional é reconhecida pela confiança e satisfação dos pacientes, refletidas em avaliações positivas recorrentes, que destacam ética, acolhimento, sensibilidade clínica e comprometimento com o cuidado emocional.
            <br />
            <br />
            O reconhecimento por colegas da área da psicologia reforça a seriedade, a qualificação técnica e a responsabilidade do trabalho desenvolvido, tanto no contexto clínico quanto hospitalar.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4 animate-fade-up">
            <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">Entre em contato</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Se você ou sua família estão atravessando um momento difícil e buscam um acompanhamento psicológico profissional, humano e responsável, estou à disposição para ajudar.
            </p>
          </div>
          <div className="space-y-4 animate-fade-up delay-150">
            <a
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#4D77B3] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-[#3f68a1]"
              href="https://wa.me/5551996791968?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20atendimento%20psicológico."
            >
              Falar no WhatsApp
            </a>
            <p className="text-sm text-slate-500">Instagram: https://www.instagram.com/psicologalaisduarte/</p>
          </div>
        </div>
      </section>
    </main>
  );
}
