
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Zones from './components/Zones';

class Index extends Component {
	constructor(){
		super();
		this.state={
			list:[
			{name:'Zone 1', zipCode:'100121', numcomments:'10'},
			{name:'Zone 2', zipCode:'100122', numcomments:'20'},
            {name:'Zone 3', zipCode:'100123', numcomments:'30'}  
			]
		}
	}

   render(){

   	const listItems=this.state.list.map((zone,i) =>{
   		return(
   			<li><Zones currentzone={zone} ind={i} /></li>
   			)

   	})
   	   	// const firstZone={name:'Zone 1', zipCode:'100121', numcomments:'10'}
   	   	// const secondZone={name:'Zone 2', zipCode:'100122', numcomments:'20'}
   	   	// const thirdtZone={name:'Zone 3', zipCode:'100123', numcomments:'30'}
   	    return(
           <div>
           Hello React New AAAAAAAAAAAAAAAAAa
            <ol>{listItems} </ol>
           
           </div>
           )
       }
   }

 ReactDOM.render(<Index />, document.getElementById('root'));