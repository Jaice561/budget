import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import * as budgetAPI from '../../services/budgets-api'
import AddBudgetPage from '../AddBudgetPage/AddBudgetPage';
import BudgetListPage from '../BudgetListPage/BudgetListPage';

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
          />
        }>
        </Route>
      </>
    )
  }

}

export default App;
