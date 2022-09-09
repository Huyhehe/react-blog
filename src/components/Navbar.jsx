import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
const Navbar = (props) => {
  const user = useSelector((state) => state.user?.user);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const url = `${process.env.REACT_APP_API_URL}/auth/logout`;

  const { title, links, logout } = props;

  const handleLogout = () => {
    logout();
  };

  const dropDownItems = [
    {
      title: "Profile",
      func: () => {
        navigate("/profile/info");
      },
      icon: <HiOutlineUserCircle />,
    },
    {
      title: "Log out",
      func: handleLogout,
      icon: <FiLogOut />,
    },
  ];

  return (
    <div className="relative flex justify-between py-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gray-300">
      <div className="text-3xl font-black">{title}</div>
      <div className="flex text-xl gap-4">
        {links.map((link, index) => (
          <div className="text-gray-500 hover:text-black" key={index}>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "black", fontWeight: "bold" } : undefined
              }
              to={link.path}
            >
              {link.title}
            </NavLink>
          </div>
        ))}
        <div className="group relative">
          <span>Hi, {user?.name}</span>
          <div className="drop-down z-10 hidden group-hover:flex flex-col absolute top-full left-0 w-full bg-white shadow-md">
            {dropDownItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-[0.25rem] hover:bg-slate-200 p-[0.5rem] cursor-pointer"
                  onClick={item.func}
                >
                  <span>{item.title}</span>
                  <div>{item.icon}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
