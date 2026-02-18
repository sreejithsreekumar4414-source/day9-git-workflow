// JobList Component
// Day 9 Practice - Sreejith Sreekumar

import JobCard from './JobCard';

function JobList({ jobs }) {
  if (jobs.length === 0) {
    return (
      <div className="no-results">
        <p>😕 No jobs found matching your search</p>
        <p>Try different keywords</p>
      </div>
    );
  }

  return (
    <div className="job-list">
      <p className="results-count">{jobs.length} jobs found</p>
      <div className="jobs-grid">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobList;
