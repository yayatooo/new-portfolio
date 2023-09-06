"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const GitHubPage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = "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";
    const headers = {
      Authorization: `token ${token}`,
    };

    axios
      .get(`https://api.github.com/users/yayatooo`, {
        headers,
      })
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(profile);

  return (
    <div>
      <h1>GitHub Profile</h1>
      {profile ? (
        <div>
          {/* <p>Username: {profile.login}</p> */}
          {/* <p>Name: {profile.name}</p> */}
          {/* Display more profile information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GitHubPage;
