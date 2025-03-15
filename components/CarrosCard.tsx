import Image from 'next/image'
import Link from 'next/link'

type Especificacoes = {
    potencia: string
    torque: string
    consumoCidade?: string
    consumoEstrada?: string
    autonomia?: string
    tempoCarga?: string
}

type Fabricante = {
    nome: string
    pais: string
}

type Carro = {
    id: number
    modelo: string
    foto: string
    ano: number
    cor: string
    motor: string
    cambio: string
    combustivel: string
    preco: number
    disponivel: boolean
    especificacoes: Especificacoes
    fabricante: Fabricante
}

const CarrosCard = (props: Carro) => {
    console.log(props)

    return (
        <article className="card">
            <Image
                src={props.foto}
                width={200}
                height={200}
                alt={props.modelo}
            />

            <div className="card_info">
                <h2>{props.modelo}</h2>
                <p>{props.ano}</p>
            </div>
            <Link href={`detalhesCarro/${props.id}`}>Mais Detalhes</Link>
        </article>
    )
}
export default CarrosCard
