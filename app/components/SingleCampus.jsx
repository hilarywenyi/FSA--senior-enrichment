import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux" ;
import { thunkDeleteCampus } from '../reducers/campuses'

const SingleCampus = (props) => {
    const  { campus, students, history } = props
    console.log('props.students', props.students)
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
                   <h4> Address: {campus.address}</h4>
                   <h4> Description: {campus.description}</h4>
                   <h4> Students on Campus: </h4>
                   {/* need to add a key */}
                   {
                       students.map((students) => (
                        <h4> {students && <Link to = {`/students/${students.id}`} > {students.firstName} {students.lastName}</Link>}</h4>
                        ))
                   }
                  
                  
                   <div className = "column">
                   <button type="button">
                         <Link to={'/students/newStudent'}>Add New Student</Link>
                   </button>            
                   <button type="button"> 
                         <Link to={`/campuses/${campus.id}/editCampus`}>Edit Campus</Link>
                   </button>            
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
        students: state.students.data.filter(student => student.campusId === campusId),
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
