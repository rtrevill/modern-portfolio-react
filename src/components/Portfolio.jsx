import Project from "./Project";
import samplePortfolio from "./portDetails";
import '../styles/Portfolio.css'


function Portfolio(){

    const contentForPage = samplePortfolio.map((entry)=>{
        return(
            <Project 
            key={entry.name}
            name={entry.name}
            image={entry.image}
            content={entry.details}
            gitLink={entry.GitHubLink}
            deployLink={entry.deployLink}
            />
        )
    })

    return(
        <div className="row">
            <div className="container-for-cards">
                {contentForPage}
            </div>
        </div>
    )
}

export default Portfolio;