import { useState } from "react";


function Contact(props){
    const [nameData, setNameData] = useState('');
    const [eMailData, setEmailData] = useState('');
    const [textData, setTextData] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

    props.onSubmit({
        name: nameData,
        email: eMailData,
        message: textData
    })
    }

    const handleChange = (e) => {
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
        </div>
    )
}

export default Contact;