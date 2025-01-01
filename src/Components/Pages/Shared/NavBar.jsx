import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });
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

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="navbar bg-base-100 px-4 py-2">
            <div className="navbar-start">
                <Link to="/" aria-label="Go to homepage">
                    <div className="h-10 sm:text-xl md:text-2xl lg:text-4xl font-semibold">
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
                        className="btn bg-indigo-500 hover:bg-indigo-600 w-28 text-lg text-white dark:text-white"
                    >
                        Hire Me
                    </button>
                </div>

                <button
                    className="btn btn-ghost btn-circle"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                >
                    {theme === "light" ? (
                        <svg
                            className="swap-on h-6 w-6 md:h-10 md:w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    ) : (
                        <svg
                            className="swap-off h-6 w-6 md:h-10 md:w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                    )}
                </button>

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
                    <div className={`p-6 rounded-lg shadow-lg w-full max-w-md ${theme === "light" ? "bg-white" : "bg-gray-800 text-white"}`}>
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
