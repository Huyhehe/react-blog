import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "~/redux/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const url = `${process.env.REACT_APP_API_URL}/auth/login`;
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target.querySelector("#userName").value;
    const password = e.target.querySelector("#password").value;
    try {
      const res = await axios.post(url, { userName, password });
      dispatch(setUser(res.data));
      console.log(document.cookie);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <>
      <div className="sign-in flex justify-center pt-[2rem]">
        <form
          className="w-[25em] px-[3rem] py-[5rem] shadow-md flex flex-col gap-[1.5rem] items-center"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div className="flex flex-col gap-[0.25rem] w-full">
            <label htmlFor="userName" className="font-bold">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              className="border-b-[2px] outline-none"
            />
          </div>
          <div className="flex flex-col gap-[0.25rem] w-full">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-b-[2px] outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-fit px-[1rem] py-[0.25rem] rounded-full border-[2px] border-black hover:bg-black hover:text-white transition-all"
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
