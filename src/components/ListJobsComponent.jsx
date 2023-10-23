import React, { Component } from 'react';
import JobService from '../services/JobService';
import { Link } from 'react-router-dom';

class ListJobsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs:[]
    };
  }

  componentDidMount(){
    JobService.getJobs().then((res) => {
      this.setState({jobs:res.data})
    })
  }
  render() {
    return (
      <div className='bg-dark text-white'>
        <h1 className='text-center'>Hiring Companies!</h1>
        <div className='row'>
          <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Job Id</th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Job Description</th>
              <th>Job Location</th>
              <th>Required Skills</th>
              <th>Job Type</th>
              <th>Work Mode</th>
              <th>Apply</th>
            </tr>
          </thead>

          <tbody>
              {
                this.state.jobs.map(
                  job => <tr key={job.id}>
                    <td>{job.jobId}</td>
                      <td>{job.jobTitle}</td>
                      <td>{job.companyName}</td>
                      <td>{job.jobDescription}</td>
                      <td>{job.jobLocation}</td>
                      <td>{job.requiredSkills.map((item, i) => {
                         return (
                          <li >{item}</li>
                       )
                      })}</td>
                      <td>{job.jobType}</td>
                      <td>{job.workModel}</td>
                      <td><Link to="/apply"><button className='rounded btn btn-success'>Apply</button></Link></td>
                  </tr>
                )
              }

          </tbody>

          </table>
        </div>


      </div>
    );
  }
}

export default ListJobsComponent;