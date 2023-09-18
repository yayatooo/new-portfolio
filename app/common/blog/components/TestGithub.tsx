// // "use client";
// // import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { getGithubData } from "@/app/constant/github";

// type GithubProps = {
//   data: {
//     name: string;
//   };
// };

// const githubData = {
//   data: {},
// };

// const token = process.env.GITHUB_TOKEN;
// const headers = {
//   Authorization: `token ${token}`,
// };

// axios
//   .get(`https://api.github.com/users/yayatooo`, {
//     headers,
//   })
//   .then((response) => {
//     githubData.data = response.data;
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// const GitHubPage = async () => {
//   const allData = await getGithubData();
//   // console.log(allData);
//   return (
//     <div>
//       {/* <h1 className="text-white text-7xl">{githubData.data.name}</h1> */}
//     </div>
//   );
// };

// export default GitHubPage;
