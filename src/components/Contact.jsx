import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // Full form validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  // Handle input change with live validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Live field validation
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === 'name' && value.trim() !== '') {
        delete newErrors.name;
      }

      if (name === 'email') {
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = 'Email is invalid';
        } else {
          delete newErrors.email;
        }
      }

      if (name === 'subject' && value.trim() !== '') {
        delete newErrors.subject;
      }

      if (name === 'message') {
        if (!value.trim()) {
          newErrors.message = 'Message is required';
        } else if (value.length >= 10) {
          delete newErrors.message;
        }
      }

      return newErrors;
    });
  };

  // On form submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formErrors = validate();
  //   setErrors(formErrors);

  //   if (Object.keys(formErrors).length === 0) {
  //     alert('From data submitted successfully!');
  //     // TODO: Replace this with actual send to Node.js server

  //     setFormData({ name: '', email: '', subject: '', message: '' });
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const res = await fetch("http://localhost:5000/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          alert("✅ Message sent to your email!");
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          alert("❌ Failed to send message.");
        }
      } catch (err) {
        console.error("Send error:", err);
        alert("❌ Server error. Try again later.");
      }
    }
  };


  return (
    <section className="py-5" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input
              type="text"
              className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
            />
            {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
