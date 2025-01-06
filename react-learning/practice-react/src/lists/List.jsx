

function List(props) {
  /*
    const games = [
    { name: "cricket", ranking: 1 },
    { name: "football", ranking: 3 },
    { name: "vollyball", ranking: 5 },
    { name: "tennis", ranking: 4 },
    { name: "hockey", ranking: 2 },
  ];

  // now we use the msap function to navigate the things in right position
// &nbsp; --> non breaking space character
  const listItems = games.map((game) => <li key={game.name}> {game.name} :&nbsp; {game.ranking} </li>);
*/

  // making a key for each item in the list

  /*
  const games = [
    { id: 1, name: "cricket", ranking: 1 },
    { id: 2, name: "football", ranking: 3 },
    { id: 3, name: "vollyball", ranking: 5 },
    { id: 4, name: "tennis", ranking: 4 },
    { id: 5, name: "hockey", ranking: 2 },
  ];

  // now we use sort() function to sort the games array in  alphabetical ascending order of ranking

  games.sort((a, b) => a.name.localeCompare(b.name));

  // for reverse order we use sort() function with reverse parameter set to true

  // games.sort((a,b) => b.name.localeCompare(a.name));

  // sorting by ranking
  games.sort((a, b) => a.ranking - b.ranking);

*/

  const category = props.category;

  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.name}>
      {" "}
      {item.name} :&nbsp; <b>{item.ranking} </b>{" "}
    </li>
  ));

  //  return(games)
  return (
    <>
      <h3 className="outdoor-games">{category}</h3>
      <ul className="online-games">{listItems}</ul>
    </>
  );
}

export default List;
