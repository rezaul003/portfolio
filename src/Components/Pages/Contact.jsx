import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/NavBar";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID", // Replace with your service ID
                "YOUR_TEMPLATE_ID", // Replace with your template ID
                e.target, // The form element
                "YOUR_USER_ID" // Replace with your user ID
            )
            .then(
                (result) => {
                    setIsSubmitted(true);
                    alert("Message sent successfully!");
                },
                (error) => {
                    alert("Error sending message, please try again.");
                }
            );

        setFormData({ fullName: "", email: "", subject: "", message: "" });
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                    <h2 className="text-4xl font-bold text-black mb-6">Get in Touch</h2>
                    <p className="text-lg text-black mb-8">
                        Have questions or want to work together? Feel free to reach out by filling out the form below.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-lg shadow-md">
                        <div>
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-medium text-black mb-2"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                placeholder="Your full name"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-black mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                placeholder="Your email address"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-black mb-2"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                placeholder="Subject of your message"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-black mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                rows="5"
                                placeholder="Write your message here"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Send Message
                        </button>
                    </form>
                    {isSubmitted && (
                        <p className="text-green-500 mt-4 font-medium">Your message has been sent successfully!</p>
                    )}
                </div>

                {/* Detailed Address */}
                <div>
                    <h2 className="text-4xl font-bold text-black mb-6">Contact Details</h2>
                    <div className="space-y-6">
                        <div className="p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-black">Address</h3>
                            <p className="text-black">
                                Ali Noor Real Estate,<br />
                                Mohammadpur, Dhaka, Bangladesh
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-black">Phone</h3>
                            <p className="text-black">+8801739-697448</p>
                        </div>
                        <div className="p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-black">Email</h3>
                            <p className="text-black">
                                <a href="mailto:krezaul839@gmail.com" className="text-indigo-500 hover:underline">
                                    krezaul839@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
