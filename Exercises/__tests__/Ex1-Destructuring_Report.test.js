const extractUserData = require("../Ex1-Destructuring_Report");

describe("extractUserData Test Suite", () => {
  test("should correctly extract user data and roles", () => {
    const user = {
      id: 1,
      profile: {
        name: "Mohammad",
        city: "Aleppo",
      },
      roles: ["amdmin", "superAdmin"],
    };

    const result = extractUserData(user);

    expect(result).toEqual({
      userId: 1,
      userName: "Mohammad",
      userCity: "Aleppo",
      primaryRole: "amdmin",
      secondaryRole: "superAdmin",
    });
  });
});
