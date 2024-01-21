import { useState } from "react";
import '../styles/Contact.css'


function Contact(props){
    const [nameData, setNameData] = useState('');
    const [eMailData, setEmailData] = useState('');
    const [textData, setTextData] = useState('');
    const [validData, setValidData] = useState('');
    const [readyToSend, setReadyToSend] = useState('No');


    const submitOrNot = () =>{
        if(readyToSend !== 'Yes'){
            !nameData ? setValidData('name'):
            !eMailData ? setValidData('email'):
            setValidData('text')

        return
        }
        else{
            setValidData('')

            props.onSubmit({
                name: nameData,
                email: eMailData,
                message: textData
            }) 
            
            // zero();
        }    
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        // await validate();
        await submitOrNot();
    }

    const handleChange = async(e) => {

        !nameData||!eMailData||!textData ? setReadyToSend("No") : setReadyToSend("Yes");

        e.target.id === "Name" ? setNameData(e.target.value):
        e.target.id === "Email" ? setEmailData(e.target.value):
        setTextData(e.target.value);

        }
    
    return(
        <div>
            <h1>Contact Page</h1>
            <form action="" id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                <label htmlFor="Name">UserName</label>
                <input type="text" id="Name" onChange={handleChange}/>
                <label htmlFor="Email">Email Address</label>
                <input type="text" id="Email" onChange={handleChange}/>
                <label htmlFor="Message">Message</label>
                <textarea name="Message" id="Message" cols="60" rows="14" onChange={handleChange}></textarea>
                <button>Submit</button>
            </form>
            <p className={`"message" ${validData ==='name' ? 'inValid' : 'valid'}` }>Please enter a username</p>
            <p className={`"message" ${validData ==='email' ? 'inValid' : 'valid'}`}>Please enter valid email</p>
            <p className={`"message" ${validData ==='text' ? 'inValid' : 'valid'}`}>Please enter Text</p>
        </div>
    )
}

export default Contact;