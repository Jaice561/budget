import React from 'react';
import BudgetCollection from '../../components/BudgetCollection/BudgetCollection';
import './BudgetListPage.css';

function BudgetListPage(props) {
    return (
        <>
        <div className='BudgetListPage-grid'>
            {props.budgets.map(budget => 
                <BudgetCollection 
                    key={budget._id}
                    budget={budget}
                    handleDeleteBudget={props.handleDeleteBudget}
                />
                )}
        </div>
        </>
    )
}

export default BudgetListPage;