const UnAuthLayout = ({ children }) => {
  return (
    <div className="px-[15%] relative">
      <h1 className="text-[2rem] font-black mt-[2rem]">React blogs</h1>
      <div className="flex justify-center pt-[10rem]">{children}</div>
    </div>
  );
};

export default UnAuthLayout;
