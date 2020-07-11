import React from 'react';
import { Link } from 'react-router-dom';

function BudgetCollection({ budget, handleDeleteBudget }) {
    return(
        <>
            <ul className=" collection">
                    <li class="collection-header"><h4>Month {budget.month}</h4></li>
                    <li class="collection-item"><div>Net Income {budget.netIncome}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                    <li class="collection-item"><div>Car Note {budget.carNote}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                    <li class="collection-item"><div>Car Insurance {budget.carInsurance}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                    <li class="collection-item"><div>Rent {budget.rent}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                    <li class="collection-item"><div>Phone Bill {budget.phoneBill}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                    <li class="collection-item"><div>Utilities {budget.utilities}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                    <li class="collection-item"><div>WiFi {budget.wifi}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                    <li class="collection-item"><div>WellBeing {budget.wellBeing}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                    <button type="submit" className="btn red" onClick={() => handleDeleteBudget(budget._id)}>
                    <i className="material-icons left">delete</i>    
                        Delete Budget
                    </button>
                    <Link 
                         className="btn yellow black-text"
                         to={{
                             pathname: '/edit',
                             state: {budget}
                         }}
                     ><i className="material-icons left">build</i>
                         Edit Movie
                     </Link>
                </ul>
        </>
    )
}

export default BudgetCollection;