import { useState } from "react";


function Contact(props){
    const [nameData, setNameData] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();

    props.onSubmit({
        name: nameData
    })
    }

    const handleChange = (e) => {
        setNameData(e.target.value);
    }
    return(
        <div>
            <h1>Contact Page</h1>
            <form action="" id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                <label htmlFor="Name">UserName</label>
                <input type="text" id="Name" onChange={handleChange}/>
                <label htmlFor="Email">Email Address</label>
                <input type="text" id="Email"/>
                <label htmlFor="Message">Message</label>
                <textarea name="Message" id="Message" cols="60" rows="14"></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact;