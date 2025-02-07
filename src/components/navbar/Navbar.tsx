import { NavLink, useLocation } from "react-router-dom";
import PatternNavbar from "../../assets/design-patterns/PatternNavbar";
import Logo from "../../assets/icons/Logo";

const navlinks = [
  {
    name: "Books",
    path: "/books",
    width: "127",
    height: "37",
    top: 6,
    left: 35,
  },
  {
    name: "Services",
    path: "/services",
    width: "127",
    height: "37",
    top: 6,
    left: 23,
  },
  {
    name: "Team members",
    path: "/team",
    width: "181",
    height: "53",
    top: 14,
    left: 20,
  },
  {
    name: "About us",
    path: "/about",
    width: "127",
    height: "37",
    top: 6,
    left: 23,
  },
  {
    name: "Contact",
    path: "/contact",
    width: "127",
    height: "37",
    top: 6,
    left: 26,
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div
      className={`px-[80px] py-[21px] flex justify-between items-center font-franie transition-all duration-200 ${
        location.pathname === "/services" ? "bg-green-50" : "bg-white"
      }`}
    >
      <NavLink to="/">
        <Logo />
      </NavLink>

      <ul className="flex gap-[64px]">
        {navlinks.map((link) => (
          <li key={link.path} className="relative">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `relative transition-all duration-300 ${
                  isActive
                    ? "text-green-500"
                    : "text-black hover:text-light-green"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span
                      className="absolute"
                      style={{
                        top: `-${link.top}px`,
                        left: `-${link.left}px`,
                      }}
                    >
                      <PatternNavbar width={link.width} height={link.height} />
                    </span>
                  )}
                  {link.name}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Order Button */}
      <button className="bg-green-600 px-[33.5px] py-3 rounded-[50px] text-white font-inter transition-all duration-300 hover:bg-[#0c7a40]">
        Order now
      </button>
    </div>
  );
};

export default Navbar;
