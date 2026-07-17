function ListOfPlayers() {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 82 },
    { name: "Gill", score: 68 },
    { name: "Rahul", score: 76 },
    { name: "Hardik", score: 58 },
    { name: "Jadeja", score: 88 },
    { name: "Pant", score: 65 },
    { name: "Surya", score: 91 },
    { name: "Shami", score: 40 },
    { name: "Bumrah", score: 72 },
    { name: "Siraj", score: 55 },
  ];

  const lowScorers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      {players.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}

      <h2>Players with Score Below 70</h2>

      {lowScorers.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}
    </div>
  );
}

export default ListOfPlayers;