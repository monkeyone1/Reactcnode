import React, { Component } from 'react';
import axios from 'axios';
import Replies from './Replies.js';
import '../css/topic.css'
class Topic extends Component {
  constructor() {
    super();
    this.state={
      data:[],
      wait:false
    }
  }
    componentWillMount() {
     axios.get(`https://cnodejs.org/api/v1/topic/${this.props.params.id}`)
     .then((res) => {
       this.setState({
         data:res.data.data,
          wait:true
       });
     })
     
   }
  render() {
    console.log(this.state.data);

    return (
      
      <div style={{
       marginRight:'305px',
      
       
      }} >
      <div style={{
        backgroundColor:'#fff',
         borderRadius: '3px',
         marginBottom:'13px'
      }} >
        <div dangerouslySetInnerHTML={{__html:this.state.data.content}} className='container'/>
      </div>

            {
             this.state.wait? <Replies replies={this.state.data.replies} />: ''      
              
            } 
      </div>
    );
  }
}

export default Topic;