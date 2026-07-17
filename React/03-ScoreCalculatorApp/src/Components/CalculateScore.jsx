import "../Stylesheets/mystyle.css";

function CalculateScore() {
  const Name = "Ahill";
  const School = "IJMHSS";
  const Total = 480;
  const Goal = 500;

  const Average = Total / 5;

  return (
    <div className="box">
      <h2>Student Score Card</h2>

      <p><strong>Name:</strong> {Name}</p>
      <p><strong>School:</strong> {School}</p>
      <p><strong>Total Marks:</strong> {Total}</p>
      <p><strong>Goal:</strong> {Goal}</p>
      <p><strong>Average:</strong> {Average}</p>
    </div>
  );
}

export default CalculateScore;