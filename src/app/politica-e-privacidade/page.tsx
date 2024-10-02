import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
    const lastUpdate = new Date(2024, 9, 2);


    return (
      <>
        <main className="bg-gray-100 text-gray-800">
            <div className="max-w-4xl mx-auto p-6">
                <header className="text-center my-10">
                    <h1 className="text-4xl font-bold text-gray-900">Política de Privacidade</h1>
                    <p className="text-gray-600 mt-2">Última atualização: {lastUpdate.toLocaleDateString('pt-BR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}</p>
                </header>

                <section className="rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">1. Informações que Coletamos</h2>
                    <p className="mb-4">Coletamos as seguintes informações ao usar o App:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Dados de cadastro:</strong> Nome, e-mail, número de telefone, senha, etc.</li>
                        <li><strong>Informações de academia:</strong> Nome da academia, ID, lista de exercícios, fichas de treino.</li>
                        <li><strong>Dados técnicos:</strong> Informações sobre o dispositivo, IP, dados de uso, etc.</li>
                    </ul>
                </section>

                <section className="mt-6 roundow-md">
                    <h2 className="text-xl font-semibold mb-4">2. Como Usamos Suas Informações</h2>
                    <p className="mb-4">As informações coletadas são usadas para:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Personalizar a experiência no App.</li>
                        <li>Melhorar o desempenho e funcionalidades.</li>
                        <li>Realizar comunicação e suporte.</li>
                    </ul>
                </section>

                <section className="mt-6 roundow-md">
                    <h2 className="text-xl font-semibold mb-4">3. Compartilhamento de Informações</h2>
                    <p className="mb-4">Não compartilhamos suas informações pessoais, exceto:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Com sua academia e instrutores.</li>
                        <li>Para cumprir exigências legais.</li>
                        <li>Com provedores de serviços que operam o App.</li>
                    </ul>
                </section>

                <section className="mt-6 roundow-md">
                    <h2 className="text-xl font-semibold mb-4">4. Segurança de Dados</h2>
                    <p className="mb-4">Implementamos medidas de segurança para proteger suas informações. No entanto, lembre-se que nenhum método de transmissão de dados é 100% seguro.</p>
                </section>

                <section className="mt-6 roundow-md">
                    <h2 className="text-xl font-semibold mb-4">5. Seus Direitos</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Acessar e revisar seus dados.</li>
                        <li>Solicitar correção de dados incorretos.</li>
                        <li>Excluir sua conta e remover seus dados.</li>
                    </ul>
                </section>

                <section className="mt-6 roundow-md">
                    <h2 className="text-xl font-semibold mb-4">6. Cookies e Tecnologias de Rastreamento</h2>
                    <p className="mb-4">O App pode utilizar cookies para melhorar a experiência do usuário. Você pode desativar os cookies nas configurações do seu dispositivo.</p>
                </section>

                <section className="mt-6 roundow-md">
                    <h2 className="text-xl font-semibold mb-4">7. Alterações nesta Política de Privacidade</h2>
                    <p className="mb-4">Podemos atualizar esta política periodicamente e notificaremos os usuários por meio do App.</p>
                </section>

                <section className="mt-6 roundow-md">
                    <h2 className="text-xl font-semibold mb-4">8. Contato</h2>
                    <p className="mb-4">Para dúvidas ou solicitações, entre em contato:</p>
                    <p className="mb-4"><strong>E-mail:</strong> matheus2018i@gmail.com</p>
                    <p className="mb-4"><strong>Telefone:</strong> (18) 99127-6817</p>
                </section>

               
            </div>
            
        </main>
        <Footer className="text-gray-900 bg-gray-100 font-bold "/>
      </>

    )
}
