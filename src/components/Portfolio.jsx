import Card from "./Project";
import samplePortfolio from "./portDetails";


function Portfolio(){

    const contentForPage = samplePortfolio.map((entry)=>{
        return(
            <Card 
            key={entry.name}
            name={entry.name}
            content={entry.details}
            />
        )
    })

    return(
        <div className="row">
            <div className="">
                {contentForPage}
            </div>
        </div>
    )
}

export default Portfolio;