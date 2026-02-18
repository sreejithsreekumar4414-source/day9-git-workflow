// JobCard Component
// Day 9 Practice - Sreejith Sreekumar

function JobCard({ job }) {
  const handleApply = () => {
    alert(`Applying for ${job.title} at ${job.company}!`);
  };

  return (
    <div className="job-card">
      <div className="card-header">
        <h3 className="job-title">{job.title}</h3>
        <span className="job-type">{job.type}</span>
      </div>

      <p className="company">🏢 {job.company}</p>

      <div className="job-info">
        <p>📍 {job.location}</p>
        <p>💼 {job.experience}</p>
        <p>💰 {job.salary}</p>
      </div>

      <button onClick={handleApply} className="apply-btn">
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;
