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