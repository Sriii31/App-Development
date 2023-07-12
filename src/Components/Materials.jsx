import React from 'react';
import "./Dashboard.css";
import Avatar from '@mui/material/Avatar';

const Materials = () => {
return (
    <div>
  <ul>
  <li><a class="active" href="/profile">Voter List</a></li>
  <li><a href="/CandidateList">Candidate List</a></li>
  <li><a href="/materials">Poll For Votting</a></li>
  <li><a href="/blogs">Parties List</a></li>
  <li><a href="/certification">Results</a></li>
  <li><a href="/">Logout</a></li>
  <div className="doubt">
  <li>
  <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 47, height: 47 }}
      />
  </li>
  </div>

</ul>
  
	<h1>Poll For Votting</h1>
	</div>
);
};

export default Materials;