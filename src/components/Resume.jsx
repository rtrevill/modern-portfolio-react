import List from './List';


function Resume(){

    const skillsFront = ["Javascript", "CSS", "HTML"]
    const skillsBack = ["MongoDB", "MySQL2", "React"];



    return (
        <div>
            <h2>Resume Page </h2>
            <h3>Front End Proficiencies</h3>
            <List skills={skillsFront} idName={"frontList"}/>
            <h3>Back End Proficiencies</h3>
            <List skills={skillsBack} idName={"backList"}/>
        </div>
    )
}

export default Resume;