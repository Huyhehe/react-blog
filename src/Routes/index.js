import { SignIn, SignUp } from "~/Pages/Authentication";
import Create from "~/Pages/Create";
import Home from "~/Pages/Home";
import SingleBlog from "~/Pages/SingleBlog";
import { UnAuthLayout, ProfileLayout } from "~/Layouts";
import Profile from "~/Pages/Profile/Profile";
import Info from "~/Pages/Profile/Info";
import MyBlogs from "~/Pages/Profile/MyBlogs";

//publicRoutes
const publicRoutes = [
  { path: "/signIn", component: SignIn, layout: UnAuthLayout },
  { path: "/signUp", component: SignUp, layout: UnAuthLayout },
];

//privateRoutes
const privateRoutes = [
  {
    path: "/profile",
    component: Profile,
    layout: ProfileLayout,
    children: [
      { path: "info", component: Info, layout: ProfileLayout },
      { path: "myBlogs", component: MyBlogs, layout: ProfileLayout },
    ],
  },
  { path: "/create", component: Create },
  { path: "/singleBlog/:id", component: SingleBlog },
  { path: "/", component: Home },
];

export { publicRoutes, privateRoutes };
