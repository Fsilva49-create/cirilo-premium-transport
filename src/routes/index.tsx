import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Truck,
  Package,
  ShoppingBag,
  Route as RouteIcon,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  MessageCircle,
  User,
  Calendar,
  Scale,
  Box,
  FileText,
  CheckCircle2,
  ThumbsUp,
  Building2,
  MapPinned,
  HeadphonesIcon,
} from "lucide-react";

import logoAsset from "@/assets/logo-cirilo-transparent.png.asset.json";
import vanAsset from "@/assets/van-cirilo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cirilo Transportes | Frete e Logística em Salvador" },
      {
        name: "description",
        content:
          "Transporte de cargas, fretes e logística em Salvador e região com frota própria, segurança e atendimento personalizado. Solicite seu orçamento.",
      },
      { property: "og:title", content: "Cirilo Transportes | Frete e Logística em Salvador" },
      {
        property: "og:description",
        content:
          "Soluções de transporte e logística para empresas e pessoas. Orçamento rápido pelo WhatsApp.",
      },
    ],
  }),
  component: Home,
});

const WHATSAPP = "5571992354248";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#vantagens", label: "Vantagens" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#contato", label: "Contato" },
];

const destaquesHero = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    desc: "Sua carga protegida em todas as etapas",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    desc: "Entregas no prazo que você precisa",
  },
];

const badges = [
  { icon: Box, label: "Pequenas e grandes cargas" },
  { icon: MapPinned, label: "Atendimento em Salvador e Região" },
  { icon: Building2, label: "Soluções para empresas e pessoas" },
  { icon: ThumbsUp, label: "Compromisso com qualidade" },
];

const servicos = [
  {
    icon: Truck,
    title: "Fretes e Entregas",
    desc: "Transporte rápido e seguro para pequenas, médias e grandes cargas com acompanhamento dedicado.",
  },
  {
    icon: Building2,
    title: "Atendimento Empresarial",
    desc: "Soluções logísticas sob medida para empresas de todos os segmentos e portes.",
  },
  {
    icon: RouteIcon,
    title: "Distribuição",
    desc: "Distribuição eficiente com rotas otimizadas e entregas no prazo combinado.",
  },
  {
    icon: ShoppingBag,
    title: "Coletas e Entregas",
    desc: "Coletas programadas e entregas com segurança e total rastreabilidade.",
  },
];

const vantagens = [
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    desc: "Cuidado e proteção da sua carga do início ao fim.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    desc: "Compromisso com prazos e horários combinados.",
  },
  {
    icon: CheckCircle2,
    title: "Melhor Custo-Benefício",
    desc: "Preços justos e soluções que cabem no seu bolso.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Humanizado",
    desc: "Foco no cliente, com suporte rápido e eficiente.",
  },
];

function Home() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    origem: "",
    destino: "",
    peso: "",
    volume: "",
    data: "",
    observacoes: "",
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
Peso total: ${form.peso} kg
Volume: ${form.volume} m³
Data desejada: ${form.data}
Observações: ${form.observacoes}`;
    window.open(waLink(msg), "_blank");
  };

  const inputCls =
    "w-full rounded-lg border border-input bg-white px-3 py-2.5 pl-10 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Cirilo Transportes"
              className="h-12 w-auto shrink-0 object-contain md:h-14"
            />
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink("Olá! Vim pelo site da Cirilo Transportes e gostaria de um orçamento.")}
            target="_blank"
            rel="noreferrer"
            className="surface-royal hidden items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold shadow-card transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar Orçamento
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-white px-5 py-4 lg:hidden">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-semibold text-foreground/80"
              >
                {n.label}
              </a>
            ))}
            <a
              href={waLink("Olá! Vim pelo site da Cirilo Transportes e gostaria de um orçamento.")}
              target="_blank"
              rel="noreferrer"
              className="surface-royal mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold"
            >
              <MessageCircle className="h-4 w-4" /> Solicitar Orçamento
            </a>
          </nav>
        )}
      </header>

      <main id="inicio">
        {/* Hero */}
        <section className="surface-navy relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--royal)_0%,_transparent_50%)] opacity-20" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_rgba(0,0,0,0.2)_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-navy-foreground/25 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide uppercase backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-royal" /> Frota própria · Salvador e Região
              </span>
              <h1 className="text-4xl leading-[1.05] font-extrabold uppercase sm:text-5xl lg:text-6xl">
                Transporte com agilidade, segurança e{" "}
                <span className="text-royal">confiança.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-navy-foreground/85">
                Soluções completas em transportes e entregas para você ou para o seu negócio. Frota
                própria, atendimento humanizado e compromisso com cada carga.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#orcamento"
                  className="surface-royal inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold shadow-premium transition-transform hover:-translate-y-0.5"
                >
                  Solicitar orçamento
                </a>
                <a
                  href={waLink("Olá! Quero falar sobre um transporte.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-navy-foreground/30 px-6 py-3 text-sm font-bold transition-colors hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2">
                {destaquesHero.map((d) => (
                  <div
                    key={d.title}
                    className="flex items-start gap-3 rounded-xl bg-white/10 p-4 backdrop-blur"
                  >
                    <span className="surface-royal inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{d.title}</p>
                      <p className="text-xs text-navy-foreground/75">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulário de orçamento */}
            <div id="orcamento" className="relative">
              <div className="rounded-2xl bg-white p-6 text-foreground shadow-premium sm:p-8">
                <h2 className="text-center text-2xl font-extrabold uppercase text-primary">
                  Faça seu orçamento
                </h2>
                <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-primary" />
                <form onSubmit={enviar} className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="relative sm:col-span-2">
                    <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      required
                      placeholder="Nome"
                      value={form.nome}
                      onChange={set("nome")}
                      className={inputCls}
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      required
                      placeholder="Telefone / WhatsApp"
                      value={form.telefone}
                      onChange={set("telefone")}
                      className={inputCls}
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="date"
                      placeholder="Data desejada"
                      value={form.data}
                      onChange={set("data")}
                      className={inputCls}
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      required
                      placeholder="Origem"
                      value={form.origem}
                      onChange={set("origem")}
                      className={inputCls}
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      required
                      placeholder="Destino"
                      value={form.destino}
                      onChange={set("destino")}
                      className={inputCls}
                    />
                  </div>
                  <div className="relative">
                    <Scale className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      placeholder="Peso total (kg)"
                      value={form.peso}
                      onChange={set("peso")}
                      className={inputCls}
                    />
                  </div>
                  <div className="relative">
                    <Box className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      placeholder="Volume (m³)"
                      value={form.volume}
                      onChange={set("volume")}
                      className={inputCls}
                    />
                  </div>
                  <div className="relative sm:col-span-2">
                    <FileText className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
                    <textarea
                      rows={3}
                      placeholder="Observações sobre a carga (opcional)"
                      value={form.observacoes}
                      onChange={set("observacoes")}
                      className={`${inputCls} resize-none pl-10 pt-2.5`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="col-span-full inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" /> Enviar orçamento pelo WhatsApp
                  </button>
                </form>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Seus dados estão seguros. Não compartilhamos suas informações.
                </p>
              </div>
            </div>
          </div>

          {/* Van de fundo */}
          <div className="pointer-events-none absolute right-0 bottom-0 hidden w-[45%] opacity-20 lg:block">
            <img
              src={vanAsset.url}
              alt=""
              className="w-full translate-y-1/4 object-contain"
            />
          </div>
        </section>

        {/* Barra de badges */}
        <div className="bg-primary">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-6 sm:grid-cols-4">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-white"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <b.icon className="h-5 w-5" />
                </span>
                <p className="text-xs font-bold leading-tight">{b.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Serviços */}
        <section id="servicos" className="mx-auto max-w-7xl px-5 py-20">
          <div className="reveal text-center">
            <p className="text-sm font-bold tracking-widest text-primary uppercase">Nossos serviços</p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
              Soluções completas em transporte
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {servicos.map((s) => (
              <article
                key={s.title}
                className="reveal group rounded-xl border border-border bg-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="surface-royal mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Vantagens */}
        <section id="vantagens" className="surface-navy py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="reveal text-center">
              <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
                Por que escolher a Cirilo Transportes?
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {vantagens.map((v) => (
                <div
                  key={v.title}
                  className="reveal rounded-xl bg-white/10 p-6 text-navy-foreground backdrop-blur"
                >
                  <span className="surface-royal inline-flex h-12 w-12 items-center justify-center rounded-full">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                  <p className="mt-1 text-sm text-navy-foreground/80">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <p className="text-sm font-bold tracking-widest text-primary uppercase">Sobre nós</p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
                Uma transportadora feita de confiança
              </h2>
              <p className="mt-5 text-muted-foreground">
                A Cirilo Transportes nasceu do desejo de oferecer um frete mais próximo, honesto e
                ágil para quem precisa transportar cargas de pequeno e médio porte. Atuamos com
                frota própria, motoristas experientes e processos simples, mantendo o mesmo cuidado
                do primeiro dia com cada volume transportado.
              </p>
              <p className="mt-4 text-muted-foreground">
                Atendemos e-commerces, comércios, indústrias, escritórios e famílias em Salvador e
                região — sempre com comunicação direta, pontualidade e respeito pelo que é seu.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Frota própria",
                  "Motoristas experientes",
                  "Seguro de carga",
                  "Atendimento pelo WhatsApp",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={vanAsset.url}
              alt="Fiorino da Cirilo Transportes"
              loading="lazy"
              width={1024}
              height={700}
              className="reveal w-full rounded-2xl object-contain shadow-premium"
            />
          </div>
        </section>

        {/* Contato + Mapa */}
        <section id="contato" className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="reveal text-center">
              <p className="text-sm font-bold tracking-widest text-primary uppercase">Contato</p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
                Estamos prontos para atender
              </h2>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <ul className="reveal space-y-4">
                {[
                  {
                    icon: Phone,
                    label: "Telefone / WhatsApp",
                    value: "(71) 99235-4248",
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
                    value: "Rua da Matriz, 333 — Valéria, Salvador, BA",
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
                className="reveal overflow-hidden rounded-2xl border border-border shadow-card"
              >
                <iframe
                  title="Localização da Cirilo Transportes"
                  src="https://www.google.com/maps?q=Rua%20da%20Matriz%20333%20Valeria%20Salvador%20BA&output=embed"
                  loading="lazy"
                  className="h-[380px] w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="surface-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-12 text-center">
          <img
            src={logoAsset.url}
            alt="Cirilo Transportes"
            loading="lazy"
            className="h-16 w-auto object-contain"
          />
          <p className="max-w-md text-sm text-navy-foreground/80">
            Transporte de cargas, fretes e logística em Salvador e região. Atendimento rápido,
            seguro e humanizado.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-navy-foreground/60">
            <a href="#inicio" className="hover:text-white">Início</a>
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#vantagens" className="hover:text-white">Vantagens</a>
            <a href="#sobre" className="hover:text-white">Sobre Nós</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </div>
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
