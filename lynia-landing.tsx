"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Users,
  Database,
  Clock,
  Target,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
  Bot,
  Handshake,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Component() {
  const whatsappLink = "https://wa.me/5551995465880?text=Ol%C3%A1!%20Quero%20conhecer%20a%20LynIA!"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificar inicialmente
    checkIfMobile()

    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <img src="/logo-lynia.png" alt="LynIA" className="h-10" />
        </div>

        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="ml-auto p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-md py-4 px-4 z-50">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="#como-funciona"
                    className="text-sm font-medium hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Como Funciona
                  </Link>
                  <Link
                    href="#beneficios"
                    className="text-sm font-medium hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Benefícios
                  </Link>
                  <Link
                    href="#resultados"
                    className="text-sm font-medium hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Resultados
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#como-funciona" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Como Funciona
            </Link>
            <Link href="#beneficios" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Benefícios
            </Link>
            <Link href="#resultados" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Resultados
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="w-full min-h-screen flex items-center justify-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 51, 153, 0.7), rgba(0, 102, 204, 0.7)), url('/hero-background.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-1" />
                IA + Atendimento Humano
              </Badge>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
                  Atendimento inteligente, com o toque humano.
                </h1>
                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl lg:text-2xl drop-shadow-md">
                  Conheça a LynIA, sua assistente de IA que entende, conversa e integra com seu CRM.
                </p>
              </div>
              <div className="space-x-4 pt-6">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                  onClick={() => window.open(whatsappLink, "_blank")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Fale com a LynIA agora
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* O que é a LynIA */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">O que é a LynIA?</h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Uma assistente de IA que atua ao lado da sua equipe de atendimento e vendas, potencializando resultados
                sem substituir o elemento humano.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <Bot className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">IA Inteligente</h3>
                  <p className="text-gray-600">
                    Entende contexto, nuances e intenções dos clientes através de conversas naturais.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <Handshake className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Colaboração Humana</h3>
                  <p className="text-gray-600">
                    Trabalha em conjunto com sua equipe, passando leads qualificados no momento certo.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Integração Total</h3>
                  <p className="text-gray-600">Conecta-se perfeitamente com seu CRM e ferramentas existentes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vídeo LynIA - Tela Cheia */}
        <section className="w-full">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/AvdYaJldzFI"
              title="LynIA - Agente de IA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Problemas que resolve */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Problemas que a LynIA resolve
              </h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Identifique-se com os desafios do seu dia a dia e veja como a LynIA pode ajudar.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Target className="h-10 w-10 text-red-500 mb-3" />
                <h3 className="font-semibold mb-2">Leads sem qualificação</h3>
                <p className="text-sm text-gray-600">Tempo perdido com prospects que não têm fit</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Database className="h-10 w-10 text-orange-500 mb-3" />
                <h3 className="font-semibold mb-2">CRM desatualizado</h3>
                <p className="text-sm text-gray-600">Informações importantes se perdem no processo</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Clock className="h-10 w-10 text-yellow-500 mb-3" />
                <h3 className="font-semibold mb-2">Follow-ups perdidos</h3>
                <p className="text-sm text-gray-600">Oportunidades escapam por falta de acompanhamento</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Users className="h-10 w-10 text-blue-500 mb-3" />
                <h3 className="font-semibold mb-2">Equipe sobrecarregada</h3>
                <p className="text-sm text-gray-600">Vendedores gastam tempo com tarefas repetitivas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios principais */}
        <section id="beneficios" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Benefícios principais
              </h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Veja como a LynIA transforma seu processo de atendimento e vendas.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <MessageCircle className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Entende o cliente</h3>
                  <p className="text-gray-600">
                    Compreende necessidades, dores e contexto através de conversas naturais no WhatsApp.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <Database className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Integra tudo</h3>
                  <p className="text-gray-600">
                    Conecta WhatsApp, CRM e ferramentas existentes em um fluxo único e automatizado.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <Handshake className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Colabora com humanos</h3>
                  <p className="text-gray-600">
                    Trabalha em conjunto com sua equipe, passando leads qualificados no momento ideal.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <Zap className="h-8 w-8 text-orange-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Agiliza atendimento</h3>
                  <p className="text-gray-600">
                    Responde instantaneamente, qualifica leads e agenda reuniões automaticamente.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-red-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Aumenta conversões</h3>
                  <p className="text-gray-600">
                    Melhora a qualidade dos leads e acelera o processo de vendas com follow-ups inteligentes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-indigo-500">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-indigo-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Privacidade garantida</h3>
                  <p className="text-gray-600">
                    Dados seguros e conformidade com LGPD. Seus clientes e informações estão protegidos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Como funciona na prática */}
        <section id="como-funciona" className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Como funciona na prática
              </h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Um processo simples e eficiente que transforma leads em oportunidades qualificadas.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Contato inicial</h3>
                <p className="text-gray-600">
                  Cliente entra em contato via WhatsApp. LynIA responde instantaneamente com uma conversa natural.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualificação inteligente</h3>
                <p className="text-gray-600">
                  Identifica necessidades, orçamento, timing e fit através de perguntas estratégicas e naturais.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Transição suave</h3>
                <p className="text-gray-600">
                  Leads qualificados são transferidos para a equipe humana com todo o contexto preservado.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Continuidade</h3>
                <p className="text-gray-600">
                  CRM atualizado automaticamente. Follow-ups programados. Nada se perde no processo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados reais */}
        <section id="resultados" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Resultados reais</h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Veja o impacto que a LynIA pode gerar no seu negócio.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-0">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-700 mb-2">85%</div>
                  <h3 className="font-semibold mb-1">Atendimento mais rápido</h3>
                  <p className="text-sm text-gray-600">Redução no tempo de primeira resposta</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-0">
                  <Database className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
                  <h3 className="font-semibold mb-1">CRM atualizado</h3>
                  <p className="text-sm text-gray-600">Informações sempre precisas e completas</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-0">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-700 mb-2">60%</div>
                  <h3 className="font-semibold mb-1">Equipe mais produtiva</h3>
                  <p className="text-sm text-gray-600">Foco em vendas, não em tarefas repetitivas</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-0">
                  <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-orange-700 mb-2">40%</div>
                  <h3 className="font-semibold mb-1">Mais vendas</h3>
                  <p className="text-sm text-gray-600">Aumento na taxa de conversão</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Pronto para revolucionar seu atendimento?
            </h2>
            <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl mb-8">
              Comece hoje mesmo e veja como a LynIA pode transformar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale com a LynIA agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="flex items-center">
          <img src="/logo-lynia.png" alt="LynIA" className="h-8" />
        </div>
        <p className="text-xs text-gray-500 sm:ml-4">© 2024 LynIA. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Termos de Uso
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Privacidade
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Contato
          </Link>
        </nav>
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  )
}
