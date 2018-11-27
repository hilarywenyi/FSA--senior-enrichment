import React, {Component} from 'react';
import { connect } from 'react-redux';
import { thunkPutCampus } from '../reducers/campuses';

export class EditCampus extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props) //good
    this.state = {
      name: this.props.selectedCampus.name,
      address: this.props.selectedCampus.address,
      imageUrl: this.props.selectedCampus.imageUrl,
      description: this.props.selectedCampus.description
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.thunkPutCampus({...this.state}); 
  }

  render(){   
  // console.log('this.props', this.props) //not returning anything, why?
  // console.log('this.state',this.state) //good
  //const { name, address, imageUrl, description } = this.props.selectedCampus;
  return (   
    <div>
        <main>
          <h1>Edit Campus Here</h1>
          <form onSubmit = {this.handleSubmit}>
            <label>School Name:
                <input
                  onChange={this.handleChange}
                  name="name"
                  type="text"
                  value={this.state.name} //wasn't working if {name} = this.props.selectedCampus, why?
                />
            </label>

            <label>Address:
                <input
                  onChange={this.handleChange}
                  name="address"
                  type="text"
                  value={this.state.address}
                />
            </label>

             <label>Image:
                <input
                  onChange={this.handleChange}
                  name="imageUrl"
                  type="text"
                  value={this.state.imageUrl}
                />
            </label>

             <label>Description:
                <input
                  onChange={this.handleChange}
                  name="description"
                  type="text"
                  value={this.state.description}
                />
            </label>
            
            <button type="submit">Submit Change</button>
          </form>
        </main>
      </div>
    
    
  )}
}

const mapStateToProps = (state, ownProps) => {
  const campusId = Number(ownProps.match.params.campusId); //Good
  return {
    selectedCampus: state.campuses.data.find(campus => campus.id === campusId)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = Number(ownProps.match.params.campusId);
  return {
    thunkPutCampus: campus => {
      dispatch(thunkPutCampus(campus, id, ownProps))
    }   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);