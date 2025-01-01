import HomeFeaturedProjects from "./HomeFeaturedProjects";
import Hero from "./HomeHero";
import Footer from "./Shared/Footer";
import NavBar from "./Shared/NavBar";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>

            <Hero></Hero>
            <HomeFeaturedProjects></HomeFeaturedProjects>

            <Footer></Footer>
        </div>
    );
};

export default Home;