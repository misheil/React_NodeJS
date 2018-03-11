
import React, { Component } from 'react';
import styles from './styles'
class Zone extends Component {

   render(){
	const style = styles.zone;
  const zipCode=this.props.currentzone.zipCodes;
   	    return(
           <div key={this.props.ind.toString()} style={style.container}>
                <ol>
                    <h2 style={style.hedder} ><a style={style.title} href="#">{this.props.ind}- {this.props.currentzone.name}</a></h2>
                    <span className="detail">{zipCode}</span><br />
                    <span>{this.props.currentzone.numcomments} Comments</span><br /><br />
                </ol>
           </div>
           )
       }
   }

           

 export default Zone;
