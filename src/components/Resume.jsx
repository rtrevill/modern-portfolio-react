import List from './List';
import '../styles/Resume.css'


function Resume(){

    const skillsFront = ["Javascript", "CSS", "HTML", "JQuery", "responsive design", "React", "Bootstrap"]
    const skillsBack = ["MongoDB", "APIs", "Node", "Express", "MySQL, Sequelize", "Mongoose", "REST", "GraphQL"];



    return (
        <div className='resume-container'>
            <h2>Resume</h2>
            <p>Download my <a href="/FakeResume.pdf" download>resume</a></p>
            <h3>Front End Proficiencies</h3>
            <List skills={skillsFront} idName={"frontList"}/>
            <h3>Back End Proficiencies</h3>
            <List skills={skillsBack} idName={"backList"}/>
        </div>
    )
}

export default Resume;