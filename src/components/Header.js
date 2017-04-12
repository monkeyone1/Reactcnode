import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo  from '../images/cnodejs_light.svg'
class Header extends Component {
  
  render() {
    return (
      <div className='navbar' >
       <div className='navbar-inner'>
          <Link className='logo' to={'/'}>
          <img src={Logo}alt="img"/>
          </Link>
          
        <nav>
         <ul>
           <li><Link to='/'>首页</Link></li>
           <li><Link>未读消息</Link></li>
           <li><Link>新手入门</Link></li>
           <li><Link>API</Link></li>
           <li><Link>关于</Link></li>
           <li><Link>设置</Link></li>
           <li><Link>登入</Link></li>
         </ul>
        </nav>
       </div>
      </div>
    );
  }
}

export default Header;
