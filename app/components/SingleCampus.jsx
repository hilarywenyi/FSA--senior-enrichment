import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux" ;
import { thunkDeleteCampus } from '../reducers/campuses'

const SingleCampus = (props) => {
    console.log('props', props)

    const  { campus, students, history } = props
    console.log('props', props)
         return (
            campus
            ?(
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
                   <button type="button" className="deleteCampus" onClick = {() => props.thunkDeleteCampus(campus.id)}>Delete Campus</button>
                   </div>                            
                </div>
            </div>               
            </div> 
         ):<h1>loading</h1>
         ) 
}

const mapStateToProps = function(state, ownProps) {
    const campusId = Number(ownProps.match.params.campusId);    
    return ({
        campus: state.campuses.data.find(campus => campus.id === campusId),
        students: state.students.filter(student => student.campusId === campusId),
        campusId
    })
}

const mapDispatchToProps = function(dispatch, ownProps) {
     return {
         thunkDeleteCampus: (campusId) => {dispatch(thunkDeleteCampus(campusId));
         ownProps.history.push('/campuses')
        }
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
