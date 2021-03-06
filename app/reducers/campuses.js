import axios from 'axios';
import { runInNewContext } from 'vm';

/*  Campuses, a sub-reducer to manage campuses in Redux store */

//Action types (past tense GOT CAMPUSES)
const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

//Action creators
export const getCampuses = campuses => ({type: GET_CAMPUSES, campuses})

export const addCampus = campus => {
     return {
        type: ADD_NEW_CAMPUS,
        campus
    }
}

export const editCampus = campus => {
    return {
        type: EDIT_CAMPUS,
        campus
    }
}

export const deleteCampus = campusId => {
    return {
        type: DELETE_CAMPUS,
        campusId
    }
}


//Thunk creators
//GET campuses:
export const thunkFetchCampuses = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/api/campuses');
            dispatch(getCampuses(data));
        } catch (error) {
            console.error(error)
        }  
    }
}

//POST a campus (adding) 
export const thunkAddCampus = (newCampus, ownProps) => {
    return async (dispatch) => {
        try { 
            const { data } = await axios.post('/api/campuses', newCampus);
            dispatch(addCampus(data));
            ownProps.history.push(`/campuses/${data.id}`)
        } catch (error) {
            console.error(error);
        }
    }
}

//PUT a campus (editting)
export function thunkPutCampus (updatedCampus, id, ownProps) {
    console.log('id',id)

   return async dispatch => {
       try {
           const { data } = await axios.put(`/api/campuses/${id}`, updatedCampus); 
           console.log('data', data.campusToUpdate)
           dispatch(editCampus(data));
           ownProps.history.push(`/campuses/${id}`);
       } catch (err){
           console.error(err)
       }
   }
}

//DELETE a campus: try catch with async/await or Promises
export const thunkDeleteCampus = (campusId) => {
    return dispatch => {
        try {
          axios.delete(`/api/campuses/${campusId}`);
          const action = deleteCampus(campusId);
          dispatch(action);
        } catch (error) {
          console.log('removeCampus went wrong', error)
        }
    }
}

//Reducer
const initialState = {data:[], isFetching: true}
export default function campusReducer (state = initialState, action){   
    switch (action.type){
      case GET_CAMPUSES: 
        return {data: action.campuses, isFetching: false}
      
      case ADD_NEW_CAMPUS: 
        return {data:[...state, action.campus], isFetching: false}        
      
      case EDIT_CAMPUS: {     
          console.log('action.campus!!!!!!!', action.campus.campusToUpdate)
        //  const editedCampus = [...state].filter(campus => campus.id === action.campusToUpdate.id);
        //  console.log('editedCampus', editedCampus)
        //  return {data:[...editedCampus, action.campus], isFetching: false}
        return { 
            data: state.data.map(campus => {
                return campus.id === action.campus.campusToUpdate.id ? action.campus.campusToUpdate : campus
            }),
            isFetching: false
        }
      }
            
      case DELETE_CAMPUS: {    
        console.log('action', action)
       return {
        data: state.data.filter(campus => {
            return campus.id !== action.campusId}), //campusId is a foreign key
        isFetching: false
      }
    }

      default:
        return state
    }
}
