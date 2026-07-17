import officeImage from "./images/images.jpg";

function App() {
  const office = {
    name: "Skyline Tech Park",
    rent: 55000,
    address: "Chennai"
  };

  const officeSpaces = [
    {
      name: "Skyline Tech Park",
      rent: 55000,
      address: "Chennai"
    },
    {
      name: "Global Business Center",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Innovate Hub",
      rent: 62000,
      address: "Hyderabad"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="400"
      />

      <h2>Featured Office</h2>

      <p><strong>Name:</strong> {office.name}</p>

      <p>
        <strong>Rent:</strong>{" "}
        <span
          style={{
            color: office.rent < 60000 ? "red" : "green"
          }}
        >
          ₹{office.rent}
        </span>
      </p>

      <p><strong>Address:</strong> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeSpaces.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>

          <p>
            <strong>Rent:</strong>{" "}
            <span
              style={{
                color: item.rent < 60000 ? "red" : "green"
              }}
            >
              ₹{item.rent}
            </span>
          </p>

          <p>
            <strong>Address:</strong> {item.address}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;