import carros from '@/data/carrosData'
import Image from 'next/image'
import imagemDefault from '../../../public/images/default.webp'

interface DetalhesCarroProp {
    params: {
        id: string
    }
}

const DetalhesCarro = ({ params }: DetalhesCarroProp) => {
    const carroID: number = parseInt(params.id)

    const carro = carros?.find(carro => carro.id === carroID)

    return (
        <section className="carro_container">
            <div className={'carro_card'}>
                <h1 className={'carro_titulo'}>{carro?.modelo}</h1>
                <Image
                    src={carro?.foto || imagemDefault}
                    alt={carro?.modelo || 'Carro'}
                    width={600}
                    height={400}
                    className={'carro_imagem'}
                />
                <p className={'carro_info'}>
                    <strong>Ano:</strong> {carro?.ano}
                </p>
                <p className={'carro_info'}>
                    <strong>Cor:</strong> {carro?.cor}
                </p>
                <p className={'carro_info'}>
                    <strong>Motor:</strong> {carro?.motor}
                </p>
                <p className={'carro_info'}>
                    <strong>Câmbio:</strong> {carro?.cambio}
                </p>
                <p className={'carro_info'}>
                    <strong>Combustível:</strong> {carro?.combustivel}
                </p>
                <p className={'carro_info'}>
                    <strong>Preço:</strong> R${' '}
                    {carro?.preco.toLocaleString('pt-BR')}
                </p>
                <p
                    className={`${'disponibilidade'} ${
                        carro?.disponivel ? 'disponivel' : 'indisponivel'
                    }`}
                >
                    {carro?.disponivel ? 'Disponível' : 'Indisponível'}
                </p>

                <h2 className={'carro_subtitulo'}>Especificações</h2>
                <ul className={'carro_lista'}>
                    <li>
                        <strong>Potência:</strong>{' '}
                        {carro?.especificacoes.potencia}
                    </li>
                    <li>
                        <strong>Torque:</strong> {carro?.especificacoes.torque}
                    </li>
                    <li>
                        <strong>Consumo na cidade:</strong>{' '}
                        {carro?.especificacoes.consumoCidade}
                    </li>
                    <li>
                        <strong>Consumo na estrada:</strong>{' '}
                        {carro?.especificacoes.consumoEstrada}
                    </li>
                </ul>

                <h2 className={'carro_subtitle'}>Fabricante</h2>
                <p className={'carro_info'}>
                    <strong>Nome:</strong> {carro?.fabricante.nome}
                </p>
                <p className={'carro_info'}>
                    <strong>País:</strong> {carro?.fabricante.pais}
                </p>
            </div>
        </section>
    )
}
export default DetalhesCarro
