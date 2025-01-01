import { useState, useEffect } from 'react'; 
import heroImage from '../../assets/developer.svg';
import heroImageDark from '../../assets/developer-dark.svg';
import resume from '../../assets/Resume.pdf'

const Hero = () => {
    const [theme, setTheme] = useState('light'); // State to track the theme

    // Set the animation class when component mounts
    useEffect(() => {
        // Get the current theme from localStorage or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

    // Change theme
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <section className="hero bg-base-100 py-16 lg:py-24">
            <div className="container mx-auto flex flex-wrap px-4 items-center">
                {/* Text Section */}
                <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
                    {/* Heading Animation */}
                    <h1
                        className="text-xl sm:text-3xl font-bold mb-4" // Further reduced font size
                        style={{
                            display: 'inline-block',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            width: '0',
                            animation: 'typing 2s steps(20) 1s forwards',
                            fontFamily: "'Courier New', Courier, monospace",
                            letterSpacing: '-2px', // Further reduce letter spacing
                        }}
                    >
                        Hi, I am Rezaul Karim
                    </h1>

                    {/* Paragraph Animation */}
                    <p
                        className="text-lg sm:text-xl mb-6"
                        style={{
                            display: 'inline-block',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            width: '0',
                            animation: 'typing2 3s steps(30) 4s forwards', // Delayed animation for paragraph
                            fontFamily: "'Courier New', Courier, monospace",
                        }}
                    >
                        A Frontend Web Developer.
                    </p>

                    {/* Download CV Button */}
                    <div className="mt-4 relative z-10">
                        <a
                            href={resume}
                            download
                            className="btn bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-md"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-2/3 flex justify-center md:justify-end">
                    <img
                        src={theme === 'dark' ? heroImageDark : heroImage} // Conditionally render the image based on theme
                        alt="Hero Image"
                        className="w-80 h-auto md:w-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Inline CSS Animations */}
            <style jsx>{`
                /* Typing Animation for the Heading */
                @keyframes typing {
                    0% {
                        width: 0;
                    }
                    100% {
                        width: 100%;
                    }
                }

                /* Typing Animation for the Paragraph */
                @keyframes typing2 {
                    0% {
                        width: 0;
                    }
                    100% {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
