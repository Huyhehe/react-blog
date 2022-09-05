import { SignIn, SignUp } from "~/Pages/Authentication";
import Create from "~/Pages/Create";
import Home from "~/Pages/Home";
import SingleBlog from "~/Pages/SingleBlog";
import { UnAuthLayout, ProfileLayout } from "~/Layouts";
import Profile from "~/Pages/Profile";

//publicRoutes
const publicRoutes = [
  { path: "/signIn", component: SignIn, layout: UnAuthLayout },
  { path: "/signUp", component: SignUp, layout: UnAuthLayout },
];

//privateRoutes
const privateRoutes = [
  { path: "/profile", component: Profile, layout: ProfileLayout },
  { path: "/create", component: Create },
  { path: "/singleBlog/:id", component: SingleBlog },
  { path: "/", component: Home },
];

export { publicRoutes, privateRoutes };
