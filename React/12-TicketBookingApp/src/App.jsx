import { useState } from "react";

import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? (
        <>
          <LogoutButton onLogout={handleLogout} />
          <hr />
          <UserPage />
        </>
      ) : (
        <>
          <LoginButton onLogin={handleLogin} />
          <hr />
          <GuestPage />
        </>
      )}
    </div>
  );
}

export default App;