const TechIcon = ({ component }) => {
  const Component = component;
  if (typeof component === "string") {
    return <img src={component} className="size-10" alt="icon" />;
  }
  return(
    <Component className="size-10 classNamebg-gradient-to-r from-emerald-300 to-sky-400"/>
  )
};

export default TechIcon;
