import React from 'react'
import '../styles/timer.less'
import {Link} from "react-router-dom";

class Timer extends React.Component {
  state = {
    secondsLeft: 0
  }

  render() {
    return (
      <div className={'timer_div'}>
        <h1>在线倒计时器</h1>
        <div className={'timer_display_div'}>
          <div className={'setting_div'}>
            <div className={'set_time_left_div'}>
              <label htmlFor={'timeLeft'}>设置时间</label>
              <input id={'timeLeft'} type={'number'} onChange={this.onTextChange} value={this.state.secondsLeft}/>
            </div>
            <button onClick={this.startTimer}>Start</button>
          </div>

          <div className={'show_div'}>
            <h1>{this.state.secondsLeft} Second{this.state.secondsLeft > 1 ? 's' : ' '}</h1>
          </div>
        </div>
        <Link className={'back_home_link_timer'} to={'/'}>回到主页</Link>
      </div>
    );
  }

  startTimer = () => {
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
    });

    if (this.state.secondsLeft > 0) {
      setTimeout(this.minusOneSecond, 1000);
    } else {
      alert("Time out!");
    }
  }
}

export default Timer;