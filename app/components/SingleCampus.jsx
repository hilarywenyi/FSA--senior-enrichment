import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux" ;

const SingleCampus = (props) => {

    const  { campus, students, history } = props

         return (
            <div >
            <div className = "page-header">
               <h1> Campus: {campus.name} </h1>
            </div>

            <div className = "row">
                <div className = "campuseImage-container" >
                   <img src = {campus.imageUrl} />
                   <h4> {campus.address}</h4>
                   <h4> {campus.description}</h4>
                  
                   <div className = "row">
                   <Link className = "link-button btn btn-default" to = {`/campuses/${campus.id}/new-student`}>Add New Student</Link>
                   <Link className = "link-button btn btn-default" to = {`/campuses/${campus.id}/edit-student`}>Edit Campus</Link>
                   </div>                            
                </div>
            </div>               
            </div> 
         ) 
}

const mapStateToProps = function(state, ownProps) {
    const campusId = Number(ownProps.match.params.campusId);    
    
    return ({
        campus: state.campuses.find(campus => campus.id === campusId)|| {name: ''},
        students: state.students.filter(student => student.campusId === campusId),
        campusId
    })
}

export default connect(mapStateToProps)(SingleCampus);
