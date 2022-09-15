import { useOutletContext } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const Info = () => {
  const user = useOutletContext();
  const basicInfoItems = [
    {
      label: "Name",
      value: user.name,
    },
    {
      label: "Email",
      value: user.email,
    },
  ];
  const handleEdit = () => {
    console.log("clicked");
  };
  return (
    <div className="info-container">
      <div className="basic-info border flex flex-col gap-y-[1em] px-[3em] py-[1rem]">
        <div
          className="absolute basic-info__editButton flex items-center gap-2 self-end cursor-pointer hover:text-cyan-400 transition-all duration-300"
          onClick={handleEdit}
        >
          <FiEdit />
          <span>Edit</span>
        </div>
        {basicInfoItems.map((item, index) => {
          return (
            <div key={index} className="flex gap-[1.5em] text-[1.25em]">
              <span className="font-bold">{item.label}</span>
              <span>{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
