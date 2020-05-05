import React from 'react'
import axios from 'axios'
import Library from '../Library/Library'

export default class Libraries extends React.Component{

    state={
        isLoading:true,
        lbs:[]
    }

    componentDidMount(){
     axios.get('http://localhost:8080/libraries')
     .then(res=>{
         console.log('result :'+res.data.length);
         this.setState({
             isLoading:false,
             lbs:res.data
         })
     }).catch(err=>{
         console.log('err:'+err);
     })
  
    }

    render(){

        return(
        <React.Fragment>
        <div>{this.state.isLoading?<p>loading...</p>:
        this.state.lbs.map(lb=>{
            return <Library id={lb.id} name={lb.name}></Library>
        })
        
        }
      </div>
        </React.Fragment>)
    }
}