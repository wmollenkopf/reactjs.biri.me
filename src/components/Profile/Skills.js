import React from 'react';

const Skills = () => {
    return (
	<div>
		<h3 className="text-center">Skills</h3>
		<div className="row">
			<div className="col-md-6 text-right border-right ">
				<h4 className="">LANGUAGES</h4>
				<span className="skillsubtitle">Proficient:</span>
				<p className="skillitem-push-right text-right">PHP, JavaScript, Python, CSS, HTML, XML, SQL, Oracle PL/SQL</p>
				<span className="skillsubtitle">Basic: </span>
				<p className="skillitem-push-right text-right">SASS/SCSS, .NET, VB, C#, PostgresSQL, C/C++, Fortran, Ruby, Web3</p>
				<h4>FRAMEWORKS / LIBRARIES</h4>
				<p className="skillitem-push-right text-right">jQuery, Bootstrap, ReactJS, Pandas, Numpy, TensorFlow, Truffle</p>
				{/* <h4>Operating Systems</h4>
				<p className="skillitem-push-right text-right">Windows, Mac, OpenVMS, ESXi, Ubuntu, Red Hat, Oracle Red Hat</p> */}
			</div>
			<div className="col-md-6 border-left ">
				<h4 className="">SPOKEN & WRITTEN</h4>
					<span className="skillsubtitle">Native fluency:</span>
						<p className="skillitem-push-left text-left">English</p>
					<span className="skillsubtitle">Basic proficiency:</span>
						<p className="skillitem-push-left text-left">Japanese, Indonesian</p>
				<h4 className="">SOFTWARE / VERSION CONTROL</h4>
					<p className="skillitem-push-left text-left">Terminal, Git, SVN, Visual SourceSafe</p>
				<h4 className="">IDE'S / TEXT EDITORS</h4>
					<p className="skillitem-push-left text-left">Visual Studio Code, Sublime Text, Notepad++</p>
			</div>
		</div>
    </div>);
}

export default Skills;