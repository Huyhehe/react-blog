import axios from "axios";
import { useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FiEdit, FiLogOut } from "react-icons/fi";
import { IoMdDoneAll } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { setUser } from "~/redux/userSlice";

const Profile = () => {
  const navigate = useNavigate();
  const filePicker = useRef();

  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  const [previewSource, setPreviewSource] = useState("");
  const [isEditing, setEditing] = useState(false);
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
  const logoutURL = `${process.env.REACT_APP_API_URL}/auth/logout`;
  const uploadLink = `${process.env.REACT_APP_API_URL}/users/uploadImage`;

  const logout = async () => {
    try {
      const res = await axios.post(logoutURL);
      console.log(res);
      dispatch(setUser(null));
      navigate("/signIn");
    } catch (error) {
      console.log(error);
    }
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
      func: logout,
    },
  ];
  const handleEditAvatar = () => {
    if (filePicker.current.files && filePicker.current.files[0]) {
      previewAvatar(filePicker.current.files[0]);
      setEditing(true);
    }
  };
  const previewAvatar = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      console.log(reader.result);
    };
  };

  const handleSubmitAvatar = async () => {
    try {
      const res = await axios.post(uploadLink, previewSource, {
        headers: {
          authorized: `bearer ${user.accessToken}`,
        },
      });
      console.log(res);
      console.log(typeof previewSource);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header flex justify-between mb-[10rem]">
        <div className="profile-header__bgBar h-[90px] w-full bg-black relative px-[5rem] flex items-end gap-4">
          <div className="profile-header__avatar relative top-[100%] w-[170px] rounded-full aspect-square bg-slate-100">
            <img
              src={previewSource}
              alt="avatar"
              className="w-full h-full rounded-full"
            />
            {isEditing ? (
              <div
                className="avatar-editButton absolute bottom-0 right-0 cursor-pointer hover:text-cyan-400"
                onClick={handleSubmitAvatar}
              >
                <IoMdDoneAll size={"1.5em"} />
              </div>
            ) : (
              <div
                className="avatar-editButton absolute bottom-0 right-0 cursor-pointer hover:text-cyan-400"
                onClick={() => {
                  filePicker.current.click();
                }}
              >
                <FiEdit size={"1.5em"} />
              </div>
            )}
            <input
              type="file"
              className="hidden"
              ref={filePicker}
              onChange={handleEditAvatar}
            />
          </div>
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
