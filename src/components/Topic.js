import React, { Component } from 'react';
import axios from 'axios'
import '../css/topic.css'
class Topic extends Component {
  constructor() {
    super();
    this.state={
      data:[]
    }
  }
    componentWillMount() {
     axios.get(`https://cnodejs.org/api/v1/topic/${this.props.params.id}`)
     .then((res) => {
       this.setState({
         data:res.data.data
       });
     })
     
   }
  render() {
    console.log(this.props.params.id);

    return (
      <div>
      <div style={{
       marginRight:'305px',
       backgroundColor:'#fff',
       borderRadius: '3px 3px 0 0'
      }}>
        <div dangerouslySetInnerHTML={{__html:this.state.data.content}} className='container'/>
      </div>
      </div>
    );
  }
}

export default Topic;