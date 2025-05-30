"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Mail, Phone, ArrowRight, BookText, Headphones, Globe, Users, Megaphone, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"
import { useMobile } from "@/hooks/use-mobile"
import { AnimatedElement } from "@/components/animated-element"
import { StaggeredChildren } from "@/components/staggered-children"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const isMobile = useMobile()
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen font-sans dark:bg-neutral-900">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md py-3 shadow-md"
            : "bg-transparent backdrop-blur-none py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 relative z-10">
            <div className="relative w-10 h-10">
              <div
                className={`absolute inset-0 rounded-full transform transition-colors duration-500 ${
                  scrollY > 50 ? "bg-emerald-700" : "bg-white"
                }`}
              ></div>
              <div
                className={`absolute inset-1 rounded-full flex items-center justify-center transition-colors duration-500 ${
                  scrollY > 50 ? "bg-white dark:bg-neutral-900" : "bg-emerald-700"
                }`}
              >
                <img
                  src={scrollY > 50 ? "/logo-preto.png" : "/logo.png"}
                  alt="Logo da Pensieri Comunicação"
                  className={`transition-all duration-500 w-auto ${scrollY > 50 ? "h-6" : "h-5"}`}
                />
              </div>
            </div>
            <span
              className={`font-serif font-bold text-2xl tracking-tight transition-colors duration-500 ${
                scrollY > 50 ? "text-emerald-800 dark:text-white" : "text-white"
              }`}
            >
              Pensieri
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {["Nossa História", "Editora", "Biblioteca", "Comunicação", "Contato"].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`transition-colors duration-300 font-medium ${
                  scrollY > 50
                    ? "text-neutral-700 dark:text-neutral-300 hover:text-emerald-700 dark:hover:text-emerald-400"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item}
              </Link>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <MobileMenu scrolled={scrollY > 50} />
          </div>
        </div>
      </header>


      {/* Hero Section - REDESENHADA SEM IMAGEM */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-emerald-900 dark:bg-emerald-950 text-white overflow-hidden"
      >
        {/* Textura de fundo sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4H6zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Elementos decorativos geométricos */}
        <div className="absolute top-1/4 right-10 w-1 h-32 bg-gradient-to-b from-emerald-400 to-transparent opacity-60"></div>
        <div className="absolute top-1/3 left-10 w-1 h-48 bg-gradient-to-b from-emerald-400 to-transparent opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-1 bg-gradient-to-r from-transparent to-emerald-400 opacity-60"></div>
        <div className="absolute top-20 right-1/3 w-20 h-20 border border-emerald-400/30 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-emerald-400/30 transform rotate-45"></div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 pt-24 pb-16 md:py-0">
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedElement animation="fade-down" duration={1000} delay={300}>
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <div className="w-12 h-[1px] bg-emerald-400"></div>
                  <span className="text-emerald-300 uppercase tracking-widest text-sm font-medium">Desde 1993</span>
                  <div className="w-12 h-[1px] bg-emerald-400"></div>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="fade-up" duration={1000} delay={500}>
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  <span className="block">Pensieri</span>
                  <span className="text-emerald-300 italic">Comunicação</span>
                </h1>
              </AnimatedElement>

              <AnimatedElement animation="fade-up" duration={1000} delay={700}>
                <p className="text-xl md:text-2xl font-light mb-12 leading-relaxed max-w-2xl mx-auto">
                  Ideias que conectam, mensagens que transformam.
                </p>
              </AnimatedElement>

              <AnimatedElement animation="fade-up" duration={1000} delay={900}>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-white !text-emerald-900 hover:bg-emerald-50 dark:bg-emerald-700 dark:text-white dark:hover:bg-emerald-600 rounded-none px-8 py-6 group">
                    <span className="transition-colors duration-300">Conheça nosso catálogo</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>

              <Button                 variant="outline"                 className="border-emerald-900 text-emerald-900 hover:bg-emerald-50 hover:text-emerald-900 rounded-none px-8 py-6 transition-colors duration-300"               >                 Nossa história               </Button>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <AnimatedElement
          animation="fade-up"
          duration={1000}
          delay={1200}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-emerald-300 text-sm uppercase tracking-widest mb-2">Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-emerald-400 to-transparent"></div>
        </AnimatedElement>
      </section>

      {/* Nossa História Section */}
      <section id="nossa-história" className="py-32 bg-white dark:bg-neutral-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50 dark:bg-emerald-900/30 rounded-bl-[100px] opacity-70"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-emerald-50 dark:bg-emerald-900/30 rounded-full opacity-70"></div>
        <div className="absolute top-1/4 left-10 w-1 h-32 bg-gradient-to-b from-emerald-200 dark:from-emerald-700 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <div className="sticky top-32">
                <AnimatedElement animation="fade-right" duration={1000}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-[1px] bg-emerald-500"></div>
                    <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-widest text-sm font-medium">
                      Nossa Trajetória
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 italic text-lg mb-8 font-serif">
                    "Desde 1993, inovando no mercado editorial brasileiro"
                  </p>
                </AnimatedElement>

                <AnimatedElement animation="fade-up" duration={1000} delay={300} className="hidden md:block relative">
                  <img
                    src="/mockup.png"
                    alt="Primeiro lançamento da Pensieri, 1993"
                    className="relative z-0 w-full h-auto object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-emerald-900/80 to-transparent text-white z-20">
                    <p className="font-serif italic">Primeiro lançamento, 1993</p>
                  </div>
                </AnimatedElement>

              </div>
            </div>
            <div className="md:w-2/3">
              <AnimatedElement animation="fade-left" duration={1000}>
                <h2 className="font-serif text-5xl font-bold mb-8 text-neutral-800 dark:text-white">Nossa História</h2>
              </AnimatedElement>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <AnimatedElement animation="fade-left" duration={1000} delay={200}>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xl leading-relaxed mb-8 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-emerald-800 dark:first-letter:text-emerald-400 first-letter:mr-2 first-letter:float-left">
                    A Pensieri nasceu em 1993, com propósito de inovar no mercado editorial brasileiro. Seu primeiro
                    lançamento foi "Salto Mortal", do premiado escritor cubano Luis Manuel Garcia – uma obra bilíngue
                    português-espanhol, a primeira do tipo no Brasil, lançada no embalo do surgimento do Mercosul. O
                    livro teve grande repercussão na imprensa e marcou o início da proposta inovadora da empresa.
                  </p>
                </AnimatedElement>

                <AnimatedElement animation="fade-up" duration={1000} delay={300} className="my-16 relative">
                  <div className="absolute -left-8 top-0 bottom-0 w-1 bg-emerald-500"></div>
                  <p className="text-2xl font-serif italic text-neutral-700 dark:text-neutral-300 pl-8">
                    "A Pensieri sempre buscou unir tradição e inovação, respeitando o valor da palavra escrita enquanto
                    abraça novas tecnologias e formatos."
                  </p>
                </AnimatedElement>

                <AnimatedElement animation="fade-left" duration={1000} delay={400}>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xl leading-relaxed mb-8">
                    Na sequência, vieram obras de grande impacto, como "JFK Conspiração?", de Oscar Pino-Santos,
                    publicado quando se completavam 30 anos do assassinato de John F. Kennedy.
                  </p>
                </AnimatedElement>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                  <AnimatedElement animation="fade-up" duration={1000} delay={500}>
                    <div className="bg-neutral-50 dark:bg-neutral-800 p-8 border-l-4 border-emerald-500 shadow-sm">
                      <h3 className="font-serif text-2xl font-bold mb-3 text-emerald-800 dark:text-emerald-400">
                        Colapso da União
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-300">
                        De Newton Duarte Molon, uma análise profunda sobre os movimentos separatistas no país, com
                        ilustrações de Luis Fernando Verissimo.
                      </p>
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="fade-up" duration={1000} delay={700}>
                    <div className="bg-neutral-50 dark:bg-neutral-800 p-8 border-l-4 border-teal-500 shadow-sm">
                      <h3 className="font-serif text-2xl font-bold mb-3 text-teal-800 dark:text-teal-400">
                        Contabilidade Geral
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-300">
                        De Benedito Gonçalves da Silva, consolidou uma união pioneira no segmento de livros
                        preparatórios para concursos públicos em 1994.
                      </p>
                    </div>
                  </AnimatedElement>
                </div>

                <AnimatedElement animation="fade-left" duration={1000} delay={800}>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xl leading-relaxed">
                    Além desses marcos, Pensieri e Meta Editora pertenciam ao mesmo grupo editorial. Em 1994, com o
                    lançamento do livro "Contabilidade Geral", de Benedito Gonçalves da Silva, consolidaram uma união
                    pioneira no segmento de livros preparatórios para concursos públicos.
                  </p>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Fotos - Pessoas Lendo */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-up" duration={1000} className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-4">
              Conectando pessoas através da leitura
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-lg">
              Valorizamos a diversidade e a inclusão em todas as nossas iniciativas
            </p>
          </AnimatedElement>
          <StaggeredChildren
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            staggerAmount={150}
          >
            {["1", "2"].map((num, index) => (
              <AnimatedElement
                key={num}
                animation="fade-up"
                duration={800}
                delay={index * 200}
                className="aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-900/30 flex items-center justify-center"
              >
                <img
                  src={`/imagem-${num}.png`}
                  alt={`Colagem com grupo de pessoas ${num}`}
                  className="w-full h-full object-contain p-2"
                />
              </AnimatedElement>
            ))}
          </StaggeredChildren>


        </div>
      </section>

      {/* Editora Section */}
      <section id="editora" className="py-32 bg-white dark:bg-neutral-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-emerald-200"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border border-emerald-200"></div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedElement animation="fade-up" duration={1000} className="max-w-3xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-[1px] bg-emerald-500"></div>
              <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-widest text-sm font-medium">
                Nossa Expertise
              </span>
              <div className="w-12 h-[1px] bg-emerald-500"></div>
            </div>
            <h2 className="font-serif text-5xl font-bold mb-6 text-neutral-800 dark:text-white">Editora</h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-xl italic font-serif">
              "Inovar não é rejeitar a tradição; é como abrir as portas e janelas para acolher os novos ventos"
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedElement animation="fade-right" duration={1000}>
                <p className="text-neutral-700 dark:text-neutral-300 text-xl leading-relaxed mb-8">
                  Com a união das editoras Pensieri e Meta, foi desenvolvido um significativo acervo de livros voltados
                  aos concursos públicos, abrindo caminho para um novo e promissor segmento para as livrarias
                  brasileiras.
                </p>
              </AnimatedElement>

              <AnimatedElement
                animation="fade-right"
                duration={1000}
                delay={200}
                className="relative pl-6 border-l border-emerald-300 mb-8"
              >
                <p className="text-neutral-700 dark:text-neutral-300 text-xl leading-relaxed">
                  Destacam-se, nessa fase, as obras "Língua Portuguesa - Testando a teoria", de João Bolognesi,
                  "Gramacetes", de João Podanovski, "Contabilidade Geral", de Benedito G. da Silva, "Matemática
                  Financeira - Juros Cia", de José Hugo de Oliveira Bussab, entre outros títulos.
                </p>
              </AnimatedElement>

              <AnimatedElement animation="fade-right" duration={1000} delay={400}>
                <p className="text-neutral-700 dark:text-neutral-300 text-xl leading-relaxed">
                  Hoje, a Pensieri, retomando a sua participação no mercado editorial, encontra-se desenvolvendo novos
                  projetos de conteúdo didático, alinhados às novas tendências, inclusive abrindo oportunidade para
                  novos escritores.
                </p>
              </AnimatedElement>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <StaggeredChildren staggerAmount={200} animation="fade-left">
                {[
                  {
                    icon: <BookText className="h-12 w-12 text-emerald-600" />,
                    title: "Livros, revistas e material didático",
                    color: "bg-emerald-50 border-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-900",
                    iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
                  },
                  {
                    icon: <Globe className="h-12 w-12 text-teal-600" />,
                    title: "E-books",
                    color: "bg-teal-50 border-teal-100 dark:bg-teal-900/20 dark:border-teal-900",
                    iconBg: "bg-teal-100 dark:bg-teal-900/50",
                  },
                  {
                    icon: <Headphones className="h-12 w-12 text-blue-600" />,
                    title: "Audiobooks",
                    color: "bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-900",
                    iconBg: "bg-blue-100 dark:bg-blue-900/50",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-8 rounded-none border-l-4 border-l-emerald-500 shadow-sm ${item.color} transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-20 h-20 ${item.iconBg} rounded-none flex items-center justify-center mb-4`}>
                        {item.icon}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-neutral-800 dark:text-white">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </StaggeredChildren>
            </div>
          </div>
        </div>
      </section>

      {/* Biblioteca Section */}
      <section id="biblioteca" className="py-32 bg-neutral-50 dark:bg-neutral-800 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-emerald-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-emerald-200 rounded-full opacity-50"></div>
        <div className="absolute top-40 right-40 w-1 h-40 bg-gradient-to-b from-emerald-300 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedElement animation="fade-up" duration={1000} className="max-w-3xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-[1px] bg-emerald-500"></div>
              <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-widest text-sm font-medium">
                Nosso Acervo
              </span>
              <div className="w-12 h-[1px] bg-emerald-500"></div>
            </div>
            <h2 className="font-serif text-5xl font-bold mb-6 text-neutral-800 dark:text-white">Biblioteca</h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-xl">
              Confira os principais títulos do nosso acervo:
            </p>
          </AnimatedElement>

          <StaggeredChildren
            className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
            staggerAmount={100}
            animation="zoom-in"
          >
            {[
              {
                title: "Salto Mortal",
                author: "Luis Manuel Garcia",
                image: "salto-mortal.jpg",
              },
              {
                title: "Colapso da União",
                author: "Newton Duarte Molon",
                image: "colapso-da-uniao.jpg",
              },
              {
                title: "Contabilidade Geral",
                author: "Benedito G. da Silva",
                image: "contabilidade-geral.jpg",
              },
              {
                title: "Língua Portuguesa",
                author: "João Bolognesi",
                image: "lingua-portuguesa.jpg",
              },
              {
                title: "Perfil de São Paulo",
                author: "Hugo Duarte",
                image: "perfil-de-sao-paulo.jpg",
                featured: true,
              },
              {
                title: "Interpretação de Textos",
                author: "Carlos Alberto Federighi Moysés",
                image: "interpretacao-de-textos.jpg",
              },
              {
                title: "Estatística",
                author: "Osmar Rocha de Souza",
                image: "estatistica.jpg",
              },
              {
                title: "Introdução à Informática",
                author: "José Zarnauskas Filho",
                image: "introducao-a-informatica.jpg",
              },
            ].map((book, index) => (
              <div key={index} className="group relative overflow-hidden transition-all duration-500">
                <div className="relative aspect-[2/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>

                  {book.featured && (
                    <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs font-bold px-2 py-1 z-30">
                      DESTAQUE
                    </div>
                  )}

                  {/* Capa real do livro */}
                  <img
                    src={`/${book.image}`}
                    alt={`Capa do livro ${book.title}`}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute left-0 top-0 bottom-0 w-[5%] bg-black/20"></div>
                </div>

                <div className="pt-4">
                  <h3 className="font-serif font-bold text-lg text-neutral-800 dark:text-white mb-1 group-hover:text-emerald-700 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{book.author}</p>
                </div>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Comunicação Section */}
      <section id="comunicação" className="py-32 bg-white dark:bg-neutral-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full border border-emerald-200"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full border border-emerald-200"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <AnimatedElement animation="fade-right" duration={1000}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-[1px] bg-emerald-500"></div>
                  <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-widest text-sm font-medium">
                    Nossos Serviços
                  </span>
                </div>
                <h2 className="font-serif text-5xl font-bold mb-8 text-neutral-800 dark:text-white">Comunicação</h2>
              </AnimatedElement>

              <div className="space-y-8">
                <AnimatedElement animation="fade-right" duration={1000} delay={200}>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xl leading-relaxed">
                    Com mais de três décadas de experiência, atuamos na criação e desenvolvimento de projetos voltados a
                    instituições e figuras públicas, utilizando estratégias eficazes de marketing direto, marketing
                    institucional e marketing pessoal.
                  </p>
                </AnimatedElement>

                <AnimatedElement
                  animation="fade-right"
                  duration={1000}
                  delay={300}
                  className="pl-8 border-l-2 border-emerald-500"
                >
                  <p className="text-neutral-700 dark:text-neutral-300 text-xl leading-relaxed italic font-serif">
                    Nossa trajetória é marcada pela credibilidade, pela escuta qualificada e pela construção de
                    posicionamentos sólidos.
                  </p>
                </AnimatedElement>

                <AnimatedElement animation="fade-right" duration={1000} delay={400}>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xl leading-relaxed">
                    Acreditamos que comunicar bem vai além da forma de se vestir ou de falar: é preciso ter conteúdo,
                    história e propósito.
                  </p>
                </AnimatedElement>

                <AnimatedElement animation="fade-right" duration={1000} delay={500}>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xl leading-relaxed">
                    Por isso, nossa mentoria trabalha o desenvolvimento cultural como base para o fortalecimento da
                    imagem pública. Valorizamos a autenticidade e a profundidade de cada trajetória, englobando em
                    nossos projetos assessoria de imprensa, comunicação e campanhas publicitárias.
                  </p>
                </AnimatedElement>

                <AnimatedElement animation="fade-right" duration={1000} delay={600}>
                  <p className="text-neutral-700 dark:text-neutral-300 text-2xl font-serif font-medium">
                    Mais do que construir uma boa imagem, ajudamos a revelar o verdadeiro valor por trás dela.
                  </p>
                </AnimatedElement>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="grid grid-cols-1 gap-10">
                <AnimatedElement animation="fade-left" duration={1000} delay={200}>
                  <div className="bg-white dark:bg-neutral-800 shadow-md overflow-hidden">
                    <div className="h-1 bg-emerald-500"></div>
                    <div className="p-10">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mr-4">
                          <Megaphone className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white">
                          Assessoria de Imprensa
                        </h3>
                      </div>
                      <ul className="space-y-4">
                        {[
                          { icon: <BookText className="h-5 w-5" />, text: "Releases" },
                          { icon: <Users className="h-5 w-5" />, text: "Mídia" },
                          { icon: <Shield className="h-5 w-5" />, text: "Gestão de Crise" },
                        ].map((item, index) => (
                          <li key={index} className="flex items-center text-neutral-700 dark:text-neutral-300 text-lg">
                            <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mr-4 text-emerald-600">
                              {item.icon}
                            </div>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedElement>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <AnimatedElement animation="fade-left" duration={1000} delay={400}>
                    <div className="bg-white dark:bg-neutral-800 shadow-md overflow-hidden">
                      <div className="h-1 bg-teal-500"></div>
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mr-3">
                            <Globe className="h-6 w-6 text-teal-600" />
                          </div>
                          <h3 className="font-serif text-xl font-bold text-neutral-800 dark:text-white">
                            Marketing Institucional
                          </h3>
                        </div>
                        {/* <p className="text-neutral-600 dark:text-neutral-300 text-lg">
                          Estratégias personalizadas para fortalecer a imagem da sua instituição no mercado.
                        </p> */}
                      </div>
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="fade-left" duration={1000} delay={600}>
                    <div className="bg-white dark:bg-neutral-800 shadow-md overflow-hidden">
                      <div className="h-1 bg-emerald-500"></div>
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mr-3">
                            <Users className="h-6 w-6 text-emerald-600" />
                          </div>
                          <h3 className="font-serif text-xl font-bold text-neutral-800 dark:text-white">
                            Marketing Pessoal
                          </h3>
                        </div>
                        {/* <p className="text-neutral-600 dark:text-neutral-300 text-lg">
                          Desenvolvimento da sua imagem pessoal com autenticidade e propósito.
                        </p> */}
                      </div>
                    </div>
                  </AnimatedElement>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-32 bg-neutral-50 dark:bg-neutral-800 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-1 h-40 bg-gradient-to-b from-emerald-300 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedElement animation="fade-up" duration={1000} className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-900 to-teal-900 overflow-hidden shadow-2xl">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-1/4 right-10 w-1 h-32 bg-gradient-to-b from-emerald-400/50 to-transparent"></div>
                <div className="absolute bottom-1/4 left-10 w-1 h-32 bg-gradient-to-t from-emerald-400/50 to-transparent"></div>

                <div className="p-16 md:p-20 relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-[1px] bg-emerald-400"></div>
                    <span className="text-emerald-300 uppercase tracking-widest text-sm font-medium">Fale Conosco</span>
                  </div>
                  <h2 className="font-serif text-5xl font-bold mb-8 text-white">Contato</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <AnimatedElement
                      animation="fade-right"
                      duration={1000}
                      delay={200}
                      className="flex items-center space-x-6"
                    >
                      <div className="w-16 h-16 bg-white/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-emerald-300" />
                      </div>
                      <div>
                        <h3 className="text-emerald-200 font-medium text-sm uppercase tracking-wider mb-1">Email</h3>
                        <a
                          href="mailto:contato@pensieri.com.br"
                          className="text-white text-xl hover:text-emerald-200 transition-colors"
                        >
                          contato@pensieri.com.br
                        </a>
                      </div>
                    </AnimatedElement>

                    <AnimatedElement
                      animation="fade-right"
                      duration={1000}
                      delay={400}
                      className="flex items-center space-x-6"
                    >
                      <div className="w-16 h-16 bg-white/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-emerald-300" />
                      </div>
                      <div>
                        <h3 className="text-emerald-200 font-medium text-sm uppercase tracking-wider mb-1">Telefone</h3>
                        <a
                          href="tel:+5511940686784"
                          className="text-white text-xl hover:text-emerald-200 transition-colors"
                        >
                          (11) 94068-6784
                        </a>
                      </div>
                    </AnimatedElement>
                  </div>

                  <AnimatedElement animation="fade-up" duration={1000} delay={600}>
                    <form className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="name" className="block text-emerald-200 text-sm font-medium mb-2">
                            Nome
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-6 py-4 bg-white/10 border border-emerald-800 text-white placeholder-emerald-300/70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            placeholder="Seu nome"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-emerald-200 text-sm font-medium mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-6 py-4 bg-white/10 border border-emerald-800 text-white placeholder-emerald-300/70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-emerald-200 text-sm font-medium mb-2">
                          Mensagem
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full px-6 py-4 bg-white/10 border border-emerald-800 text-white placeholder-emerald-300/70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                          placeholder="Como podemos ajudar?"
                        ></textarea>
                      </div>
                      <Button className="bg-white text-emerald-900 hover:bg-emerald-100 rounded-none px-10 py-7 text-lg font-medium group">
                        Enviar mensagem
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </form>
                  </AnimatedElement>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 dark:bg-neutral-950 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <AnimatedElement animation="fade-up" duration={1000}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-1 bg-neutral-900 dark:bg-neutral-950 flex items-center justify-center">
                      <img src="/logo.png" alt="Logo da Pensieri Comunicação" className="h-18 w-auto" />
                    </div>
                  </div>
                  <span className="font-serif font-bold text-3xl tracking-tight text-white">Pensieri</span>
                </div>
                <p className="text-neutral-400 text-lg mb-8 max-w-md leading-relaxed">
                  Ideias que conectam, mensagens que transformam.
                </p>
              </AnimatedElement>

              <AnimatedElement animation="fade-up" duration={1000} delay={200} className="flex space-x-4">
                {["facebook", "twitter", "instagram"].map((social, index) => (
                  <a
                    key={social}
                    href="#"
                    className="w-12 h-12 bg-neutral-800 dark:bg-neutral-800 flex items-center justify-center hover:bg-emerald-700 transition-colors"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {social === "facebook" && (
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      )}
                      {social === "twitter" && (
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      )}
                      {social === "instagram" && (
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      )}
                    </svg>
                  </a>
                ))}
              </AnimatedElement>
            </div>

            <div>
              <AnimatedElement animation="fade-up" duration={1000} delay={300}>
                <h3 className="font-serif text-xl font-bold mb-8 text-white">Navegação</h3>
                <ul className="space-y-5">
                  {["Nossa História", "Editora", "Biblioteca", "Comunicação", "Contato"].map((item, index) => (
                    <li key={item} style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                      <Link
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="text-neutral-400 hover:text-emerald-400 transition-colors text-lg"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AnimatedElement>
            </div>

            <div>
              <AnimatedElement animation="fade-up" duration={1000} delay={500}>
                <h3 className="font-serif text-xl font-bold mb-8 text-white">Serviços</h3>
                <ul className="space-y-5">
                  {[
                    "Publicação de Livros",
                    "Assessoria de Imprensa",
                    "Marketing Institucional",
                    "Marketing Pessoal",
                    "Produção de Conteúdo",
                  ].map((item, index) => (
                    <li key={item} style={{ transitionDelay: `${index * 100 + 500}ms` }}>
                      <a href="#" className="text-neutral-400 hover:text-emerald-400 transition-colors text-lg">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </AnimatedElement>
            </div>
          </div>

          <AnimatedElement
            animation="fade-up"
            duration={1000}
            delay={700}
            className="mt-20 pt-10 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-neutral-500 text-lg mb-6 md:mb-0">
              © 2025 Pensieri Comunicação. Todos os direitos reservados.
            </p>
            <div className="flex space-x-8">
              <Link href="/termos" className="text-neutral-500 hover:text-emerald-400 text-lg">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-neutral-500 hover:text-emerald-400 text-lg">
                Política de Privacidade
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </footer>
    </div>
  )
}
