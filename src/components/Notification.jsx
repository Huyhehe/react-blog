import { useSelector } from "react-redux";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const Notification = () => {
  const message = useSelector((state) => state.notification?.message);
  const isSuccessful = useSelector((state) => state.notification?.isSuccessful);
  const isShowUp = useSelector((state) => state.notification?.isShowUp);
  return (
    <div
      className={`min-h-[3rem] shadow-md py-[0.75rem] px-[2rem] w-[20rem] fixed right-0 top-5 transition-all duration-300 flex gap-2 items-center ${
        isShowUp ? "-translate-x-[2rem]" : "translate-x-full"
      } ${
        isSuccessful
          ? "text-green-500 border-r-green-500 border-r-[0.5rem]"
          : "text-red-500 border-r-red-500 border-r-[0.5rem]"
      }`}
    >
      {isSuccessful ? <AiOutlineCheckCircle /> : <AiOutlineCloseCircle />}
      <span>{message}</span>
    </div>
  );
};

export default Notification;
