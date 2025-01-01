import React from "react";
import Navbar from "./Shared/NavBar";
import Footer from "./Shared/Footer";
import profileImage from "../../assets/rezaul_karim.jpg";

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="mx-4 dark:text-gray-100 text-gray-800 my-8">
                <div className="">
                    {/* Header */}
                    <div className="flex items-center mb-12">
                        <img
                            src={profileImage}
                            alt="Rezaul Karim"
                            className="w-32 h-32 rounded-full mr-8 border-2 border-gray-300 dark:border-gray-500"
                        />
                        <div className="text-left">
                            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Rezaul Karim</h1>
                            <p className="text-xl text-ternary-dark dark:text-gray-100 mt-4">
                                Ali Noor Real Estate, Mohammadpur, Dhaka, Bangladesh
                            </p>
                            <p className="text-xl text-gray-600 dark:text-gray-300">+8801739-697448</p>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                <a href="mailto:krezaul839@gmail.com" className="text-blue-500 hover:underline">
                                    krezaul839@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-left">Skills</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            React js, Javascript, Html, Css, Tailwind, Firebase, Bootstrap, Express js, MongoDB, Shopify, Wordpress.
                        </p>
                    </section>

                    {/* Job Experience Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-left">Job Experience</h2>
                        <div>
                            <p className="font-bold text-gray-800 dark:text-gray-200 text-lg">December 2022 - January 2024</p>
                            <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Zays Ltd., Jigatola, Dhaka - Website Manager
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-4 space-y-2">
                                <li>Customize website Client Side with Shopify and Wordpress CMS.</li>
                                <li>Create, Update and Format Website Products and Contents.</li>
                                <li>Manage website orders.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-left">Education</h2>
                        <div>
                            <p className="font-bold text-gray-800 dark:text-gray-200 text-lg">December 2019 - October 2024</p>
                            <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Tejgaon College, National University, Dhaka - BSc in Computer Science And Engineering
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                                I have completed a BSc in Computer Science and Engineering, completing 138 credit hours. My studies included a strong focus on programming (C, C++, OOP), software and system design, and web development. I also gained knowledge in areas like machine learning, deep learning, and artificial intelligence.
                            </p>
                        </div>
                    </section>

                    {/* Extracurricular Activities Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-left">
                            Extracurricular Activities
                        </h2>
                        <div>
                            <p className="font-bold text-gray-800 dark:text-gray-200 text-lg">April 2023 - September 2024</p>
                            <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Joint Development Secretary, Programming Club of Tejgaon College
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
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
