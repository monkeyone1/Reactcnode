import React, {Component} from 'react';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import './main.css';
import './css/Header.css';
class App extends Component {
  render() {
    let styles = {
      main: {
        width: '90%',
        padding: '10px',
        maxWidth: '1400px',
        minWidth: '960px',
        margin: '15px auto',
        minHeight: '400px'
      }
    }
    return (
      <div>
        <Header></Header>
        <div style={styles.main}>
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;