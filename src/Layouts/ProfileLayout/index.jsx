import { MdKeyboardArrowUp } from "react-icons/md";

const ProfileLayout = ({ children }) => {
  return (
    <div>
      <div className="profile-header flex justify-between">
        <div className="profile-header__bgBar h-[90px] w-full bg-black relative px-[4rem] flex justify-end items-end">
          <div className="profile-header__avatar absolute top-0 left-[4rem] w-[170px] rounded-full aspect-square bg-slate-100"></div>
          <div className="profile-header__toolbox">
            <div className="group flex items-center text-white">
              <span className="text-[1.5em]">Name</span>
              <div className="group-hover:rotate-180 transition-all duration-300">
                <MdKeyboardArrowUp size={"1.5em"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ProfileLayout;
