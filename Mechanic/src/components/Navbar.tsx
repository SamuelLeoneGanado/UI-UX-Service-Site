import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/Home">
          <a className="OMS">OMS</a>
        </Link>
        <p></p>
        <Link to="/Schedule">
          <a>See Our Schedule</a>
        </Link>
        <Link to="/About">
          <a>About Us</a>
        </Link>
        <Link to="/Locations">
          <a>Our Locations</a>
        </Link>
        <Link to="/ScheduleService">
          <button>Book Now</button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
