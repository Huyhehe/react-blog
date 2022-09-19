import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "~/components/Navbar";
import { setUser } from "~/redux/userSlice";
import { MdKeyboardArrowUp } from "react-icons/md";

const DefaultLayout = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const URL = `${process.env.REACT_APP_API_URL}/auth/checkToken`;
  const logoutURL = `${process.env.REACT_APP_API_URL}/auth/logout`;

  const checkValidUserUsing = async () => {
    try {
      const res = await axios.post(
        URL,
        {},
        {
          headers: {
            authorized: `bearer ${user?.accessToken}`,
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      logout();
    }
  };

  useEffect(() => {
    if (user == null) {
      navigate("/signIn");
    } else {
      checkValidUserUsing();
      window.addEventListener("scroll", () => {
        const scrollTop = document.querySelector(".scroll-top");
        if (window.scrollY > 0) {
          scrollTop.classList.remove("translate-x-[20rem]");
        } else {
          scrollTop.classList.add("translate-x-[20rem]");
        }
      });
    }
  });

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const title = "React Blogs";
  let links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Create New",
      path: "/create",
    },
    {
      title: "About",
      path: "/about",
    },
  ];

  return (
    <div className="px-[15%]">
      <Navbar title={title} links={links} logout={logout} />
      <div className="wrapper">{children}</div>
      {/* {loading && (
        <div className="loading-demo absolute top-0 left-0 w-full h-full">
          <div className="loading-circle w-[5rem] aspect-square border-[10px] border-t-cyan-400 rounded-full animate-spin"></div>
        </div>
      )} */}
      <div
        onClick={handleScrollTop}
        className="scroll-top fixed bottom-[2rem] right-[2rem] bg-slate-200 rounded-full translate-x-[20rem] transition-all cursor-pointer"
      >
        <MdKeyboardArrowUp size={"3em"} />
      </div>
    </div>
  );
};

export default DefaultLayout;
