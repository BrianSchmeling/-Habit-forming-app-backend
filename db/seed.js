const Habits = require("../models/Habits");

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
