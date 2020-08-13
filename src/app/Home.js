import React from 'react';
import '../styles/home.less';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className={'home'}>
      <header className={'home_header'}>
        <div className={'image_div'}>
          <img src={require('../images/hero-image.png')} alt={'logo image'}/>
          <h1>在线实用工具</h1>
        </div>
      </header>

      <main className={'home_main'}>
        <section className={'home_section'}>
          <div className={'module_div'}>
            <div className={'calculator_module_div'}>
              <img src={require('../images/calculator_tran.png')} alt={'calculator image'}/>
              <Link className={'module_link'} to={'/calculator'}>计算器</Link>
            </div>

            <div className={'timer_module_div'}>
              <img src={require('../images/timer.png')} alt={'timer image'}/>
              <Link className={'module_link'} to={'/timer'}>倒计时器</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;