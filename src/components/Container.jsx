const Container = ({ children }) => {
  return (
    <div className="w-full  sm:max-w-[720px] md:max-w-[1000px]  mx-auto">
      {children}
    </div>
  );
};

export default Container;
