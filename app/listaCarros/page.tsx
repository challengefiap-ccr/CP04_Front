import CarrosCard from '@/components/CarrosCard'
import carros from '@/data/carrosData'

const CarrosLista = () => {
    return (
        <section className="carros_lista">
            {carros.map(carro => {
                return <CarrosCard key={carro.id} {...carro} />
            })}
        </section>
    )
}
export default CarrosLista
