import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AnimatedElement } from "@/components/animated-element"

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <header className="bg-emerald-900 dark:bg-emerald-950 text-white py-20">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-up" duration={1000}>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Termos de Uso</h1>
            <p className="text-emerald-200 text-lg max-w-2xl">
              Estes termos estabelecem as regras para uso dos serviços oferecidos pela Editora Pensieri.
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
              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">
                1. Aceitação dos Termos
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                Ao acessar e utilizar o site e os serviços da Editora Pensieri, você concorda com estes Termos de Uso e
                com nossa Política de Privacidade. Se você não concordar com qualquer parte destes termos, solicitamos
                que não utilize nossos serviços.
              </p>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">
                2. Descrição dos Serviços
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                A Editora Pensieri oferece serviços de publicação, editoração, comunicação e marketing. Nossos serviços
                incluem, mas não se limitam a:
              </p>
              <ul className="text-neutral-700 dark:text-neutral-300 mb-8">
                <li className="mb-2">Publicação de livros físicos e digitais</li>
                <li className="mb-2">Produção de audiobooks</li>
                <li className="mb-2">Assessoria de imprensa</li>
                <li className="mb-2">Marketing institucional e pessoal</li>
                <li className="mb-2">Produção de conteúdo</li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">
                3. Propriedade Intelectual
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                Todo o conteúdo disponibilizado em nosso site, incluindo textos, gráficos, logotipos, ícones, imagens,
                clipes de áudio, downloads digitais e compilações de dados, é propriedade da Editora Pensieri ou de seus
                fornecedores de conteúdo e está protegido pelas leis brasileiras e internacionais de direitos autorais.
              </p>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">4. Uso do Site</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">Ao utilizar nosso site, você concorda em:</p>
              <ul className="text-neutral-700 dark:text-neutral-300 mb-8">
                <li className="mb-2">Não violar quaisquer leis aplicáveis</li>
                <li className="mb-2">Não distribuir vírus ou outros códigos maliciosos</li>
                <li className="mb-2">Não tentar acessar áreas restritas do site</li>
                <li className="mb-2">Não copiar, modificar ou distribuir nosso conteúdo sem autorização prévia</li>
                <li className="mb-2">
                  Não utilizar o site de forma que possa danificá-lo ou prejudicar seu desempenho
                </li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">
                5. Contas de Usuário
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                Alguns serviços podem exigir a criação de uma conta. Você é responsável por manter a confidencialidade
                de suas credenciais de acesso e por todas as atividades que ocorrem em sua conta. Você concorda em
                notificar imediatamente a Editora Pensieri sobre qualquer uso não autorizado de sua conta.
              </p>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">
                6. Limitação de Responsabilidade
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                A Editora Pensieri não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais
                ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços, ou por qualquer conteúdo
                obtido através de nossos serviços.
              </p>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">
                7. Alterações nos Termos
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em
                vigor imediatamente após sua publicação no site. O uso continuado de nossos serviços após a publicação
                de quaisquer alterações constitui aceitação dessas alterações.
              </p>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">8. Lei Aplicável</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa
                decorrente destes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
              </p>

              <h2 className="font-serif text-3xl font-bold text-neutral-800 dark:text-white mb-6">9. Contato</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco pelo e-mail
                contato@pensieri.com.br ou pelo telefone (11) 94068-6784.
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
