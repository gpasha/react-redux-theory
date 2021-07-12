import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'
import Counter2 from './Counter2'
import { add, addNumber, sub } from './redux/reducers/actions/actions'

class App extends Component {
  
  updateCounter(value) {
    this.setState({
      counter: this.state.counter + value
    })
  }

  render() {
    console.log('this.props:', this.props)
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAddbNumber(10)}>Добавить 10</button>
          <button onClick={() => this.props.onAddbNumber(-17)}>Вычесть 17</button>
        </div>

        <Counter2 />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter1.counter
  }
}

const mapDispatchToProps = dispath => {
  return {
    onAdd: () => dispath(add()),
    onSub: () => dispath(sub()),
    onAddbNumber: (number) => dispath(addNumber(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)