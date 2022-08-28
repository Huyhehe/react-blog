import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "~/components/Navbar";
import { setUser } from "~/redux/userSlice";

const DefaultLayout = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const URL = `${process.env.REACT_APP_API_URL}/auth/checkToken`;
  const logoutURL = `${process.env.REACT_APP_API_URL}/auth/logout`;

  useEffect(() => {
    if (user == null) {
      navigate("/signIn");
    } else {
      setTimeout(async () => {
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
      });
    }
  });

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
    <div className="px-[15%] relative">
      <Navbar title={title} links={links} logout={logout} />
      <div className="wrapper">{children}</div>
      {/* {loading && (
        <div className="loading-demo absolute top-0 left-0 w-full h-full">
          <div className="loading-circle w-[5rem] aspect-square border-[10px] border-t-cyan-400 rounded-full animate-spin"></div>
        </div>
      )} */}
    </div>
  );
};

export default DefaultLayout;
