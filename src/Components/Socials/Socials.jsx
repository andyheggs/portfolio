import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Socials.css';

// Handler function to open LinkedIn profile in a new tab
const handleLinkedInClick = () => {
  window.open('https://www.linkedin.com/in/andrew-heggs', '_blank');
};

// Handler function to open GitHub profile in a new tab
const handleGitHubClick = () => {
  window.open('https://github.com/andyheggs', '_blank');
};

// SocialIcons component renders LinkedIn and GitHub icons with click events
const SocialIcons = () => {
  return (
    <div className="social-icons">
      {/* LinkedIn icon with click handler and styling */}
      <LinkedInIcon onClick={handleLinkedInClick} className="linkedIn-icon"/>
      {/* GitHub icon with click handler and styling */}
      <GitHubIcon onClick={handleGitHubClick} className="github-icon"/>
    </div>
  );
};

export default SocialIcons;
