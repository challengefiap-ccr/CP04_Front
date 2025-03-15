import Link from 'next/link'
import './global.css'

export default function Home() {
    return (
        <main>
            <section className={'content'}>
                <h1 className={'title'}>Bem-vindo à Concessionária</h1>
                <p className={'text'}>
                    Na Concessionária, oferecemos os melhores veículos com
                    condições especiais para você sair dirigindo o carro dos
                    seus sonhos. Trabalhamos com modelos novos e seminovos,
                    garantindo qualidade, segurança e preços justos.
                </p>
                <p className={'text'}>
                    Nosso compromisso é proporcionar uma experiência única,
                    desde o atendimento até a entrega do seu veículo. Venha nos
                    visitar e descubra por que somos referência no mercado
                    automotivo.
                </p>
                <Link className="link_lista-carros" href="/listaCarros">
                    Confira nosso estoque
                </Link>
            </section>
        </main>
    )
}
