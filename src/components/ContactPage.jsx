import Contact from "./Contact"

function ContactPage(){

    const processSubmit = (data) =>{
        console.log(data.name)
    }

    return(
        <div>
            <Contact 
                onSubmit={processSubmit}
                />
        </div>
    )
}

export default ContactPage