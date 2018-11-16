import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkAddCampus } from '../reducers/campuses';

export class NewCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      imageUrl: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value //name need to match line 9-11
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('this.props', this.props)
    this.props.thunkAddCampus({...this.state}); //name should match line 83
  }

  render() {
    const { name, address, imageUrl, description } = this.state;
    return (
      <div>
        <main>
          <h1>Add New School Here</h1>
          <form onSubmit={this.handleSubmit}>
            <label>School Name:
                <input
                  onChange={this.handleChange}
                  name="name"
                  type="text"
                  value={name}
                />
            </label>

            <label>Address:
                <input
                  onChange={this.handleChange}
                  name="address"
                  type="text"
                  value={address}
                />
            </label>

             <label>Image:
                <input
                  onChange={this.handleChange}
                  name="imageUrl"
                  type="text"
                  value={imageUrl}
                />
            </label>

             <label>Description:
                <input
                  onChange={this.handleChange}
                  name="description"
                  type="text"
                  value={description}
                />
            </label>
            
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    thunkAddCampus: campus => {
      dispatch(thunkAddCampus(campus, ownProps));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(NewCampus);

// import React from 'react';
// import { connect } from 'react-redux';
// import { thunkAddCampus } from '../reducers';

// class NewCampus extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             name: this.props.campusName || '',
//             imageUrl: this.props.campusImage || '',
//         }
//         this.handleNameChange = this.handleNameChange.bind(this);
//         this.handleUrlChange = this.handleUrlChange.bind(this);
//     }

//     handleNameChange(event) {
//         this.setState({
//           name: event.target.value
//         })
//     }

//     handleUrlChange(event) {
//         this.setState({
//           imageUrl: event.target.value
//         })
//     }

//     render(){
        
//         const campusName = this.props.campusName || undefined;
//         const campusImage = this.props.campusImage || undefined;

//         return (
//             <div> 
//                 <main>
//                     <h2> Add New Campus </h2>
//                     <form onSubmit ={(event)=> this.props.handleSubmit(event, this.state.name, this.state.imageUrl, this.props.campusId)}>
//                      <label htmlFor ='name'> Campus Name: </label>
//                      <input onChange = {this.handleNameChange}
//                             name = 'name'
//                             type = 'text'
//                             defaultValue = {campusName}
//                     />                  
//                      <label htmlFor ='image'> Image: </label>
//                      <input onChange = {this.handleUrlChange}
//                             image = 'imageUrl'
//                             type = 'text'
//                             defaultValue = {campusImage}
//                     />   
//                     <button type = 'submit'> Add New Campus </button>  
//             </form>
//                 </main>
//             </div> 
//         )
//     }
// }

// const mapDispatchToProps = function (dispatch, ownProps){
//     return {
//         handleSubmit(event, name, imageUrl){
//             event.preventDefault();
//             const newCampus = thunkAddCampus(ownProps.history, {name, imageUrl})
//             dispatch(newCampus);
//         }
//     } 
//   }

// //see if ownProps.history can solve TypeError: Cannot read property 'push' of undefined

//  export default connect(null, mapDispatchToProps)(NewCampus);

