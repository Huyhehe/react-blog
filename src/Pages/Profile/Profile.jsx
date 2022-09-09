import { MdKeyboardArrowUp } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user?.user);
  const links = [
    {
      title: "Information",
      direction: "/profile/info",
    },
    {
      title: "My blogs",
      direction: "myBlogs",
    },
  ];
  const baseClassNameForNavbar = "text-[1.75rem] font-medium";
  const navbarClassNames = {
    active: `underline text-cyan-400 ${baseClassNameForNavbar}`,
    unActive: `${baseClassNameForNavbar}`,
  };
  const dropDownItems = [
    {
      title: "Home",
      icon: <AiFillHome />,
      func: () => {
        navigate("/");
      },
    },
    {
      title: "Log out",
      icon: <FiLogOut />,
    },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header flex justify-between mb-[10rem]">
        <div className="profile-header__bgBar h-[90px] w-full bg-black relative px-[5rem] flex items-end gap-4">
          <div className="profile-header__avatar relative top-[100%] w-[170px] rounded-full aspect-square bg-slate-100"></div>
          <div className="text-white">
            <span className="text-[1.25rem]">{user?.name}</span>
          </div>
          <div className="profile-header__toolbox ml-auto">
            <div className="group flex items-center text-white relative">
              <span className="text-[1.5em]">{user?.userName}</span>
              <div className="group-hover:rotate-180 transition-all duration-300">
                <MdKeyboardArrowUp size={"1.5em"} />
              </div>
              <div className="absolute shadow-md w-[120%] -z-[1] opacity-0 bottom-0 left-0 text-black flex flex-col transition-all duration-300 group-hover:translate-y-[110%] group-hover:z-0 group-hover:opacity-100 text-[1.25rem]">
                {dropDownItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex gap-2 items-center cursor-pointer px-2 py-2 hover:bg-slate-200 transition-all duration-300"
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
      </div>
      <div className="profile-navbar flex gap-[1rem] px-[5rem]">
        {links.map((link, index) => {
          return (
            <div key={index} className="cursor-pointer">
              <NavLink
                to={link.direction}
                className={({ isActive }) =>
                  isActive ? navbarClassNames.active : navbarClassNames.unActive
                }
              >
                {link.title}
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="px-[5rem] mt-[4em]">
        <Outlet context={user} />
      </div>
    </div>
  );
};

export default Profile;
