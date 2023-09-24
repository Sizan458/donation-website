import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";


const Home = () => {
    return (
        <div  >
            <div className="p-3"> 
            <Nav></Nav>
            </div>
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;