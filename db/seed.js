const Habits = require("../models/Habits");
const UserLogin = require("../models/UserLogin");

Habits.deleteMany({}).then(() => {
  Habits.create([
    {
      name: "Running",
      description:
        "To go faster than a walk specifically : to go steadily by springing steps so that both feet leave the ground for an instant in each step.",
      difficultyLevel: 2,
    },
    {
      name: "Swimming",
      description:
        "Swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body.",
      difficultyLevel: 3,
    },
  ]).then((habit) => {
    console.log(habit);
    res.json(habit);
    process.exit();
  });
});

UserLogin.deleteMany({}).then(() => {
  UserLogin.create([
    {
      username: "artan",
      email: "artan@gmail.com",
      password: 123456,
    },
    {
      username: "brian",
      email: "brian@gmail.com",
      password: 654321,
    },
    {
      username: "jeff",
      email: "jeff@gmail.com",
      password: 2468,
    },
    {
      username: "oktay",
      email: "oktay@gmail.com",
      password: 13579,
    },
    {
      username: "random",
      email: "random@gmail.com",
      password: 123456789,
    },
  ]).then((login) => {
    console.log(login);
    res.json(login);
    process.exit();
  });
});

