import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Socials.css';

const handleLinkedInClick = () => {
  window.open('https://www.linkedin.com/in/andrew-heggs', '_blank');
};

const handleGitHubClick = () => {
  window.open('https://github.com/andyheggs', '_blank');
};

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <LinkedInIcon onClick={handleLinkedInClick} className="linkedIn-icon"/>
      <GitHubIcon onClick={handleGitHubClick} className="github-icon"/>
    </div>
  );
};

export default SocialIcons;
