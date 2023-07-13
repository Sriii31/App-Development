import React from 'react';
import Avatar from '@mui/material/Avatar';

const profile = () => {
return (
	// <div
	// style={{
	// 	display: 'flex',
	// 	justifyContent: 'Right',
	// 	alignItems: 'Right',
	// 	height: '100vh'
	// }}
	// >
    <div>
          <ul>
  <li><a class="active" href="/profile">Voter List</a></li>
  <li><a href="/CandidateList">Candidate List</a></li>
  <li><a href="/materials">Poll For Votting</a></li>
  <li><a href="/blogs">Parties List</a></li>
  <li><a href="/certification">Results</a></li>
  <li><a href="/logout">Logout</a></li>
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
	<h1>Voter List</h1>

  <p>Enadha agadhunu pakalam</p>
	</div>
);
};

export default profile;
