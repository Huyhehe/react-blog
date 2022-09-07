import { useOutletContext } from "react-router-dom";

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
  return (
    <div className="info-container mt-[4em]">
      <div className="basic-info border flex flex-col gap-y-[1em] px-[3em] py-[1rem]">
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
