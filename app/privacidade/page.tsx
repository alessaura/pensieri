import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AnimatedElement } from "@/components/animated-element"

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <header className="bg-emerald-900 dark:bg-emerald-950 text-white py-20">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-up" duration={1000}>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
            <p className="text-emerald-200 text-lg max-w-2xl">
              Saiba como coletamos, usamos e protegemos suas informações pessoais.
            </p>
          </AnimatedElement>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="fade-up" duration={1000} delay={200}>
            <Link
              href="/"
              className="inline-flex items-center text-emerald-700 dark:text-emerald-400 mb-12 hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Link>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">1. Introdução</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                A Editora Pensieri está comprometida em proteger sua privacidade. Esta Política de Privacidade explica
                como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nosso site
                e nossos serviços.
              </p>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">
                2. Informações que Coletamos
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Podemos coletar os seguintes tipos de informações:
              </p>
              <ul className="text-neutral-700 dark:text-neutral-300 mb-8">
                <li className="mb-2">
                  <strong>Informações de identificação pessoal:</strong> nome, endereço de e-mail, número de telefone,
                  endereço postal e outras informações semelhantes quando você as fornece voluntariamente.
                </li>
                <li className="mb-2">
                  <strong>Informações de uso:</strong> dados sobre como você interage com nosso site, incluindo páginas
                  visitadas, tempo gasto no site e outras estatísticas.
                </li>
                <li className="mb-2">
                  <strong>Informações do dispositivo:</strong> dados sobre o dispositivo que você usa para acessar nosso
                  site, incluindo modelo de hardware, sistema operacional e versão, identificadores únicos de
                  dispositivo e informações de rede móvel.
                </li>
                <li className="mb-2">
                  <strong>Cookies e tecnologias semelhantes:</strong> utilizamos cookies e tecnologias semelhantes para
                  coletar informações sobre sua atividade, navegador e dispositivo.
                </li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">
                3. Como Usamos Suas Informações
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">Utilizamos as informações coletadas para:</p>
              <ul className="text-neutral-700 dark:text-neutral-300 mb-8">
                <li className="mb-2">Fornecer, manter e melhorar nossos serviços</li>
                <li className="mb-2">Processar transações e enviar notificações relacionadas</li>
                <li className="mb-2">Responder a suas solicitações, comentários e perguntas</li>
                <li className="mb-2">Enviar comunicações de marketing, se você optou por recebê-las</li>
                <li className="mb-2">Analisar tendências de uso e melhorar a experiência do usuário</li>
                <li className="mb-2">Detectar, prevenir e resolver problemas técnicos e de segurança</li>
                <li className="mb-2">Cumprir obrigações legais</li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">
                4. Compartilhamento de Informações
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Podemos compartilhar suas informações pessoais nas seguintes circunstâncias:
              </p>
              <ul className="text-neutral-700 dark:text-neutral-300 mb-8">
                <li className="mb-2">
                  <strong>Com prestadores de serviços:</strong> empresas que prestam serviços em nosso nome, como
                  processamento de pagamentos, análise de dados, entrega de e-mails, hospedagem e outros serviços.
                </li>
                <li className="mb-2">
                  <strong>Para cumprir a lei:</strong> quando acreditamos de boa-fé que a divulgação é necessária para
                  cumprir uma obrigação legal, proteger nossos direitos, proteger sua segurança ou a segurança de
                  outros, investigar fraudes ou responder a uma solicitação governamental.
                </li>
                <li className="mb-2">
                  <strong>Em caso de transferência de negócios:</strong> se estivermos envolvidos em uma fusão,
                  aquisição ou venda de ativos, suas informações pessoais podem ser transferidas como parte dessa
                  transação.
                </li>
                <li className="mb-2">
                  <strong>Com seu consentimento:</strong> podemos compartilhar suas informações pessoais para qualquer
                  outro propósito com seu consentimento explícito.
                </li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">
                5. Segurança de Dados
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações
                pessoais contra acesso não autorizado, uso indevido ou divulgação. No entanto, nenhum método de
                transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro, e não podemos garantir
                sua segurança absoluta.
              </p>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">6. Seus Direitos</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Dependendo da sua localização, você pode ter os seguintes direitos em relação às suas informações
                pessoais:
              </p>
              <ul className="text-neutral-700 dark:text-neutral-300 mb-8">
                <li className="mb-2">Acessar as informações pessoais que temos sobre você</li>
                <li className="mb-2">Corrigir informações imprecisas ou incompletas</li>
                <li className="mb-2">Excluir suas informações pessoais</li>
                <li className="mb-2">Restringir ou opor-se ao processamento de suas informações</li>
                <li className="mb-2">Solicitar a portabilidade de seus dados</li>
                <li className="mb-2">Retirar seu consentimento a qualquer momento</li>
              </ul>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                Para exercer qualquer um desses direitos, entre em contato conosco através dos dados fornecidos na seção
                "Contato" abaixo.
              </p>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">7. Cookies</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, entender como
                você interage com nossos serviços e exibir conteúdo personalizado. Você pode gerenciar suas preferências
                de cookies através das configurações do seu navegador.
              </p>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">
                8. Alterações nesta Política
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas
                de informação ou por outros motivos operacionais, legais ou regulatórios. Notificaremos você sobre
                quaisquer alterações materiais publicando a nova Política de Privacidade em nosso site e, quando
                apropriado, enviando um aviso por e-mail.
              </p>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">9. Contato</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre como tratamos suas informações
                pessoais, entre em contato conosco pelo e-mail contato@pensieri.com.br ou pelo telefone (11) 94068-6784.
              </p>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8 mt-12">
                <p className="text-neutral-500 dark:text-neutral-400 italic">Última atualização: 20 de maio de 2025</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </main>

      <footer className="bg-neutral-100 dark:bg-neutral-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 md:mb-0">
              © 2025 Editora Pensieri. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/termos"
                className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                Termos de Uso
              </Link>
              <Link
                href="/privacidade"
                className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
