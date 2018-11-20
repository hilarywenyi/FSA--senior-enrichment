import React from 'react';
import { connect } from 'react-redux';
import { thunkPutCampus } from '../reducers/campuses';


const EditCampus = (props) => {

  const { handleSubmit } = props;
  console.log('whats props', props)
  const campusId = Number(props.match.params.campusId);
  console.log('campusid', typeof campusId)
  const campus = props.campuses.data.find(campus => campus.id === campusId);
  console.log('campus in editpage', campus);
  const { name, address, imageUrl, description } = campus;
 

  return (
    <form className = "form-horizontal" onSubmit = {(event) => {handleSubmit(event, campusId)}}>
    <div>
        <main>
          <h1>Edit Campus Here</h1>
          <form>
            <label>School Name:
                <input
                  name="name"
                  type="text"
                  value={name}
                />
            </label>

            <label>Address:
                <input
                  name="address"
                  type="text"
                  value={address}
                />
            </label>

             <label>Image:
                <input
                  name="imageUrl"
                  type="text"
                  value={imageUrl}
                />
            </label>

             <label>Description:
                <input
                  name="description"
                  type="text"
                  value={description}
                />
            </label>
            
            <button type="submit">Submit Change</button>
          </form>
        </main>
      </div>
    
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(event, id) {
      event.preventDefault();
      const name = event.target.campusName.value;
      const image = event.target.campusImage.value || undefined;
      dispatch(thunkPutCampus({id, name, image}, ownProps.history))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);