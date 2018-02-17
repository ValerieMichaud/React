import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    let _this = this;
    this.serverRequest = 
      axios
        .get("jobs.json")
        .then(function(result) {    
          _this.setState({
            jobs: result.data.jobs
          });
        })
  }

  handleClick(key) {
    const jobs = this.state.jobs.slice();
    jobs[key].featured = !jobs[key].featured;
    this.setState({
      jobs: jobs,
    });
  }

  render() {
    let _this = this;
    return (
      <div>
        {this.state.jobs.map(function(job, key) {
          return (
            <div key={key}>
              <Job key={job.id} 
                company_name={job.company_name}
                featured={job.featured}
                id={job.id}
                onClick={() => _this.handleClick(key)}
              />
            </div>
          );  
        })}
      </div>
    )
  }
}

class Job extends React.Component {
  render() {
    return (
      <div>
        <div 
          className="job"
        >
          {this.props.company_name}
          <Feature 
            featured={this.props.featured} 
            id={this.props.id} 
            onChange={() => this.props.onClick()}
          />
        </div>
      </div>
    )
  }
} 


class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFeatured: this.props.featured
    };
  }

  handleChange(event) {
    this.setState({
      isFeatured: !this.state.isFeatured
    });
  }

  render() {
    return (
      <div>
        Is Featured?
        <input 
          type="checkbox" 
          value={this.state.isFeatured} 
          onChange={() => this.props.onChange()} 
          defaultChecked={this.state.isFeatured} 
        />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);