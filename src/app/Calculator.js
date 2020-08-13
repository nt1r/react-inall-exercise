import React from 'react'
import '../styles/calculator.less'

class Calculator extends React.Component {
  render() {
    return (
      <div className={'calculator_div'}>
        <div className={'display_div'}>
          <h1>在线计算器</h1>
        </div>

      </div>
    );
  }
}

export default Calculator;