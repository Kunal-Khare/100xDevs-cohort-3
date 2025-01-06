import List from "./List";

function GamesList() {
  const games = [
    { id: 1, name: "cricket", ranking: 1 },
    { id: 2, name: "football", ranking: 3 },
    { id: 3, name: "vollyball", ranking: 5 },
    { id: 4, name: "tennis", ranking: 4 },
    { id: 5, name: "hockey", ranking: 2 },
  ];

  const onlineGames = [
    { id: 1, name: "Pubg", ranking: 1 },
    { id: 2, name: "Fifa", ranking: 2 },
    { id: 3, name: "fortnite", ranking: 5 },
    { id: 4, name: "GtaV", ranking: 4 },
    { id: 5, name: "Call of duty", ranking: 3 },
  ];

  return (
    <>
      <List items={games} category="Outdoor Games" />
      <List items={onlineGames} category="Online Games"/>
    </>
  );
}

export default GamesList;
