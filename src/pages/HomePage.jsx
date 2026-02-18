// Home Page
// Day 9 Practice - Sreejith Sreekumar

import { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import JobList from '../components/JobList';

function HomePage() {
  // Kerala Jobs Data
  const allJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions Kochi",
      experience: "2-3 years",
      salary: "₹45,000 - ₹60,000",
      location: "Kochi",
      type: "Full Time"
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Code Labs Trivandrum",
      experience: "3-5 years",
      salary: "₹50,000 - ₹70,000",
      location: "Trivandrum",
      type: "Full Time"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Studio Calicut",
      experience: "1-2 years",
      salary: "₹35,000 - ₹50,000",
      location: "Calicut",
      type: "Full Time"
    },
    {
      id: 4,
      title: "React Developer",
      company: "Web Masters Kochi",
      experience: "2-4 years",
      salary: "₹48,000 - ₹65,000",
      location: "Kochi",
      type: "Remote"
    },
    {
      id: 5,
      title: "Python Developer",
      company: "Data Tech Trivandrum",
      experience: "2-3 years",
      salary: "₹42,000 - ₹58,000",
      location: "Trivandrum",
      type: "Full Time"
    },
    {
      id: 6,
      title: "Full Stack Developer",
      company: "Digital Agency Thrissur",
      experience: "3-4 years",
      salary: "₹55,000 - ₹75,000",
      location: "Thrissur",
      type: "Full Time"
    }
  ];

  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  // Search function
  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredJobs(allJobs);
    } else {
      const filtered = allJobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  };

  return (
    <>
      <Navbar />
      
      <main className="main-content">
        <div className="hero-section">
          <h1>Find Your Dream Job in Kerala 🌴</h1>
          <p>Connecting talented professionals with top companies</p>
        </div>

        <div className="content-wrapper">
          <SearchBar onSearch={handleSearch} />
          <JobList jobs={filteredJobs} />
        </div>
      </main>

      <footer className="footer">
        <p>Job Portal Kerala © 2026</p>
        <p>Made by Sreejith Sreekumar - Day 9 Practice</p>
      </footer>
    </>
  );
}

export default HomePage;
