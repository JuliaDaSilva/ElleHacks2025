import React, {useState} from 'react'; // React for creating components, useState for managing state
import emailjs from 'emailjs-com'; // Import Email.js library
import './PartnerWithUs.css'; //Import the CSS file for styling

//Define the PartnerWithUs component
const PartnerWithUs = () =>{
    //useState hook to manage form data(name, email, message)
    const [formData, setFormData] = useState({
        name: '', //initial state for name
        email: '', //initial state for email
        message: '' //initial state for message input
    });

    //useState hook for displaying a success message after form submission
    const[successMessage, setSuccessMessage] = useState('');

    //Handle changes in the form inputs
    const handleChange = (e) =>{
        const{name, value} = e.target; //Destructure the name and value from the input field
        setFormData({...formData, [name]: value}); //Update the correspondingfield in formData state
    };

    //Hnadle form submission
    const handleSubmit = async (e) =>{
        e.preventDefault(); //Prevent default form submission behavior (reloading the page)

        // Send form data using Email.js
        try {
            // Send email using Email.js SDK's sendForm method
            const response = await emailjs.send(
                'service_yjb9epf', // Replace with your Email.js Service ID
                'template_p5s4ari', // Replace with your Email.js Template ID
                formData, // Pass the form data
                'jeFJ22V3t4qMjNHkx' // Replace with your Email.js User ID
            );

            console.log(response.status, response.text); // Logs the response status and text for debugging

            // Display the success message after submission
            setSuccessMessage("Thank you for reaching out! We'll get back to you soon.");

        } catch (error) {
            console.error('Error: ', error); // Logs any errors that occur during submission
        }

        // Reset form fields after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return(
        <section className = 'partner-with-us-section'>
            {/*Section Title*/}
            <h2 className='section-title'>Partner With Us</h2>

            {/* Subtitle*/}
            <p className='section-subtitle'>We'd love to hear from you!</p>
            <form onSubmit={handleSubmit} className='partner-form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text'
                        id='name' 
                        name='name' 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        id='message'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type='submit' className='submit-button'>Send Message</button>
            </form>

            {successMessage && <p className='success-message'>{successMessage}</p>}
        </section>
    );
};

export default PartnerWithUs;