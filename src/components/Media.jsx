import Card from './Card'
import { connect } from 'react-redux'

function Media(props) {
    const { min, max } = props
    return (
        <Card title="Média dos Números" green>
            <div>
                <span>Resultado: </span>
                <strong>{(min + max) / 2}</strong>
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

export default connect(mapStateToProps)(Media)