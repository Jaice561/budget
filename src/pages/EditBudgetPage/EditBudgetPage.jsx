import React, { component, Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

class EditBudgetPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.budget
    }

    formRef = React.createRef();
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateBudget(this.state.formData);
      };
    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return  (
        <>
             <NavBar 
                    pageName={"Edit Your BUdget For This Month"}
                />
            <div className="row">
                    <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="month" id="budget_month" type="text" className="active" value={this.state.formData.month} onChange={this.handleChange} required />
                            <label htmlFor="budget_month">Month</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                            <input name="netIncome" id="netincome" type="text" className="active" value={this.state.formData.netIncome} onChange={this.handleChange} required/>
                            <label htmlFor="netIncome">Net Income</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                            <input name="carNote" id="car" type="text" className="active" value={this.state.formData.carNote} onChange={this.handleChange}/>
                            <label htmlFor="carNote">Car Note</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                            <input name="carInsurance" id="insurance" type="text" className="active" value={this.state.formData.carInsurance} onChange={this.handleChange}/>
                            <label htmlFor="carInsurance">Car Insurance</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                            <input name="rent" id="runtime" type="text" className="active" value={this.state.formData.rent} onChange={this.handleChange}/>
                            <label htmlFor="rent">Rent</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                            <input name="phoneBill" id="phone" type="text" className="active" value={this.state.formData.phoneBill} onChange={this.handleChange}/>
                            <label htmlFor="phoneBill">Phone Bill</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                            <input name="utilities" id="utilities" type="text" className="active" value={this.state.formData.utilities} onChange={this.handleChange}/>
                            <label htmlFor="utilities">Utilities</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                            <input name="wifi" id="wifi" type="text" className="active" value={this.state.formData.wifi} onChange={this.handleChange}/>
                            <label htmlFor="wifi">WiFi</label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn green"
                            disabled={this.state.invalidForm}
                        ><i class="material-icons left">edit</i>
                            Update Budget
                        </button>
                        <Link 
                            className="btn red"
                            to={{
                                pathname: '/budgets'
                            }}
                        ><i class="material-icons left">undo</i>
                        Cancel
                        </Link>     
                    </form>
                </div>
                </>           
        )
    }
}


export default EditBudgetPage;