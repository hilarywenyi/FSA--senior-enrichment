import React from "react";
import { Link } from "react-router-dom" 
import { connect } from "react-redux" 

function Campuses(props){  
             const  {campuses} = props
             console.log('campuses on prop', props)
              //campuses want to be an array
             return ( 
                <div className = "home">
                    <div className = "campuses-container">
                    <h2>All Campuses</h2>
                        <ul>                 
                            {
                                campuses.data.map(campuses => (
                                <li key={campuses.id} >
                                    <a href = "#">
                                        <img src={campuses.imageUrl} alt = "image" /> 
                                    </a> 
                                <Link to ={`/campuses/${campuses.id}`}>{campuses.name}</Link> 
                                </li>          
                                ))
                            }
                        </ul>
                    </div>
                    
                     <div className = "button-container">                       
                       <button>
                         <Link to={'/campuses/newCampus'}>Add New Campus</Link>
                       </button>              
                     </div>
                   
                </div>
             )
 }


const mapStateToProps = function(state) {
    console.log('campuses on state', state)
    return {
        campuses: state.campuses    
    }
};

export default connect(mapStateToProps)(Campuses);
