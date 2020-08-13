import React from 'react'
import '../styles/calculator.less'
import {Link} from "react-router-dom";

class Calculator extends React.Component {
  state = {
    numberStack: [],
    operatorStack: [],
    numberStr: '',
    calResult: '',
  }

  render() {
    return (
      <div className={'calculator_div'}>
        <div className={'display_div'}>
          <h1>在线计算器</h1>
          <div className={'calculate_operator_div'}>
            <input className={'number_display_input'} type={'text'} value={this.state.calResult}/>

            <div className={'grid_buttons_div'}>
              <button className={'calculator_button operator_button'} onClick={this.onClickOperatorButton} value={'+'}>+</button>
              <button className={'calculator_button operator_button'} onClick={this.onClickOperatorButton} value={'-'}>-</button>
              <button className={'calculator_button operator_button'} onClick={this.onClickOperatorButton} value={'*'}>*</button>
              <button className={'calculator_button number_button'} onClick={this.onClickNumberButton} value={'7'}>7</button>
              <button className={'calculator_button number_button'} onClick={this.onClickNumberButton} value={'8'}>8</button>
              <button className={'calculator_button number_button'} onClick={this.onClickNumberButton} value={'9'}>9</button>
              <button className={'calculator_button number_button'} onClick={this.onClickNumberButton} value={'4'}>4</button>
              <button className={'calculator_button number_button'} onClick={this.onClickNumberButton} value={'5'}>5</button>
              <button className={'calculator_button number_button'} onClick={this.onClickNumberButton} value={'6'}>6</button>
              <button className={'calculator_button number_button'} onClick={this.onClickNumberButton} value={'1'}>1</button>
              <button className={'calculator_button number_button'} onClick={this.onClickNumberButton} value={'2'}>2</button>
              <button className={'calculator_button number_button'} onClick={this.onClickNumberButton} value={'3'}>3</button>
              <button className={'calculator_button number_button'} onClick={this.onClickNumberButton} value={'0'}>0</button>
              <button className={'calculator_button clear_button'} onClick={this.onClickClearButton} value={'clear'}>Clear</button>
              <button className={'calculator_button equal_button'} onClick={this.onClickEqualButton} value={'='}>=</button>
            </div>
          </div>

          <Link className={'back_home_link_calculator'} to={'/'}>回到主页</Link>
        </div>
      </div>
    );
  }

  onClickOperatorButton = (event) => {
    this.state.operatorStack.push(event.target.value);
    if (!this.state.numberStr && this.state.numberStack === 0) {
      alert('input invalid');
    } else {
      if (this.state.numberStr) {
        this.pushNumberString2Stack();
      }
      this.setState({
        calResult: `${event.target.value}`,
      });
    }
    console.log(this.state);
  }

  onClickNumberButton = (event) => {
    this.setState({
      calResult: `${this.state.numberStr}${event.target.value}`,
    });
    this.setState({
      numberStr: `${this.state.numberStr}${event.target.value}`,
    });
    console.log(this.state);
  }

  onClickClearButton = () => {
    this.setState({
      numberStack: [],
      operatorStack: [],
      numberStr: '',
      calResult: '',
    });
  }

  onClickEqualButton = () => {
    if (!this.state.numberStr && this.state.numberStack === 0) {
      alert('input invalid');
    } else {
      this.setState({
        calResult: '',
      });
      if (this.state.numberStr) {
        this.pushNumberString2Stack();
      }
      let number1 = this.state.numberStack.pop();
      if (this.state.operatorStack.length > 0) {
        let number2 = this.state.numberStack.pop();
        let operator = this.state.operatorStack.pop();

        switch (operator) {
          case '+':
            this.setState({
              calResult: number2 + number1,
            });
            break;
          case '-':
            this.setState({
              calResult: number2 - number1,
            });
            break;
          case '*':
            this.setState({
              calResult: number2 * number1,
            });
            break;
        }
      } else {
        this.setState({
          calResult: number1,
        });
      }
      this.state.numberStack.push(this.state.calResult);
    }
    console.log(this.state);
  }

  pushNumberString2Stack() {
    this.state.numberStack.push(Number.parseInt(this.state.numberStr));
    this.state.numberStr = '';
  }
}

export default Calculator;