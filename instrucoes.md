
# 🧠 Instruções

> Você é um desenvolvedor frontend sênior especializado em sites institucionais profissionais.
> Gere um site institucional **com foco em autoridade, confiança e performance**, seguindo **exatamente** a estrutura, textos e tokens abaixo.
> Não crie novos textos, não altere a copy e não invente seções.

---

## 🔷 DESIGN SYSTEM GLOBAL

### 🎨 Cores (CSS Variables)

```css
:root {
  --color-brand-600: #4D77B3;
  --color-brand-500: #6E97CE;
  --color-brand-300: #87AEDE;

  --color-bg-main: #EEF5F7;
  --color-bg-card: #FFFFFF;
  --color-border: #D7E3EE;

  --color-text-title: #0F172A;
  --color-text-body: #1F2937;
  --color-text-muted: #475569;
}
```

### ✍️ Tipografia

* Headings: **Plus Jakarta Sans** (weights 600, 700)
* Body: **Inter** (weights 400, 500, 600)

### 📐 Regras globais

* Layout responsivo (mobile-first)
* Grid limpo
* Espaçamentos generosos
* Animações sutis (fade / slide leve)
* Performance-first (sem excessos visuais)

---

## 🧩 SEÇÃO 1 — HERO

### Layout

* 2 colunas
* Texto à esquerda
* Imagem à direita

### Conteúdo

```json
{
  "title": "Atendimento psicológico especializado para adultos e famílias que enfrentam o luto, o sofrimento emocional e os desafios dos cuidados paliativos.",
  "subtitle": "Com experiência clínica e hospitalar, ofereço um acompanhamento ético, acolhedor e tecnicamente qualificado para quem vive momentos de alta vulnerabilidade emocional.",
  "meta": "Atendimento presencial em Porto Alegre e região, online e domiciliar (home care).",
  "cta": {
    "label": "Falar no WhatsApp",
    "link": "https://wa.me/5551996791968?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20atendimento%20psicológico."
  }
}
```

### Estilo

* Fundo: `--color-bg-main`
* H1: 48px / 700 / `--color-text-title`
* Texto: 18px / `--color-text-body`
* Botão primário: `--color-brand-600`

### Imagem

```json
{
  "src": "hero-atendimento-psicologico.png",
  "aspectRatio": "16:9"
}
```

---

## 🧩 SEÇÃO 2 — SOBRE A PROFISSIONAL

### Layout

* 2 colunas
* Foto real à esquerda
* Texto à direita

### Conteúdo

```json
{
  "title": "Sobre a profissional",
  "paragraphs": [
    "Sou Laís Duarte, psicóloga clínica, com formação e atuação voltadas para a área da saúde, luto e cuidados paliativos.",
    "Graduada em Psicologia com ênfase em saúde, sou especialista em Psicologia Hospitalar e possuo formação multidisciplinar em Cuidados Paliativos. Minha trajetória profissional inclui experiência em contextos hospitalares, como hemodiálise, internações prolongadas e acompanhamento de pacientes e famílias em situações de adoecimento grave.",
    "Atuo também na clínica psicológica, com foco no atendimento de adultos e famílias que vivenciam perdas, sofrimento emocional intenso e processos de luto.",
    "Meu trabalho é fundamentado na ética, na escuta qualificada e no respeito à singularidade de cada pessoa, oferecendo um espaço seguro para o cuidado emocional em momentos complexos da vida."
  ]
}
```

### Imagem (foto real)

```json
{
  "src": "lais-duarte-retrato-profissional.jpg",
  "aspectRatio": "3:4",
  "alt": "Retrato profissional da psicóloga Laís Duarte"
}
```

---

## 🧩 SEÇÃO 3 — SERVIÇOS

### Layout

* Grid 2x2 (cards)

### Conteúdo

```json
{
  "title": "Serviços",
  "items": [
    {
      "title": "Atendimento psicológico individual",
      "description": "Indicado para adultos que enfrentam sofrimento emocional, processos de perda, mudanças significativas, adoecimento próprio ou de familiares, e outras situações que impactam a saúde mental."
    },
    {
      "title": "Acompanhamento psicológico em luto",
      "description": "Atendimento especializado para pessoas que vivenciam o luto, respeitando o tempo, a história e a forma singular de cada indivíduo elaborar a perda."
    },
    {
      "title": "Psicologia em cuidados paliativos",
      "description": "Apoio psicológico a pacientes, familiares e cuidadores em contextos de adoecimento grave e progressivo, com base em experiência clínica e hospitalar."
    },
    {
      "title": "Atendimento familiar",
      "description": "Acompanhamento psicológico que considera o contexto familiar como parte fundamental do cuidado, promovendo suporte emocional, diálogo e compreensão entre os envolvidos."
    }
  ],
  "modalities": [
    "Atendimento presencial (Porto Alegre e região)",
    "Atendimento online",
    "Atendimento domiciliar (home care)"
  ]
}
```

---

## 🧩 SEÇÃO 4 — DIFERENCIAIS

### Layout

* 2 colunas
* Texto + imagem simbólica

### Conteúdo

```json
{
  "title": "Diferenciais",
  "items": [
    "Especialização em luto e cuidados paliativos",
    "Formação em Psicologia Hospitalar e experiência em ambiente hospitalar",
    "Atuação em contextos como hemodiálise e internações prolongadas",
    "Atendimento ético, responsável e comprometido",
    "Escuta sensível aliada a um sólido senso clínico",
    "Reconhecimento profissional por pacientes e colegas da área",
    "Abordagem humanizada, sem perder o rigor técnico",
    "Flexibilidade de atendimento para diferentes realidades e necessidades"
  ]
}
```

### Imagem

```json
{
  "src": "diferenciais-autoridade-clinica.png",
  "aspectRatio": "1:1"
}
```

---

## 🧩 SEÇÃO 5 — COMO FUNCIONA

### Layout

* Timeline vertical (desktop)
* Cards empilhados (mobile)

### Conteúdo

```json
{
  "title": "Como funciona",
  "steps": [
    {
      "title": "Primeiro contato",
      "description": "Você entra em contato para esclarecer dúvidas e obter informações sobre o atendimento."
    },
    {
      "title": "Avaliação inicial",
      "description": "Buscamos compreender sua demanda, contexto e necessidades específicas."
    },
    {
      "title": "Acompanhamento psicológico",
      "description": "As sessões são conduzidas de forma ética, acolhedora e personalizada."
    },
    {
      "title": "Processo contínuo",
      "description": "O acompanhamento é construído ao longo do tempo, com ajustes conforme as necessidades emocionais e o momento vivido."
    }
  ]
}
```

---

## 🧩 SEÇÃO 6 — PROVA DE CREDIBILIDADE

### Layout

* 1 coluna central

### Conteúdo

```json
{
  "title": "Prova de credibilidade",
  "text": "A atuação profissional é reconhecida pela confiança e satisfação dos pacientes, refletidas em avaliações positivas recorrentes, que destacam ética, acolhimento, sensibilidade clínica e comprometimento com o cuidado emocional.\n\nO reconhecimento por colegas da área da psicologia reforça a seriedade, a qualificação técnica e a responsabilidade do trabalho desenvolvido, tanto no contexto clínico quanto hospitalar."
}
```

---

## 🧩 SEÇÃO 7 — CTA FINAL (WhatsApp)

### Layout

* Bloco destacado
* Conversão respeitosa

### Conteúdo

```json
{
  "title": "Entre em contato",
  "text": "Se você ou sua família estão atravessando um momento difícil e buscam um acompanhamento psicológico profissional, humano e responsável, estou à disposição para ajudar.",
  "primaryAction": {
    "label": "Falar no WhatsApp",
    "link": "https://wa.me/5551996791968?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20atendimento%20psicológico."
  },
  "secondaryInfo": "Instagram: https://www.instagram.com/psicologalaisduarte/"
}
```

---

## ✅ RESULTADO ESPERADO

* Site institucional profissional
* Visual limpo e confiável
* CTA funcional (WhatsApp)
* Texto exatamente como fornecido
* Estrutura clara e escalável
* Responsível


