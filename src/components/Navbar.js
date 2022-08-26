import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "~/redux/userSlice";
// import { useState } from "react";
const Navbar = (props) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = `${process.env.REACT_APP_API_URL}/auth/logout`;

  const { title, links } = props;

  const handleLogout = async () => {
    try {
      const res = await axios.post(url);
      console.log(res);
      dispatch(setUser(null));
      navigate("/signIn");
    } catch (error) {
      console.log(error);
    }
  };

  const dropDownItems = [
    {
      title: "Profile",
    },
    {
      title: "Log out",
      func: handleLogout,
    },
  ];

  return (
    <div className="relative flex justify-between py-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gray-300">
      <div className="text-3xl font-bold">{title}</div>
      <div className="flex text-xl gap-4">
        {links.map((link, index) => (
          <div className="text-gray-500 hover:text-black" key={index}>
            <Link to={link.path}>{link.title}</Link>
          </div>
        ))}
        <div className="group relative">
          <span>Hi, {user.name}</span>
          <div className="drop-down z-10 hidden group-hover:flex flex-col absolute top-full left-0 w-full bg-white">
            {dropDownItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="hover:bg-slate-200 p-[0.5rem] cursor-pointer"
                  onClick={item.func}
                >
                  <span>{item.title}</span>
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
