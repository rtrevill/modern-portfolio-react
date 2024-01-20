import Card from "./Project";
import samplePortfolio from "./portDetails";


function Portfolio(){

    const contentForPage = samplePortfolio.map((entry)=>{
        return(
            <Card 
            key={entry.name}
            name={entry.name}
            content={entry.content}/>
        )
    })

    return(
        <div className="">
            This is a portfolio page
            {contentForPage}
        </div>
    )
}

export default Portfolio;