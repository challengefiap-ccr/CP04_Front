import Link from 'next/link'

const Cabecalho = () => {
    return (
        <nav className={'navbar'}>
            <div className={'navbar_logo'}>Concessionária</div>
            <ul className={'navbar_links'}>
                <li>
                    <Link href="/">Início</Link>
                </li>
                <li>
                    <Link href="/listaCarros">Estoque</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Cabecalho
