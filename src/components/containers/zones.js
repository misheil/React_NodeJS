
import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import superagent  from 'superagent';

class Zones extends Component {
constructor(){
    super();
    this.state={
      zone:{
        name: '',
        zipCodes: '',
        numcomments:''
      },      
      list:[
      // {name:'Zone 1', zipCodes:'100121', numcomments:'10'},
      // {name:'Zone 2', zipCodes:'100122', numcomments:'20'},
      // {name:'Zone 3', zipCodes:'100123', numcomments:'30'}  
      ]
    }
  }

  componentDidMount(){
    console.log('componentDidMount');
    superagent
    .get('/api/zone')
    .query(null)
    .set('Accept','application/json')
    .end((err,response)=>{
      if(err){
        console.log(err);
        return
      }
      
      let results=response.body.results;
      console.log(results);
      this.setState({
        list: results
      });
    })
  }
 
  submitZone(){
      let updatedList = Object.assign([],this.state.list);
      updatedList.push(this.state.zone);
      this.setState({
        list: updatedList
      });
  }

  updateName(event){
      let updatedZone = Object.assign({},this.state.zone);
      updatedZone['name']=event.target.value;
      this.setState({
        zone: updatedZone
      })
  }

  updateZibCode(event){
      let updatedZone = Object.assign({},this.state.zone);
      updatedZone['zipCodes']=event.target.value;
      this.setState({
        zone: updatedZone
      })
  }

    updateNumComm(event){
      let updatedZone = Object.assign({},this.state.zone);
      updatedZone['numcomments']=event.target.value;
      this.setState({
        zone: updatedZone
      })
  }

   render(){
    const listItems=this.state.list.map((zone,i) =>{
      return(
        <li key={i.toString()}><Zone currentzone={zone} ind={i} /></li>
        )
    })


        return(
          <div>
            <ol>{listItems}</ol>    
            <input type="text" placeholder="Name Zone"  onChange={this.updateName.bind(this)} className="form-control" />  <br />    
            <input type="text" placeholder="zipCodes Zone"  onChange={this.updateZibCode.bind(this)} className="form-control" />  <br />    
            <input type="text" placeholder="numcomments Zone"  onChange={this.updateNumComm.bind(this)} className="form-control" />  <br />
            <button onClick={this.submitZone.bind(this)} className="btn btn-info">Submit Zone</button>    
  
          </div>
           )
       }
   }

           

 export default Zones;
