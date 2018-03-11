
import React, { Component } from 'react';
import Comment from '../presentation/Comment';
import superagent  from 'superagent';
import Styles from './styles';

class Comments extends Component{
	constructor(){
		super();
		this.state={
			comment:{
				username: '',
				body: '',
				timestamp:''
			},
			list:[
			     // {body:'Comment 1', username:'user 1',timestamp:'10:30'},              
			     // {body:'Comment 2', username:'user 2',timestamp:'11:30'},              
			     // {body:'Comment 3', username:'user 3',timestamp:'12:30'}              
			]
		}
	}


  componentDidMount(){
    superagent
    .get('/api/comment')
    .query(null)
    .set('Accept','application/json')
    .end((err,response)=>{
      if(err){
        console.log(err);
        return
      }
      
      let results=response.body.results;
      // console.log(results);
      this.setState({
        list: results
      });
    })
  }

	submitComment(){
	    let updatedList = Object.assign([],this.state.list);
	    updatedList.push(this.state.comment);
	    this.setState({
	    	list: updatedList
	    });
	}

	updateUsername(event){
	    // console.log("updateUsername: "+event.target.value);
	    // Steps to update state by value
	    let updatedComment = Object.assign({},this.state.comment);
	    updatedComment['username']=event.target.value;
	    this.setState({
	    	comment: updatedComment
	    })
	}

	updateBody(event){
		// console.log("updateBody: "+event.target.value);
	    // Steps to update state by value
	    let updatedComment = Object.assign({},this.state.comment);
	    updatedComment['body']=event.target.value;
	    this.setState({
	    	comment: updatedComment
	    })
	}
 
	updateTimeStamp(event){

	    let updatedTimeStamp = Object.assign({},this.state.comment);
	    updatedTimeStamp['timestamp']=event.target.value;
	    this.setState({
	    	comment: updatedTimeStamp
	    })
	}



	render(){
		const commentList=this.state.list.map((comment,i) => {
			return(
			<li  key={i.toString()}> <Comment currentComment={comment} ind={i} /> </li>
			)
		})
		return(
			<div>
			<h2>Comments: Zone 1</h2> <br /><br />
			<div style={Styles.comment.commentBox}>
              <ul>
              {commentList}
              </ul>   
              <input className="form-control" onChange={this.updateBody.bind(this)} type="text" placeholder="Comment" /> <br /> 
              <input className="form-control" onChange={this.updateUsername.bind(this)} type="text" placeholder="User Name" /> <br />     
              <input className="form-control" onChange={this.updateTimeStamp.bind(this)} type="text" placeholder="TimeStamp" /> <br /> 
              <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>    
			</div>
            </div>
			
			)
	}
}

export default Comments;