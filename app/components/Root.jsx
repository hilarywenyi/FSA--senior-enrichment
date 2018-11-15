//Boilerplates
import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

//Import components
import Home from './Home';
import  Navbar  from './Navbar'

import  Campuses  from './Campuses';
//import  Students  from './Students';

import SingleCampus from './SingleCampus';
//import SingleStudent from './SingleStudent';

import NewCampus from './NewCampus';
//import EditCampus from './EditCampus'

//import reducer
import { thunkFetchCampuses } from  '../reducers/campuses'
//import { thunkFetchStudents } from '../reducers/students'


class Root extends Component {
  componentDidMount() {
    console.log('this.props', this.props);
    this.props.thunkFetchCampuses();
    //store.dispatch(thunkFetchCampuses())
    //store.dispatch(thunkFetchStudents())
  }

  render() {
    if(this.props.isFetching){
      return <div className = 'loader'/>
    }
      return (
        <div>
          <nav>
            <Navbar />
          </nav>
          <main>
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/home" component = {Home} />
              <Route exact path = "/campuses" component = {Campuses} />
              {/* <Route exact path = "/students" component = {Students} /> */}
              <Route exact path = "/campuses/:campusId" component = {SingleCampus} />
              {/* <Route exact path = "/students/:studentId" component = {SingleStudent} /> */}
              <Route exact path = "/campuses/newCampus" component = {NewCampus} />
              {/* <Route path = "/campuses/:campusId/new-student" component = {NewStudent} />
              <Route exact path = "/campuses/:campusId/edit-campus" component = {EditCampus} /> */}
              {/* <Route exact path = "/students/:studentId/edit-student" component = {EditStudent} /> */}            
            </Switch>
          </main>
        </div>
      )
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.campuses.isFetching
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    thunkFetchCampuses: () => dispatch(thunkFetchCampuses())
  } 
} 

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Root)
)
