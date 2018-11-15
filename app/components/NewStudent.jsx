import React from 'react';
import { thunkPostStudent } from '../reducers';
import { connect } from 'react-redux';



// class NewStudent extends React.Component {
 
//     constructor(props){
//       super(props)
//       const student = this.props.selectedStudent || {name: '', bio: ''}
//       student.campusId = student.campusId || 
//     }


//   // const {handleSubmit, campuses} = props;
//   // const campusId = props.match.params.campusId;
//   // console.log("campus",campusId)
//   // const campus = props.campuses.find(campus => campus.id === campusId);
//   // console.log('campus', campus)
  
//   return (
//     <form className = "form-horizontal" onSubmit = {handleSubmit}>
//     <fieldset>
//        <legend>Create a Student</legend>
//        <div className = "form-group">
//             <label>Name</label>
//             <div>
//               <input type="text" name= "studentName" placeholder = "Enter student name" />
//             </div>
//        </div>

//        <div className = "form-group">
//             <label>Campus</label>
//             <div>
//               {
//                 (<select name="studentCampus">
//                     {
//                       campuses && campuses.map(campus => (
//                         <option key = {campus.id} value ={campus.id}>{campus.name}</option>
//                       ))
//                     }
//                 </select>)
//               }
//             </div>
//        </div>

//        <div className = "form-group">
//             <label>Image</label>
//             <div>
//               <input type="text" name= "studentImage" placeholder = "Enter student photo" />
//             </div>
//        </div>

//        <div className = "form-group">
//             <div>
//               <button type = "submit" className = "btn btn-default">Create Student</button>
//             </div>
//        </div>

//     </fieldset>
//     </form>
//   )
// }

// const mapStateToProps = function(state) {
//   console.log("MAP STATE TO PROPS" , state.campuses)
//   return {
//       campuses: state.campuses, //campusesList: state.campuses
//       //students: state.students
//   }
// };

// const mapDispatchToProps = function (dispatch, ownProps) {
//   return {
//     handleSubmit (event) {
//       event.preventDefault();
//       const name = event.target.studentName.value;
//       const image = event.target.studentImage.value || undefined;
//       const campusId = ownProps.match.params.campusId || event.target.studentCampus.value;
//       dispatch(thunkPostStudent({name, campusId, image}, ownProps.history))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);