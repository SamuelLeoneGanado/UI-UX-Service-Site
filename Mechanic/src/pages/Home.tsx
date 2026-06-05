import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import Battery from "../assets/Battery.png";
import ClipBoard from "../assets/ClipBoard.png";
import Engine from "../assets/Engine.png";
import Oil from "../assets/Oil.png";
import Search from "../assets/Search.png";
import Suspension from "../assets/Suspension.png";
import Tire from "../assets/Tire.png";

const Home = () => {
  const navigate = useNavigate();

  // The function that handles the routing and passes the state
  const handleServiceClick = (serviceTitle: string) => {
    navigate("/ScheduleService", {
      state: { preselectedService: serviceTitle },
    });
  };

  return (
    <section className="Background">
      <div className="screen">
        <Navbar />
        <div className="HomeLayout">
          <div>
            <h1>Ottawa Mechanic Services</h1>
            <h2>Get Premium service when you need it</h2>
          </div>
          <div className="HomeIconLayout">
            <div></div>
            <div className="IconSpacing">
              <HomeCard
                image={Search}
                title="Inspection"
                onClick={() => handleServiceClick("Inspection")}
              />
              <HomeCard
                image={Engine}
                title="Engine Repair"
                onClick={() => handleServiceClick("Engine Repair")}
              />
            </div>
            <div className="IconSpacing">
              <HomeCard
                image={Battery}
                title="Battery Replacement"
                onClick={() => handleServiceClick("Battery Replacement")}
              />
              <HomeCard
                image={Tire}
                title="Tires"
                onClick={() => handleServiceClick("Tires")}
              />
              <HomeCard
                image={Oil}
                title="Oil Change"
                onClick={() => handleServiceClick("Oil Change")}
              />
            </div>
            <div className="IconSpacing">
              <HomeCard
                image={ClipBoard}
                title="Maintanence"
                onClick={() => handleServiceClick("Maintenance")} // Fixed spelling for the router state
              />
              <HomeCard
                image={Suspension}
                title="Steering & Suspension"
                onClick={() => handleServiceClick("Steering & Suspension")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
