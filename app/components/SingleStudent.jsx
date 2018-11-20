import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { thunkDeleteStudent } from '../reducers/students'


const SingleStudent = (props) => {
  
        const { student, campuses } = props;
        const campus = campuses.data.find( campus => campus.id === student.campusId)
        return student 
        ? (
        <div className="student-bio">
                <div className = "campuseImage-container" >
                   <img src = {student.imageUrl} />
                </div>

                <div>
                    <h4>{student.firstName} {student.lastName}</h4>
                    <h4>{ campus && <Link to={`/campuses/${campus.id}`}>Campus: {campus.name}</Link>}</h4>
                    <h4>{student.email}</h4>
                    <h4>GPA: {student.gpa}</h4>
                    
                </div>
        <div className="button-container">
          <button type="button" className="deleteStudent" onClick = {() => props.thunkDeleteStudent(student.id)}>Delete Student</button>
          <button type="button" className="btn-main">Edit</button>
        </div>
        </div>
        )
        : <h1>Loading...</h1>
}

  const mapStateToProps = function (state, ownProps) {
    const studentId = Number(ownProps.match.params.studentId); 
    console.log('state.students', state.students)
    return {
       student: state.students.data.find(student => student.id === studentId) || {name: ''},
       campuses: state.campuses
    }
  }

  const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        thunkDeleteStudent: (studentId) => {dispatch(thunkDeleteStudent(studentId));
        ownProps.history.push('/students')
       }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);