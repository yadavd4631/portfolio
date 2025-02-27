import StarIcon from "../../public/assets/icons/star.svg";

const CardHeader = ({ title, description, className }) => {
  return (
    <div className={`flex flex-col ${className || ""}`}>
      <div className="inline-flex items-center gap-2">
        <img src={StarIcon} className="size-9" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm  text-white/60 mt-2">{description}</p>
    </div>
  );
};

export default CardHeader;
