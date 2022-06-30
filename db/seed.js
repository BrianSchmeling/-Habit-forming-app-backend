const Habits = require("../models/Habits");
const UserLogin = require("../models/UserLogin");
const UserHabits = require("../models/UserHabits");

Habits.deleteMany({}).then(() => {
  console.log("Seeding Habits");
  Habits.create([
    {
      name: "Running",
      description:
        "To go faster than a walk specifically : to go steadily by springing steps so that both feet leave the ground for an instant in each step.",
    },
    {
      name: "Swimming",
      description:
        "Swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body.",
    },
  ]).then((habit) => {
    console.log(habit);
    // res.json(habit);
    // process.exit();
  });
});

UserLogin.deleteMany({}).then(() => {
  console.log("Seeding Users");
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
      username: "user",
      email: "random@gmail.com",
      password: 123456789,
    },
  ]).then((login) => {
    console.log(login);
    // res.json(login);
    // process.exit();
  });
});

UserHabits.deleteMany({}).then(() => {
  console.log("Seeding User Habits");
  UserHabits.create([
    {
      username: "user",
      habitName: "Drinking water",
      goal: "To drink more water",
      daysOfWeek: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
      },
      startingDate: 7 / 28 / 2022,
      targetDate: 8 / 28 / 2022,
    },
    {
      username: "artan",
      habitName: "Tango",
      goal: "Get better at dancing tango",
      daysOfWeek: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: true,
        sunday: true,
      },
      startingDate: 7 / 28 / 2022,
      targetDate: 9 / 14 / 2022,
    },
    {
      username: "jeff",
      habitName: "coding",
      goal: "To build coding stamina.",
      daysOfWeek: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: false,
        sunday: false,
      },
      startingDate: 7 / 28 / 2022,
      targetDate: 9 / 14 / 2022,
    },
  ]);
});
