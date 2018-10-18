import axios from 'axios';

/*  Campuses, a sub-reducer to manage campuses in Redux store */

//Action types
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

//Action creators
export const getCampuses = campuses => {
    return {
        type: GET_CAMPUSES,
        campuses
    }
}

export const getCampus = campus => {
    return {
        type: GET_CAMPUS,
        campus
    }
}

export const addCampus = newCampus => {
    return {
        type: ADD_CAMPUS,
        newCampus
    }
}

export const deleteCampus = id => {
    return {
        type: DELETE_CAMPUS,
        id
    }
}


//Thunk creators
//GET campuses:
export const thunkFetchCampuses = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('/api/campuses');
            const campuses = res.data;
            const action = getCampuses(campuses);
            console.log('fetchCampuses thunk campuses = ', campuses)
            dispatch(action);
        } catch (error) {
            console.log('fetchCampuses went wrong', error)
        }  
    }
}

//POST a campus (adding)
export function thunkPostCampus (history, campusData) {

    return async (dispatch) => {
      try {
          const res = await axios.get('/api/campuses', campusData)
          const newCampus = res.data;
          const action = getCampus(newCampus);
          dispatch(action);
          history.push(`/campuses/${newCampus.id}`);
      } catch (error) {
          console.log(error)
      }
    }
}

//PUT a campus (editting)
export function thunkPutCampus (history, campusData, campusId) {

    return function thunk (dispatch) {

      return axios.put(`/api/campuses/${campusId}`, campusData)
        .then(res => res.data)
        .then(updatedCampus => {
          const action = editCampus(updatedCampus);
          dispatch(action);
          history.push(`/campuses/${updatedCampus.id}`);
        });
    }
}

//DELETE a campus:
export const thunkDeleteCampus = (id) => {
    return async dispatch => {
        try {
          await axios.delete(`/api/campuses/${id}`);
          const action = deleteCampus(id);
          dispatch(action);
        } catch (error) {
          console.log('removeCampus went wrong', error)
          //toastr.error('Oops!Sorry our bad');
        }
    }
}

//Reducer
const initialState = []
export default function campusReducer (state = initialState, action){   
    switch (action.type){
      case GET_CAMPUSES: 
        return action.campuses;
      
      case GET_CAMPUS: 
        console.log("action.campus in reducer = ", action.campus);
        return [...state, action.campus];        
      
      case EDIT_CAMPUS: {
            const campusToEdit = state.find(campus => campus.id === action.campus.id);
            const indexOfcampusToEdit = state.indexOf(campusToEdit);
            let newState = [...state];
            newState.splice(indexOfcampusToEdit, 1, action.campus);
            return newState;
      }
            
      case DELETE_CAMPUS:
        return state.filter(element => element.id !== action.id); 

      default:
        return state
    }
}
