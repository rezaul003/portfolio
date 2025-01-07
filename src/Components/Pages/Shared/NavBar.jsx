import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navLinks = (
        <>
            <li role="menuitem" className="text-lg mx-2">
                <NavLink to="/projects">Projects</NavLink>
            </li>
            <li role="menuitem" className="text-lg mx-2">
                <NavLink to="/about">About Me</NavLink>
            </li>
            <li role="menuitem" className="text-lg mx-2">
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 px-4 py-2">
            <div className="navbar-start">
                <Link to="/" aria-label="Go to homepage">
                    <div className="h-10 sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
                        <span className="text-indigo-500">R</span><span>ezaul</span>
                    </div>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>

            <div className="navbar-end flex items-center">
                <div className="hidden lg:flex mx-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn bg-indigo-500 hover:bg-indigo-600 w-28 text-lg text-white"
                    >
                        Hire Me
                    </button>
                </div>

                <button
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                    aria-label="Toggle navigation menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"}
                        />
                    </svg>
                </button>

                {menuOpen && (
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-base-100 absolute right-4 top-12"
                    >
                        {navLinks}
                    </ul>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
                    <div className="p-6 rounded-lg shadow-lg w-full max-w-md bg-white">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Hire Me</h2>
                            <button
                                className="btn btn-ghost"
                                onClick={() => setIsModalOpen(false)}
                                aria-label="Close modal"
                            >
                                ✕
                            </button>
                        </div>
                        <form className="mt-4">
                            <div className="mb-4">
                                <label className="block text-lg mb-2" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg mb-2" htmlFor="email">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg mb-2" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    className="textarea textarea-bordered w-full"
                                    placeholder="Write your message"
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
