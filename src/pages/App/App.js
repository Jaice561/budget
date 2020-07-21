import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import * as budgetAPI from '../../services/budgets-api'
import AddBudgetPage from '../AddBudgetPage/AddBudgetPage';
import BudgetListPage from '../BudgetListPage/BudgetListPage';
import EditBudgetPage from '../EditBudgetPage/EditBudgetPage';
import LandingPage from '../../pages/LandingPage/LandingPage';
import BudgetDetail from '../../pages/BudgetDetail/BudgetDetail';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';


class App extends Component {
  state = {
    budgets: [],
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddBudget = async newBudgetData => {
    const newBudget = await budgetAPI.create(newBudgetData);
    this.setState(state => ({
      budgets: [...state.budgets, newBudget]
    }), ()=> this.props.history.push('/budgets'));
  }

  handleDeleteBudget = async id => {
    if(userService.getUser()){
    await budgetAPI.deleteOne(id);
    this.setState(state => ({
      budgets: state.budgets.filter(b => b._id !== id)
    }), () => this.props.history.push('/budgets'));
  }
  else {
    this.props.history.push('/login')
  }
}

  handleUpdateBudget = async updatedBudgetData => {
    const updatedBudget = await budgetAPI.update(updatedBudgetData);
    const newBudgetsArray = this.state.budgets.map(b => 
    b._id === updatedBudget._id ? updatedBudget : b)
    this.setState(
      {budgets: newBudgetsArray},
      () => this.props.history.push('/budgets')
    )
  }

  async componentDidMount() {
    const budgets = await budgetAPI.getAll();
    this.setState({budgets})
  }

  render () {
    return (
      <>
    
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Route exact path='/' render={() =>
              <LandingPage />
            }>
               </Route>

        <Route exact path='/budgets/add' render={() =>
          userService.getUser() ?
          <AddBudgetPage 
          handleAddBudget={this.handleAddBudget}
          user={this.state.user}
          />
          :
          <Redirect to='/login' />
        }>
        </Route>

        <Route exact path='/budget/detail' render={() =>
          userService.getUser() ?
          <BudgetDetail
          user={this.state.user}
          budgets = {this.state.budgets}
          />
          :
          <Redirect to='/login' />
        }>
        </Route>

        <Route exact path='/budgets' render={() =>
          <BudgetListPage 
          budgets={this.state.budgets}
          user={this.state.user}
          handleDeleteBudget={this.handleDeleteBudget}
          />
        }>
        </Route>
        <Route exact path='/edit' render={({location}) =>
         userService.getUser() ?
          <EditBudgetPage 
          handleUpdateBudget={this.handleUpdateBudget}
          location={location}
          user={this.state.user}
          />
          :
          <Redirect to='/login' />
        } />
 
      
      <Route exact path='/signup' render={({ history }) => 
        <SignupPage
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
        />
      }/>
      <Route exact path='/login' render={({ history }) => 
        <LoginPage
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
        />
      }/>
      </>
    );
  }
}

export default App;
