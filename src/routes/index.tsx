import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Truck,
  Package,
  Warehouse,
  Route as RouteIcon,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";

import logoAsset from "@/assets/logo-cirilo.png.asset.json";
import vanAsset from "@/assets/van-cirilo.png.asset.json";
import caminhaoImg from "@/assets/frota-caminhao.jpg";
import carretaImg from "@/assets/frota-carreta.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cirilo Transportes | Transporte de Cargas e Logística" },
      {
        name: "description",
        content:
          "Transporte de cargas em todo o Brasil com frota própria, rastreamento e pontualidade. Peça seu orçamento com a Cirilo Transportes.",
      },
      { property: "og:title", content: "Cirilo Transportes | Transporte de Cargas e Logística" },
      {
        property: "og:description",
        content:
          "Frota própria, cargas rastreadas e entregas no prazo. Solicite um orçamento sem compromisso.",
      },
    ],
  }),
  component: Home,
});

const WHATSAPP = "5511999999999";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const servicos = [
  {
    icon: Truck,
    title: "Cargas Dedicadas",
    desc: "Veículo exclusivo para sua carga, com rota direta e prazo garantido.",
  },
  {
    icon: Package,
    title: "Fracionado",
    desc: "Economia para volumes menores com coletas e entregas programadas.",
  },
  {
    icon: RouteIcon,
    title: "Mudanças e Transferências",
    desc: "Equipe treinada, embalagem e içamento para mudanças residenciais e comerciais.",
  },
  {
    icon: Warehouse,
    title: "Armazenagem",
    desc: "Estrutura segura para guarda de mercadorias e cross-docking.",
  },
  {
    icon: ShieldCheck,
    title: "Carga Segurada",
    desc: "Toda operação com seguro de carga e monitoramento em tempo real.",
  },
  {
    icon: Clock,
    title: "Entregas Urgentes",
    desc: "Atendimento expresso 24h para demandas emergenciais.",
  },
];

const frota = [
  {
    img: vanAsset.url,
    nome: "Fiorino / Utilitários",
    cap: "Até 650 kg",
    desc: "Ideal para entregas rápidas urbanas e cargas de pequeno porte.",
  },
  {
    img: caminhaoImg,
    nome: "Caminhão Baú",
    cap: "Até 8 toneladas",
    desc: "Perfeito para distribuição regional e mudanças completas.",
  },
  {
    img: carretaImg,
    nome: "Carreta / Truck",
    cap: "Até 30 toneladas",
    desc: "Transporte de longa distância para grandes volumes.",
  },
];

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#frota", label: "Frota" },
  { href: "#sobre", label: "Sobre" },
  { href: "#orcamento", label: "Orçamento" },
  { href: "#contato", label: "Contato" },
];

function Home() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    origem: "",
    destino: "",
    carga: "",
    detalhes: "",
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, gostaria de um orçamento.
Nome: ${form.nome}
Telefone: ${form.telefone}
Origem: ${form.origem}
Destino: ${form.destino}
Tipo de carga: ${form.carga}
Detalhes: ${form.detalhes}`;
    window.open(waLink(msg), "_blank");
  };

  const inputCls =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Cirilo Transportes"
              className="h-11 w-auto shrink-0 object-contain"
            />
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a
              href={waLink("Olá! Vim pelo site da Cirilo Transportes.")}
              target="_blank"
              rel="noreferrer"
              className="surface-royal inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold shadow-card transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </nav>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-md border border-border p-2 text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm font-semibold text-foreground/80"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="surface-navy relative overflow-hidden">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-royal/30 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                Frota própria · Cobertura nacional
              </span>
              <h1 className="mt-5 text-4xl leading-[1.05] font-extrabold uppercase sm:text-5xl md:text-6xl">
                Sua carga no destino certo, sempre no prazo
              </h1>
              <p className="mt-5 max-w-lg text-base text-navy-foreground/80">
                A Cirilo Transportes conecta empresas e pessoas em todo o Brasil com
                segurança, rastreamento em tempo real e atendimento próximo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#orcamento"
                  className="surface-royal inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold shadow-premium transition-transform hover:-translate-y-0.5"
                >
                  Solicitar orçamento
                </a>
                <a
                  href={waLink("Olá! Quero falar sobre um transporte.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-navy-foreground/30 px-6 py-3 text-sm font-bold transition-colors hover:bg-navy-foreground/10"
                >
                  <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
                </a>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-navy-foreground/15 pt-6">
                {[
                  ["+15", "anos de estrada"],
                  ["+40", "veículos na frota"],
                  ["98%", "entregas no prazo"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="font-display text-3xl font-extrabold">{n}</dt>
                    <dd className="text-xs text-navy-foreground/70">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <img
              src={vanAsset.url}
              alt="Van da frota Cirilo Transportes"
              width={1024}
              height={700}
              className="animate-float w-full drop-shadow-2xl"
            />
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="mx-auto max-w-6xl px-5 py-20">
          <div className="reveal max-w-2xl">
            <p className="text-sm font-bold tracking-widest text-primary uppercase">
              Nossos serviços
            </p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
              Soluções completas em transporte
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s) => (
              <article
                key={s.title}
                className="reveal group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="surface-royal inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Frota */}
        <section id="frota" className="bg-secondary py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="reveal max-w-2xl">
              <p className="text-sm font-bold tracking-widest text-primary uppercase">Frota</p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
                Veículos para cada tipo de carga
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {frota.map((f) => (
                <article
                  key={f.nome}
                  className="reveal overflow-hidden rounded-xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-48 items-center justify-center overflow-hidden bg-background">
                    <img
                      src={f.img}
                      alt={f.nome}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-contain p-3"
                    />
                  </div>
                  <div className="border-t border-border p-5">
                    <h3 className="text-lg font-bold">{f.nome}</h3>
                    <p className="mt-1 text-xs font-semibold tracking-wide text-primary uppercase">
                      {f.cap}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="reveal">
              <p className="text-sm font-bold tracking-widest text-primary uppercase">Sobre nós</p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
                Uma transportadora feita de confiança
              </h2>
              <p className="mt-5 text-muted-foreground">
                Nascemos como uma empresa familiar e crescemos junto com nossos clientes. Hoje
                operamos com frota própria, motoristas experientes e tecnologia de rastreamento,
                mantendo o mesmo cuidado do primeiro dia com cada volume transportado.
              </p>
              <p className="mt-4 text-muted-foreground">
                Atendemos indústrias, comércios, e-commerces e famílias em mudanças — sempre com
                comunicação direta e transparente do embarque à entrega.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Motoristas próprios e treinados",
                  "Rastreamento via satélite",
                  "Seguro total de carga",
                  "Atendimento 24 horas",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={carretaImg}
              alt="Carreta da Cirilo Transportes em rodovia"
              loading="lazy"
              width={1024}
              height={768}
              className="reveal w-full rounded-xl object-cover shadow-premium"
            />
          </div>
        </section>

        {/* Orçamento */}
        <section id="orcamento" className="surface-navy py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1.1fr]">
            <div className="reveal">
              <p className="text-sm font-bold tracking-widest uppercase opacity-80">Orçamento</p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
                Peça sua cotação em minutos
              </h2>
              <p className="mt-4 max-w-md text-navy-foreground/80">
                Preencha os dados da sua carga e nossa equipe responde rapidamente pelo WhatsApp
                com o melhor valor e prazo.
              </p>
            </div>
            <form
              onSubmit={enviar}
              className="reveal rounded-xl bg-card p-6 text-card-foreground shadow-premium"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Seu nome"
                  aria-label="Seu nome"
                  value={form.nome}
                  onChange={set("nome")}
                  className={inputCls}
                />
                <input
                  required
                  placeholder="Telefone / WhatsApp"
                  aria-label="Telefone"
                  value={form.telefone}
                  onChange={set("telefone")}
                  className={inputCls}
                />
                <input
                  required
                  placeholder="Origem (cidade/UF)"
                  aria-label="Origem"
                  value={form.origem}
                  onChange={set("origem")}
                  className={inputCls}
                />
                <input
                  required
                  placeholder="Destino (cidade/UF)"
                  aria-label="Destino"
                  value={form.destino}
                  onChange={set("destino")}
                  className={inputCls}
                />
                <input
                  placeholder="Tipo de carga"
                  aria-label="Tipo de carga"
                  value={form.carga}
                  onChange={set("carga")}
                  className={`${inputCls} sm:col-span-2`}
                />
                <textarea
                  rows={4}
                  placeholder="Peso, dimensões, data desejada..."
                  aria-label="Detalhes"
                  value={form.detalhes}
                  onChange={set("detalhes")}
                  className={`${inputCls} sm:col-span-2 resize-none`}
                />
              </div>
              <button
                type="submit"
                className="surface-royal mt-5 w-full rounded-md px-6 py-3 text-sm font-bold shadow-card transition-transform hover:-translate-y-0.5"
              >
                Enviar pedido de orçamento
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                O envio abre uma conversa no WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
        </section>

        {/* Contato + Mapa */}
        <section id="contato" className="mx-auto max-w-6xl px-5 py-20">
          <div className="reveal max-w-2xl">
            <p className="text-sm font-bold tracking-widest text-primary uppercase">Contato</p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
              Estamos prontos para atender
            </h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <ul className="reveal space-y-5">
              {[
                {
                  icon: Phone,
                  label: "Telefone / WhatsApp",
                  value: "(11) 99999-9999",
                  href: waLink("Olá! Preciso de um transporte."),
                },
                {
                  icon: Mail,
                  label: "E-mail",
                  value: "contato@cirilotransportes.com.br",
                  href: "mailto:contato@cirilotransportes.com.br",
                },
                {
                  icon: MapPin,
                  label: "Endereço",
                  value: "Av. das Indústrias, 1200 — São Paulo, SP",
                  href: "#mapa",
                },
                {
                  icon: Clock,
                  label: "Horário",
                  value: "Seg a Sex 7h-19h · Sáb 8h-13h · Urgências 24h",
                },
              ].map((c) => (
                <li
                  key={c.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card"
                >
                  <span className="surface-royal inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-sm font-semibold break-words hover:text-primary"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div
              id="mapa"
              className="reveal overflow-hidden rounded-xl border border-border shadow-card"
            >
              <iframe
                title="Localização da Cirilo Transportes"
                src="https://www.google.com/maps?q=Avenida%20das%20Industrias%20Sao%20Paulo%20SP&output=embed"
                loading="lazy"
                className="h-[380px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="surface-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center">
          <img
            src={logoAsset.url}
            alt="Cirilo Transportes"
            loading="lazy"
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="text-sm text-navy-foreground/70">
            Transporte de cargas, mudanças e logística em todo o Brasil.
          </p>
          <p className="text-xs text-navy-foreground/50">
            © {new Date().getFullYear()} Cirilo Transportes. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <a
        href={waLink("Olá! Vim pelo site e gostaria de um orçamento.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-navy-foreground shadow-premium transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
