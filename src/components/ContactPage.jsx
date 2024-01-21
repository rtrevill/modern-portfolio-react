import Contact from "./Contact"

function ContactPage(){

    const processSubmit = (data) =>{
        const {name, email, message} = data;
        console.log(name, email, message);
    }

    return(
        <div>
            <Contact 
                submitOkay={'Okay for now'}
                onSubmit={processSubmit}
                />
        </div>
    )
}

export default ContactPage