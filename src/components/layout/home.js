
import React, { Component } from 'react';
import styles from './styles';
import Zones from '../containers/Zones';
import Comments from '../containers/Comments';
class Home extends Component {

   render(){
	const style = styles.zone;
   	    return(

           <div className="container">
             <div className="row">
               <div className="col-md-4">
                 <Zones />
               </div>
               <div className="col-md-4">
                 <Comments />
               </div>
             </div>
           </div>
           )
       }
   }

           

 export default Home;
