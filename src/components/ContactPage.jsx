import Contact from "./Contact"

function ContactPage(){

    const processSubmit = (data) =>{
        const {name, email, message} = data;
        console.log("Successful", name, email, message);
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