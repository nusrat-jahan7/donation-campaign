import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png"

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            textDecorationLine: isActive ? "underline" : "none"
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/donation"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            textDecorationLine: isActive ? "underline" : "none"
          })}
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            textDecorationLine: isActive ? "underline" : "none"
          })}
        >
          Statistics
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="md:flex md:items-center md:justify-between container mx-auto">
      <div className="flex justify-center items-center my-5 ">
        <img src={logo} alt="" />
      </div>
      <div className="flex list-none gap-10 justify-center font-semibold">{links}</div>
    </div>
  );
};

export default Header;
