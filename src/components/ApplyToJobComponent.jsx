import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JobService from '../services/JobService';


class ApplyToJobComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            userEmail: '',
            phoneNumber: '',
            primarySkills: [],
            jobId: '',

        };


    }
    render() {
        return (
            <div>
                <h1 className='text-center'>Candidate Application Form</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'> Apply to the job!</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name</label>
                                        <input  placeholder='First Name' name='firstName' className='form-control'
                                            value={this.state.firstName} onChange={(event) => this.setState({ firstName: event.target.value })} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name</label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                            value={this.state.lastName} onChange={(event) => this.setState({ lastName: event.target.value })} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input type='email' placeholder='Email' name='userEmail' className='form-control'
                                            value={this.state.userEmail} onChange={(event) => this.setState({ userEmail: event.target.value })} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Phone Number </label>
                                        <input type='text' placeholder='Phone Number' name='phoneNumber' className='form-control'
                                            value={this.state.phoneNumber} onChange={(event) => this.setState({ phoneNumber: event.target.value })} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Primary Skills</label>
                                        <input placeholder='Primary Skills' name='primarySkills' className='form-control'
                                            value={this.state.primarySkills} onChange={(event) => {
                                                let primarySkillsArray = (event.target.value).split(',');
                                                this.setState({ primarySkills: primarySkillsArray });
                                            }} />
                                    </div>
                                    <div className='form-group'>
                                        <label>JobId</label>
                                        <input placeholder='JobId' name='jobId' className='form-control'
                                            value={this.state.jobId} onChange={(event) => {this.setState({ jobId: event.target.value }) }} />
                                    </div>
                                    <br />
                                    <Link to='/appliedSuccess'>
                                    <button className='btn btn-success' onClick={(event) => {
                                        event.preventDefault();

                                        let candidate = {
                                            firstName: this.state.firstName, lastName: this.state.lastName,
                                            userEmail: this.state.userEmail, phoneNumber: this.state.phoneNumber,
                                            primarySkills: this.state.primarySkills, jobId: this.state.jobId
                                        }

                                        console.log(JSON.stringify(candidate));
                                        JobService.applyCandidates(candidate).then(res =>{
                                          console.log("Done!");
                                        });
                                    }}>Apply</button>
                                    </Link>

                                    <Link to="/jobs"><button className='btn btn-danger' style={{ marginLeft: "20px" }}>Cancel</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApplyToJobComponent;