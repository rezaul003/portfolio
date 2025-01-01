import React from "react";
import Navbar from "./Shared/NavBar";
import Footer from "./Shared/Footer";
import profileImage from "../../assets/rezaul_karim.jpg";

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="mx-4 text-black my-8">
                <div className="">
                    {/* Header */}
                    <div className="flex items-center mb-12">
                        <img
                            src={profileImage}
                            alt="Rezaul Karim"
                            className="w-32 h-32 rounded-full mr-8 border-2 border-gray-300"
                        />
                        <div className="text-left">
                            <h1 className="text-4xl font-bold">Rezaul Karim</h1>
                            <p className="text-xl mt-4">
                                Ali Noor Real Estate, Mohammadpur, Dhaka, Bangladesh
                            </p>
                            <p className="text-xl">+8801739-697448</p>
                            <p className="text-xl">
                                <a href="mailto:krezaul839@gmail.com" className="text-blue-500 hover:underline">
                                    krezaul839@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-left">Skills</h2>
                        <p className="text-lg leading-relaxed">
                            React js, Javascript, Html, Css, Tailwind, Firebase, Bootstrap, Express js, MongoDB, Shopify, Wordpress.
                        </p>
                    </section>

                    {/* Job Experience Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-left">Job Experience</h2>
                        <div>
                            <p className="font-bold text-lg">December 2022 - January 2024</p>
                            <p className="text-xl font-semibold">
                                Zays Ltd., Jigatola, Dhaka - Website Manager
                            </p>
                            <ul className="list-disc list-inside mt-4 space-y-2">
                                <li>Customize website Client Side with Shopify and Wordpress CMS.</li>
                                <li>Create, Update and Format Website Products and Contents.</li>
                                <li>Manage website orders.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-left">Education</h2>
                        <div>
                            <p className="font-bold text-lg">December 2019 - October 2024</p>
                            <p className="text-xl font-semibold">
                                Tejgaon College, National University, Dhaka - BSc in Computer Science And Engineering
                            </p>
                            <p className="text-lg mt-4 leading-relaxed">
                                I have completed a BSc in Computer Science and Engineering, completing 138 credit hours. My studies included a strong focus on programming (C, C++, OOP), software and system design, and web development. I also gained knowledge in areas like machine learning, deep learning, and artificial intelligence.
                            </p>
                        </div>
                    </section>

                    {/* Extracurricular Activities Section */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-left">
                            Extracurricular Activities
                        </h2>
                        <div>
                            <p className="font-bold text-lg">April 2023 - September 2024</p>
                            <p className="text-xl font-semibold">
                                Joint Development Secretary, Programming Club of Tejgaon College
                            </p>
                            <p className="text-lg mt-4 leading-relaxed">
                                I served as the Joint Development Secretary of the Programming Club at Tejgaon College, where I oversaw the web development sector, managing projects and guiding junior members in web development initiatives.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
