// import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "~/components/Navbar";

const DefaultLayout = ({ children }) => {
  // const [isAuthenticated, setAuthenticated] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user == null) {
      navigate("/signIn");
    }
  });

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

  // if (!isAuthenticated) {
  //   links = links.filter((link) => link.path !== "/create");
  // }
  return (
    <>
      <Navbar title={title} links={links} />
      <div className="wrapper">{children}</div>
    </>
  );
};

export default DefaultLayout;
