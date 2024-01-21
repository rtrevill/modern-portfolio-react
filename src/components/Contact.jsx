import { useState } from "react";
import '../styles/Contact.css'


function Contact(props){
    const [nameData, setNameData] = useState('');
    const [eMailData, setEmailData] = useState('');
    const [textData, setTextData] = useState('');
    const [validData, setValidData] = useState('');



    const handleSubmit = async(e) =>{
        e.preventDefault();

        const submitData = async() =>{
            setValidData("Submitted")

            props.onSubmit({
                name: nameData,
                email: eMailData,
                message: textData
            })

            setTimeout(
                function(){
                    setValidData('');
                },2500)

        }

        const emailcheck = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(eMailData);

        !nameData||!eMailData||!textData ? setValidData("unSubmitted") : 
        !emailcheck ? setValidData("badEmail"): submitData()
        
    }

    const handleChange = async(e) => {

        e.target.id === "Name" ? setNameData(e.target.value):
        e.target.id === "Email" ? setEmailData(e.target.value):
        setTextData(e.target.value);

        }

    const handleBlur = (e) =>{
        if (e.target.id&&!e.target.value){
            setValidData(`${e.target.id}`)
        }
    }

    
    return(
        <div>
            <h1>Contact Page</h1>
            <h3 className={`${validData === 'Submitted' ? 'inValid' : 'valid'}`}>Form submitted successfully</h3>
            <h3 className={`${validData === 'unSubmitted' ? 'inValid' : 'valid'}`}>Incomplete form data, please complete</h3>
            <h3 className={`${validData === 'badEmail' ? 'inValid' : 'valid'}`}>Not a valid email address</h3>
            <form action="" id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                <label htmlFor="Name">UserName</label>
                <input type="text" id="Name" className="inputs" onChange={handleChange}  onBlur={handleBlur}/>
                <label htmlFor="Email">Email Address</label>
                <input type="text" id="Email" className="inputs" onChange={handleChange} onBlur={handleBlur}/>
                <label htmlFor="Message">Message</label>
                <textarea name="Message" id="Message" className="inputs" cols="60" rows="14" onChange={handleChange} onBlur={handleBlur}></textarea>
                <button>Submit</button>
            </form>
            <p className={`"message" ${validData ==='Name' ? 'inValid' : 'valid'}` }>Please enter a username</p>
            <p className={`"message" ${validData ==='Email' ? 'inValid' : 'valid'}`}>Please enter valid email</p>
            <p className={`"message" ${validData ==='Message' ? 'inValid' : 'valid'}`}>Please enter Text</p>
        </div>
    )
}

export default Contact;