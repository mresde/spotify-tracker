import React from "react";

import React from "react";

const CLIENT_ID = "e2dda95fc7a34ee689ac3085d2e40358";
const REDIRECT_URI = "https://spotify-tracker-wnc3.vercel.app/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";  // Keep it as "token" for Implicit Grant Flow
const SCOPES = "user-read-private user-read-email"; // Optional scope

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>My Spotify App 🎧</h1>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`}
        style={{
          padding: "10px 20px",
          backgroundColor: "#1DB954",
          color: "white",
          borderRadius: "20px",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Login with Spotify
      </a>
    </div>
  );
}

export default App;


