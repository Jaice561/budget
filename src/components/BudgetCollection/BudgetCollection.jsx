import React from 'react';
import { Link } from 'react-router-dom';


function BudgetCollection({ budget, handleDeleteBudget }) {

    function computeRemainingIncome() {
        return parseInt(budget.netIncome) - (parseInt(budget.carNote) + parseInt(budget.carInsurance) + parseInt(budget.rent) + parseInt(budget.phoneBill) + parseInt(budget.utilities) + parseInt(budget.wifi) + parseInt(budget.wellBeing)) 

    }

    return(
        <Link 
            to={{
                pathname: '/budget/detail',
                state: {budget}
            }}
        >

            <ul className=" collection">
                
                    <li className="collection-header"><h4>Month {budget.month}</h4></li>
                    <li className="collection-item"><div>Net Income {budget.netIncome}<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                    <li className="collection-item"><div>Car Note {budget.carNote}<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                    <li className="collection-item"><div>Car Insurance {budget.carInsurance}<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                    <li className="collection-item"><div>Rent {budget.rent}<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                    <li className="collection-item"><div>Phone Bill {budget.phoneBill}<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                    <li className="collection-item"><div>Utilities {budget.utilities}<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                    <li className="collection-item"><div>WiFi {budget.wifi}<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                    <li className="collection-item"><div>WellBeing {budget.wellBeing}<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                    <li className="collection-item"><div>Remaining Income {computeRemainingIncome()}<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
               
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
                         Edit Budget
                     </Link>
                </ul>
        </Link>
       
    )
}

export default BudgetCollection;