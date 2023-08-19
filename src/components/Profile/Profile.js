import React from 'react';
import './Profile.css';
import Skills from './Skills';
import Projects from './Projects/Projects.js';
import Contact from './Contact/Contact.js';

// import { Follow } from 'react-twitter-widgets';
// import DonateButton from '../PayPalDonateButton/PayPalDonateButton.js';
import profileImage1 from './images/william_mollenkopf1.jpg';
import profileImage2 from './images/william_mollenkopf2.jpg';

const min = 1;
const max = 2;
const rand = min + Math.round(Math.random())*(max-min);

const Profile = ({backgroundClass="background-snowwhite"}) => {
	return (
		<div className={backgroundClass}>
			<div id="profile" className="profileContainer container">
				<h2>About Me</h2>
				<blockquote className="blockquote lead" >
					<p className="mb-0">&ldquo;Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.&rdquo;</p>
					<footer className="blockquote-footer">Patrick McKenzie</footer>
				</blockquote>
				<hr />
				<Contact />
				<div className="row">
					<div className="col-md-4">
						<h3 className="text-center">Introduction</h3>
						<p>Hello! I'm a dedicated Developer and Systems Administrator with years of experience building websites and applications. I'm passionate about continuous learning through practice and online courses.</p>
					</div>
					<div className="col-md-4 text-center">
						<img className="profileImage" src={(rand>1)?profileImage2:profileImage1} alt="William Mollenkopf" />
					</div>
					<div className="col-md-4">
					<h3 className="text-center">Hobbies</h3>
					<p>My hobbies include playing video games, learning a foreign language, dabbling in game development, traveling around the world with my wife and reading fictional and educational books.</p>
					</div>
				</div>
				
				{/* <hr className="hr-mini" /> */}
				<Skills />
				<hr className="hr-mini" />
				<Projects />
			</div>
		</div>
	);
};

export default Profile;