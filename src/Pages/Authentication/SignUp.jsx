import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const url = `${process.env.REACT_APP_API_URL}/auth/register`;
  const formItems = [
    {
      title: "Name",
      type: "text",
      for: "name",
    },
    {
      title: "User Name",
      type: "text",
      for: "userName",
    },
    {
      title: "Password",
      type: "password",
      for: "password",
    },
    {
      title: "Email",
      type: "mail",
      for: "email",
    },
  ];
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target.querySelector("#userName").value;
    const password = e.target.querySelector("#password").value;
    const name = e.target.querySelector("#name").value;
    const email = e.target.querySelector("#email").value;
    try {
      const res = await axios.post(url, { name, userName, password, email });
      console.log(res.data);
      navigate("/signIn");
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
          {formItems.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-[0.25rem] w-full">
                <label htmlFor={item.for} className="font-bold">
                  {item.title}
                </label>
                <input
                  type={item.type}
                  id={item.for}
                  className="border-b-[2px] outline-none"
                />
              </div>
            );
          })}
          {/* <div className="flex flex-col gap-[0.25rem] w-full">
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
          </div> */}
          <button
            type="submit"
            className="w-fit px-[1rem] py-[0.25rem] rounded-full border-[2px] border-black hover:bg-black hover:text-white transition-all"
          >
            Sign up
          </button>
          <div className="self-start flex gap-2">
            <span>Don't have account?</span>
            <button
              className="font-bold hover:underline"
              onClick={() => navigate("/signUp")}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
