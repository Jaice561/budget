import React from 'react';
import './BudgetListPage.css';
import NavBar from '../../components/NavBar/NavBar';
import BudgetCollection from '../../components/BudgetCollection/BudgetCollection';

function BudgetListPage(props) {
    return (
        <>
        <NavBar 
            pageName={"My Budget List"}
        />
        <div className='BudgetListPage-grid'>
            {props.budgets.map(budget => 
                <BudgetCollection 
                    key={budget._id}
                    budget={budget}
                />
                )}
        </div>
        </>
    )
}

export default BudgetListPage;