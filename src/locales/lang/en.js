export const STRINGS_EN = {
  HOME: {
    HERO: {
      TITLE: "Hi, I'm Bryan Cendales",
      SUBTITLE: "Full-Stack Developer",
      DESCRIPTION:
        "I'm a graduated electrical engineer who transitioned into full-stack development. I build interactive web applications with React and I'm expanding into Python and AWS.",
    },
    TECH_STACK: {
      TITLE: "Tech Stack",
      LEARNING: "Learning",
      STACK: [
        { NAME: "React", LEARNING: false },
        { NAME: "JavaScript", LEARNING: false },
        { NAME: "SCSS", LEARNING: false },
        { NAME: "Python", LEARNING: true },
        { NAME: "AWS", LEARNING: true },
      ],
    },
    PROJECTS: {
      TITLE: "My Projects",
      TRY_LIVE: "Try it Live →",
      PROJECTS_DATA: [
        {
          TITLE: "Roulette",
          ROUTE: "/roulette",
          DESCRIPTION:
            "An interactive spinning wheel to make random selections to play.",
          TECH: ["React", "SCSS"],
        },
        {
          TITLE: "Payment Reminder",
          ROUTE: "/payment-reminder",
          DESCRIPTION:
            "A family-oriented economy manager to check your monthly payments and card subscriptions.",
          TECH: ["React", "SCSS"],
        },
        {
          TITLE: "Simple Kitchen",
          ROUTE: "/simple-kitchen",
          DESCRIPTION:
            "Friendly, simple cooking manager for weekly recipes. Add prices and shopping lists to prepare before going to the mall.",
          TECH: ["React", "SCSS"],
        },
      ],
    },
  },
};
