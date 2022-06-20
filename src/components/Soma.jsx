import Card from './Card'
import { connect } from 'react-redux'

function Soma(props) {
    const { min, max } = props
    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>Resultado: </span>
                <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma)