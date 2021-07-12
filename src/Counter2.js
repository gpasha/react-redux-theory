import React, { Component } from 'react'
import { connect } from 'react-redux' 

class Counter2 extends Component {
    render() {
        console.log('this.props:', this.props)
        return (
            <div style={{padding: 30, border: '1px solid #000'}}>
                <h1>Counter2: {this.props.counter2.counter2}</h1>
                <div className="Actions">
                    <button onClick={this.props.onAdd2}>Добавить 1</button>
                    <button onClick={this.props.onSub2}>Вычесть 1</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter2: state.counter2
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd2: () => dispatch({type: 'ADD2'}),
        onSub2: () => dispatch({type: 'SUB2'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2)