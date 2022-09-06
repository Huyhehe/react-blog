import { MdKeyboardArrowUp } from "react-icons/md";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user?.user);
  const links = [
    {
      title: "Information",
      direction: "/profile/info",
    },
    {
      title: "My blogs",
      direction: "/profile/blogs",
    },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header flex justify-between mb-[10rem]">
        <div className="profile-header__bgBar h-[90px] w-full bg-black relative px-[5rem] flex items-end gap-4">
          <div className="profile-header__avatar relative top-[100%] w-[170px] rounded-full aspect-square bg-slate-100"></div>
          <div className="text-white">
            <span className="text-[1.25rem]">{user?.name}</span>
          </div>
          <div className="profile-header__toolbox ml-auto">
            <div className="group flex items-center text-white">
              <span className="text-[1.5em]">{user?.userName}</span>
              <div className="group-hover:rotate-180 transition-all duration-300">
                <MdKeyboardArrowUp size={"1.5em"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-navbar flex gap-[1rem] px-[5rem]">
        {links.map((link, index) => {
          return (
            <div key={index} className="cursor-pointer">
              <span className="text-[1.75rem] font-medium">{link.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
