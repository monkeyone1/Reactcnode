import React, {Component} from 'react';

class Footer extends Component {
  render() {
    let styles={
      p:{lineHeight:'20px',
      marginButtom:'10px'}
    }
    return (
      <div style={{
        background: '#fff'
      }}>

        <div
          style={{
          width:'90%',
          maxWidth:'1400px',
          minWidth: '960px',
          margin: '0 auto',
          color: '#e2e2e2',
          padding: '20 px 0',
          fontSize: '13px',
          lineHeight: '2em'
        }}>

          <div>
            <a href="">RSS</a>
            |<a href="">源码地址</a>
          </div>
          <p style={styles.p}>CNode 社区为国内最专业的 Node.js
             开源技术社区，致力于 Node.js 的技术研究。</p>
          <p style={styles.p}>服务器赞助商为
            存储赞助商为  七牛云存储 ，由  alinode 提供应用性能服务</p>

            <p style={styles.p}>新手搭建 Node.js 服务器，
              推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
        </div>

      </div>
    );
  }
}

export default Footer;