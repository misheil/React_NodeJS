import React, { Component } from 'react';
import styles from './styles'

class Comment extends Component{
	render(){
		return(
           <div style={{marginBottom:16}} key={this.props.ind.toString()}>
                <ol>
                    <p style={{fontSize:20, fontWeight:400}}>
                    {this.props.currentComment.body}
                    </p>
                    <span style={{fontWeight:200}}>{this.props.currentComment.username}</span>
                    <span style={{fontWeight:200, marginLeft:12, marginRight:12}}> |  </span>
                    <span style={{fontWeight:200}}>{this.props.currentComment.timestamp}</span>
                    <hr />
                </ol>
           </div>
		)
	}
}
export default Comment