const UnAuthLayout = ({ children }) => {
  return (
    <>
      <h1 className="text-[2rem] font-black">React blogs</h1>
      <div className="flex justify-center pt-[20rem]">{children}</div>
    </>
  );
};

export default UnAuthLayout;
