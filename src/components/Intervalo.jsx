import './Intervalo.css'
import Card from './Card'
import { connect } from 'react-redux'
import { changeMinimumNumber, changeMaximumNumber } from '../store/actions/numbers'

function Intervalo(props) {
    const { min, max } = props
    return (
        <Card title="Intervalo de Números" red>
            <div className='Intervalo'>
                <strong>Mínimo:</strong>
                <input type="number" value={min} onChange={e => props.changeMin(+e.target.value)} />
                <strong>Máximo:</strong>
                <input type="number" value={max} onChange={e => props.changeMax(+e.target.value)} />
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

function mapDispatchToProps(dispatch) {
    return {
        changeMin(newNumber) {
            const action = changeMinimumNumber(newNumber)
            dispatch(action)
        },
        changeMax(newNumber) {
            const action = changeMaximumNumber(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)