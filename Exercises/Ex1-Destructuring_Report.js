function extractUserData(user) {
  const {
    id: userId,
    profile: { name: userName, city: userCity },
    roles: [primaryRole, secondaryRole],
  } = user;

  return {
    userId,
    userName,
    userCity,
    primaryRole,
    secondaryRole
  };
}

module.exports = extractUserData;



// const user = {
//   id: 10,
//   profile: {
//     name: "Lina",
//     city: "Amman",
//   },
//   roles: ["editor", "reviewer"],
// };

// console.log(user);

