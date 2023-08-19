import React from 'react';
import biriMeImage from './images/biri.me.png';
import enspectorproImage from './images/enspectorpro.com.png';
import blogBiriMeImage from './images/blog.biri.me.png';
import scpFsecUcfEduImage from './images/scp.fsec.ucf.edu.png';
import comingSoonImage from './images/coming-soon.jpg';
import { Modal,Button} from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
    return (
	<div>
		<h3 className="text-center">Projects</h3>
		<div className="row">
			<div className="col-md-4">
				<h4 className="text-center">Personal</h4>
				<a className="site-url" href={"https://www.biri.me"} target="_blank" rel="noopener noreferrer">
					<img className="site-image image-with-tooltip" src={biriMeImage} alt={"biri.me (this site)"} data-tooltip={"biri.me (this site)"} />
				</a>
				<a className="site-url" href={"https://blog.biri.me"} target="_blank" rel="noopener noreferrer">
					<img className="site-image" src={blogBiriMeImage} alt={"blog.biri.me"} />
				</a>
			</div>
			<div className="col-md-4">
				<h4 className="text-center">Professional</h4>
				<a className="site-url" href={"https://www.enspectorpro.com"} target="_blank" rel="noopener noreferrer">
					<img className="site-image" src={enspectorproImage} alt={"EnspectorPro"} />
				</a>
				<a className="site-url" href={"https://blog.biri.me"} target="_blank" rel="noopener noreferrer">
					<img className="site-image" src={scpFsecUcfEduImage} alt={"Solar Certification Portal"} />
				</a>
			</div>
			<div className="col-md-4">
				<h4 className="text-center">Academic</h4>
				<img className="site-image" src={comingSoonImage} alt={"Solar Certification Portal"} />
				<img className="site-image" src={comingSoonImage} alt={"Solar Certification Portal"} />
			</div>
		</div>
    </div>);
}

export default Projects;