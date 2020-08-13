import React from 'react'
import '../styles/calculator.less'
import {Link} from "react-router-dom";

class Calculator extends React.Component {
  render() {
    return (
      <div className={'calculator_div'}>
        <div className={'display_div'}>
          <h1>在线计算器</h1>
          <div className={'calculate_operator_div'}>
            <input className={'number_display_input'} type={'text'}/>

            <div className={'grid_buttons_div'}>
              <button className={'calculator_button operator_button'}>+</button>
              <button className={'calculator_button operator_button'}>-</button>
              <button className={'calculator_button operator_button'}>*</button>
              <button className={'calculator_button number_button'}>7</button>
              <button className={'calculator_button number_button'}>8</button>
              <button className={'calculator_button number_button'}>9</button>
              <button className={'calculator_button number_button'}>4</button>
              <button className={'calculator_button number_button'}>5</button>
              <button className={'calculator_button number_button'}>6</button>
              <button className={'calculator_button number_button'}>1</button>
              <button className={'calculator_button number_button'}>2</button>
              <button className={'calculator_button number_button'}>3</button>
              <button className={'calculator_button number_button'}>0</button>
              <button className={'calculator_button clear_button'}>Clear</button>
              <button className={'calculator_button equal_button'}>=</button>
            </div>
          </div>

          <Link className={'back_home_link_calculator'} to={'/'}>回到主页</Link>
        </div>
      </div>
    );
  }
}

export default Calculator;