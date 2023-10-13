const FlexCenter = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {children}
    </div>
  );
};
FlexCenter.propTypes;

export default FlexCenter;
