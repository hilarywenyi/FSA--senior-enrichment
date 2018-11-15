import React from "react";
import { Link, withRouter } from "react-router-dom" 
import { connect } from "react-redux" 

function Campuses(props){  
             const { campuses } = props
             console.log('props',props)
             return ( 
                <div className = "home">
                    <div className = "campuses-container">
                    <h2>All Campuses</h2>
                        <ul>                          
                            {
                                campuses.map(campus => (
                                <li key={campus.id} >
                                    <a href = "#">
                                        <img src={campus.imageUrl} alt = "image" /> 
                                    </a> 
                                <Link to ={`/campuses/${campus.id}`}>{campus.name}</Link> 
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
    return {
        campuses: state.campuses
    }
};

export default connect(mapStateToProps)(Campuses);
