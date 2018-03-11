
import React, { Component } from 'react';
import styles from './styles'
class Zones extends Component {

   render(){
	const style = styles.zone;
   	    return(
           <div style={style.container}>
                <ol>
                    <h2 style={style.hedder} ><a style={style.title} href="#">{this.props.ind} AA {this.props.currentzone.name}</a></h2>
                    <span className="detail">{this.props.currentzone.zipCode}</span><br />
                    <span>{this.props.currentzone.numcomments} Comments</span><br /><br />
                    
                </ol>
           </div>
           )
       }
   }

           

 export default Zones;
