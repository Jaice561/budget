import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import * as budgetAPI from '../../services/budgets-api'
import AddBudgetPage from '../AddBudgetPage/AddBudgetPage';
import BudgetListPage from '../BudgetListPage/BudgetListPage';
import EditBudgetPage from '../EditBudgetPage/EditBudgetPage'

class App extends Component {
  state = {
    budgets:[]
  }

  handleAddBudget = async newBudgetData => {
    const newBudget = await budgetAPI.create(newBudgetData);
    this.setState(state => ({
      budgets: [...state.budgets, newBudget]
    }), ()=> this.props.history.push('/budgets'));
  }

  handleDeleteBudget = async id => {
    await budgetAPI.deleteOne(id);
    this.setState(state => ({
      budgets: state.budgets.filter(b => b._id !== id)
    }), () => this.props.history.push('/budgets'));
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

  render() {
    return (
      <>
        <Route exact path='/' render={() =>
          <>
            <NavBar 
              pageName={" Welcome To Your Budgets List "}
            />
          </>
        }>
        </Route>
        <Route exact path='/budgets/add' render={() =>
          <AddBudgetPage 
          handleAddBudget={this.handleAddBudget}
          />
        }>
        </Route>
        <Route exact path='/budgets' render={() =>
          <BudgetListPage 
          budgets={this.state.budgets}
          handleDeleteBudget={this.handleDeleteBudget}
          />
        }>
        </Route>
        <Route exact path='/edit' render={({location}) =>
          <EditBudgetPage 
          handleUpdateBudget={this.handleUpdateBudget}
          location={location}
          />
        }>
        </Route>
      </>
    )
  }

}

export default App;
