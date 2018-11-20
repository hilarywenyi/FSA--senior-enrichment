import React from "react";
import { Link } from "react-router-dom" 
import { connect } from "react-redux" 

const Students = (props) => {   
         const { students } = props;
         console.log('props', props)     
         return ( 
             <div className = "students-container">
                 <h2>All Students</h2>                
                 <table className="table">
                 <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    { 
                      students.data.map(student => {
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

                  <Link to ={'/students/newStudent'}> <button> Add New Student </button></Link>
                 
             </div>
         )
                 
}


const mapStateToProps = function(state) {
    return {
        students: state.students  
    };
}

export default connect(mapStateToProps)(Students);
