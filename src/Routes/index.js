import { SignIn, SignUp } from "~/Pages/Authentication";
import Create from "~/Pages/Create";
import Home from "~/Pages/Home";
import SingleBlog from "~/Pages/SingleBlog";
import { UnAuthLayout } from "~/Layouts";

//publicRoutes
const publicRoutes = [
  { path: "/signIn", component: SignIn, layout: UnAuthLayout },
  { path: "/signUp", component: SignUp, layout: UnAuthLayout },
];

//privateRoutes
const privateRoutes = [
  { path: "/create", component: Create },
  { path: "/singleBlog/:id", component: SingleBlog },
  { path: "/", component: Home },
];

export { publicRoutes, privateRoutes };
