import React from "react";
import { Link } from "react-router-dom" 
import { connect } from "react-redux" 


const Students = (props) => {   
         const { students } = props
        
         return ( 
             <div className = "students-container">
                 <h2>List of All Students</h2>                
                 <hr />

                 <table className="table">
                  <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    {
                      students.map(student => {
                        return (
                            <tr key = {student.id}>
                                 <td><Link to ={`students/${student.id}`}>{student.id}</Link></td>
                                 <td><Link to ={`students/${student.id}`}>{`${student.firstName} ${student.lastName}`}</Link></td>
                            </tr>
                        )
                     }) 
                    }  
                  </tbody>
                  </table>
                  <Link to ={'/students/new-student'}> <button> Add New Student </button></Link>
                 
             </div>
         )
                 
}


const mapStateToProps = function(state) {
    return {
        students: state.students       
    };
}

export default connect(mapStateToProps)(Students);




// import React from "react";
// import { Link } from "react-router-dom" 
// import { connect } from "react-redux" 

// import { thunkFetchStudents, thunkDeleteStudent } from '../reducers/students'

// class Students extends React.Component {
//      componentDidMount() {
//          this.props.fetchInitialStudent()
//      }

//      render() {
//             const { students } = this.props
//             console.log("this props means students", this.props)
//          return ( 
//              <div className = "students-container">
//                  <h2>List of All Students</h2>
                
//                  <hr />

//                  <table className="table">
//                   <tbody>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                     </tr>
//                     {
//                       students.map(student => {
//                         return (
//                             <tr key = {student.id}>
//                                  <td><Link to ={`student/${student.id}`}>{student.id}</Link></td>
//                                  <td><Link to ={`student/${student.id}`}>{student.firstName} {student.lastName}</Link></td>
//                             </tr>
//                         )
//                      }) 
//                     }  
//                   </tbody>
//                   </table>
                 
//              </div>
//          )
//      }             
// }


// const mapStateToProps = function(state) {
//     return {
//         campuses: state.campuses,
//         students: state.students
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchInitialStudent: () => dispatch(thunkFetchStudents()),
//         deleteStudent: id => dispatch(thunkDeleteStudent(id))   
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//     )(Students);
