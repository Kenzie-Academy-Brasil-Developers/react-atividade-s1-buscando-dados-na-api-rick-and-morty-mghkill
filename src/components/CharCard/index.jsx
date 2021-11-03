const CharCard = ({ char }) => {
  const { name, image, species } = char;

  return (
    <div>
      <h1>
        {name.length >= 15
          ? name
              .split("")
              .filter((e, i) => i < 15)
              .join("") + "..."
          : name}
      </h1>
      <img src={image} alt="ImageChar" />
      <span>{species}</span>
    </div>
  );
};
export default CharCard;
