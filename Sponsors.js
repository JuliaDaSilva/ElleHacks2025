import React, {useState} from 'react';  // React for creating components, useState for managing state
import emailjs from 'emailjs-com';      // Import Email.js library
import './Sponsors.css';

const Sponsors = () => {
  // useState hook to manage form data(name, email, message)
  const [formData, setFormData] = useState({
      name: '',   // initial state for name
      email: '',  // initial state for email
      message: '' // initial state for message input
  });

  // useState hook for displaying a success message after form submission
  const[successMessage, setSuccessMessage] = useState('');

  // Handle changes in the form inputs
  const handleChange = (e) => {
      const{name, value} = e.target;              // Destructure the name and value from the input field
      setFormData({...formData, [name]: value});  // Update the correspondingfield in formData state
  };

  // Handle form submission
  const handleSubmit = async (e) =>{
      e.preventDefault(); // Prevent default form submission behavior (reloading the page)

      // Send form data using Email.js
      try {
          // Send email using Email.js SDK's sendForm method
          const response = await emailjs.send(
              'service_yjb9epf',  // Replace with your Email.js Service ID
              'template_p5s4ari', // Replace with your Email.js Template ID
              formData,           // Pass the form data
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

    return (
        <div className='container'>
            {/* Section Title */}
            <h2 className='section-title'>Interested in Sponsoring?</h2>

            {/* Subtitle */}
            <p className='section-subtitle'>Join us in shaping a future of diversity in technology!</p>
            
            <section className = 'partner-with-us-section'>                
                {/* Form */}
                <form onSubmit={handleSubmit} className='partner-form'>
                    <div className="form-row">
                        {/* Name */}
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input 
                                type='text'
                                id='name' 
                                name='name' 
                                value={formData.name} 
                                onChange={handleChange}
                                placeholder='Johnny Appleseed'
                                required
                            />
                        </div>
                        {/* Email */}
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                id='email'
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='apples123@email.com'
                                required
                            />
                        </div>
                    </div>
                    {/* Message */}
                    <div className='form-group message-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            id='message'
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Your message to us...'
                            required
                        />
                    </div>
                </form>
            </section>
            
            <button type='submit' className='submit-button'>Become a Sponsor</button>
            {/* Success Message */}
            {successMessage && <p className='success-message'>{successMessage}</p>}
        </div>
    );
};

export default Sponsors;