import React from "react";
import { Link } from "react-router-dom" 
import { connect } from "react-redux" 

function Campuses(props){  
             const  {campuses} = props;
             return ( 
                <div className = "campuses">
                
                    <div className = "campuses-container">
                    <div className = 'title'>
                    <h2>All Campuses</h2>
                    </div>
                        <div className = 'campus'>                             
                            {
                                campuses.data.map(campuses => (
                                <div key={campuses.id} >
                                    <a href = "#">
                                        <img src={campuses.imageUrl} alt = "image" /> 
                                    </a> 
                                <Link to ={`/campuses/${campuses.id}`}>{campuses.name}</Link> 
                                </div>          
                                ))
                            }
                        </div>
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
