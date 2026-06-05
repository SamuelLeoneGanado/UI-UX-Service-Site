import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a className="OMS" href="/Home">
          OMS
        </a>
        <p></p>
        <a href="/Schedule">See Our Schedule</a>
        <a href="/About">About Us</a>
        <a href="/Locations">Our Locations</a>
        <Link to="/ScheduleService">
          <button>Book Now</button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
