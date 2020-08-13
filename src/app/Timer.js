import React from 'react'
import '../styles/timer.less'
import {Link} from "react-router-dom";

class Timer extends React.Component {
  state = {
    secondsLeft: 0,
    isTiming: false,
    label: 'Start',
  }

  render() {
    return (
      <div className={'timer_div'}>
        <h1>在线倒计时器</h1>
        <div className={'timer_display_div'}>
          <div className={'setting_div'}>
            <div className={'set_time_left_div'}>
              <label htmlFor={'timeLeft'}>设置时间</label>
              <input id={'timeLeft'} type={'number'} onChange={this.onTextChange} value={this.state.secondsLeft} disabled={this.state.isTiming}/>
            </div>
            <button onClick={this.startTimer} disabled={this.state.isTiming}>Start</button>
          </div>

          <div className={'show_div'}>
            <h1>{this.state.label}</h1>
          </div>
        </div>
        <Link className={'back_home_link_timer'} to={'/'}>回到主页</Link>
      </div>
    );
  }

  startTimer = () => {
    this.setState({
      isTiming: true,
      label: `${this.state.secondsLeft} Second ${this.state.secondsLeft > 1 ? 's' : ' '}`,
    })
    setTimeout(this.minusOneSecond, 1000);
  }

  onTextChange = (event) => {
    this.setState({
      secondsLeft: event.target.value,
    })
  }

  minusOneSecond = () => {
    this.setState({
      secondsLeft: this.state.secondsLeft - 1,
      label: `${this.state.secondsLeft - 1} Second ${this.state.secondsLeft - 1 > 1 ? 's' : ' '}`,
    });

    if (this.state.secondsLeft > 0) {
      setTimeout(this.minusOneSecond, 1000);
    } else {
      this.setState({
        isTiming: false,
        label: 'End',
      })
    }
  }
}

export default Timer;