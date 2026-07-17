function GuestPage() {
  return (
    <div>
      <h2>Flight Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI202</td>
            <td>Chennai</td>
            <td>Delhi</td>
            <td>09:00 AM</td>
          </tr>

          <tr>
            <td>6E450</td>
            <td>Bangalore</td>
            <td>Mumbai</td>
            <td>12:30 PM</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Please login to book tickets.</strong>
      </p>
    </div>
  );
}

export default GuestPage;