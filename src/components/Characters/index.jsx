import CharCard from "../CharCard";

const Characters = ({ characterList }) => {
  return (
    <div>
      <h1>Meus personagens</h1>
      {characterList.map((char) => {
        const { id } = char;
        return <CharCard key={id} char={char} />;
      })}
    </div>
  );
};
export default Characters;
