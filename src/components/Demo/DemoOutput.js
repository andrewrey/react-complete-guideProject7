const DemoOutput = ({ show }) => {
  console.log("Demo Output is Running");
  return <p>{show ? "This is new!" : ""}</p>;
};

export default DemoOutput;
