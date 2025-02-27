import grainImage from "../../public/assets/images/grain.jpg"

const Card = ({ className, children, ...other }) => {
  return (
    <div
      className={`bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none ${className}`}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${grainImage})`,
          opacity: 0.05,
        }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
