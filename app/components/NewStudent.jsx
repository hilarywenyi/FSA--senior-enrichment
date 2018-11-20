import React, {Component} from 'react';
import { connect } from 'react-redux';
import { thunkAddStudent } from '../reducers/students';

export class NewStudent extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email:'',
            imageUrl: '',
            gpa: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.thunkAddStudent({...this.state});

    }

    render(){
        const {firstName, lastName, email, imageUrl, gpa } = this.state;
        return (
            <div>
        <main>
          <h1>Add New Student Here</h1>
          <form onSubmit={this.handleSubmit}>
            <label>First Name:
                <input
                  onChange={this.handleChange}
                  name="firstName"
                  type="text"
                  value={firstName}
                />
            </label>

             <label>Last Name:
                <input
                  onChange={this.handleChange}
                  name="lastName"
                  type="text"
                  value={lastName}
                />
            </label>

            <label>Email:
                <input
                  onChange={this.handleChange}
                  name="email"
                  type="text"
                  value={email}
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

             <label>GPA:
                <input
                  onChange={this.handleChange}
                  name="gpa"
                  type="text"
                  value={gpa}
                />
            </label>
            
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
        )
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      thunkAddStudent: student => {
        dispatch(thunkAddStudent(student, ownProps));
      }
    };
  };

export default connect(null, mapDispatchToProps)(NewStudent);