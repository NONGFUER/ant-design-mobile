import React from 'react';
import { Link } from 'react-router';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

const clientHeight = document.documentElement.clientHeight;
function onScrollEvent(e) {
  const header = document.getElementById('header');
  if (e.pageY >= clientHeight) {
    if (header.className.indexOf('home-nav-bottom') < 0) {
      header.className += ' home-nav-bottom';
    }
  } else if (header.className.indexOf('home-nav-bottom') >= 0) {
    header.className = header.className.replace(/home-nav-bottom/ig, '');
  }
}

export default function Page1() {
  return (
    <ScrollOverPack id="page1" scrollName="page1" className="content-wrapper page" playScale={1} replay scrollEvent={onScrollEvent}>
      <QueueAnim className="text-wrapper-bottom" delay={320} key="text" duration={550} type="bottom"
        leaveReverse
        hideProps={{ child: null }}>
        <div className="start-button-wrap" key="button">
          <Link to="/docs/pattern/">
            开始探索
          </Link>
        </div>
        <div className="text-left" key="h2">
          <h2 key="h2">海量的通用样式</h2>
          <p key="p" style={{ maxWidth: 260 }}>抽象通用的基础样式，为组件的提供强有力的支持</p>
          <div key="button">
            <Link to="/docs/pattern/">
              <Button type="primary" size="large">
                了解更多
                <Icon type="right" />
              </Button>
            </Link>
          </div>
        </div>
        <TweenOne key="image" className="image1 image-wrapper" animation={{ x: 0, opacity: 1, duration: 550 }}
          style={{ transform: 'translateX(100px)', opacity: 0 }} hideProps={{ reverse: true }} />
      </QueueAnim>
    </ScrollOverPack>
  );
}