import Card from './Card'
import { connect } from 'react-redux'

function Sorteio(props) {
    const { min, max } = props
    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>Resultado: </span>
                <strong>{parseInt(Math.random() * (max - min) + min)}</strong>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(Sorteio)