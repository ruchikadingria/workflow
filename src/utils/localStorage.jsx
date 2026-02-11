const employees = [
  {
    id: 1,
    firstName: "Ruchika",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNo: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Implement REST API",
        description: "Create REST endpoints using Node.js.\nHandle request validation and responses.",
        date: "2026-02-06",
        category: "Backend"
      },
      {
        taskNo: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database schema design",
        description: "Design normalized tables.\nApply primary and foreign keys.",
        date: "2026-01-29",
        category: "Database"
      },
      {
        taskNo: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API authentication",
        description: "Implement JWT authentication.\nToken validation failed during testing.",
        date: "2026-01-22",
        category: "Security"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "emp2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNo: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix frontend bugs",
        description: "Resolve UI rendering issues.\nEnsure responsiveness across devices.",
        date: "2026-02-07",
        category: "Frontend"
      },
      {
        taskNo: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "React component refactor",
        description: "Refactor reusable components.\nImprove code readability.",
        date: "2026-01-30",
        category: "Frontend"
      },
      {
        taskNo: 3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "State management setup",
        description: "Configure global state.\nRemove redundant props drilling.",
        date: "2026-02-09",
        category: "Frontend"
      },
      {
        taskNo: 4,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Build optimization",
        description: "Reduce bundle size.\nOptimization caused build failure.",
        date: "2026-01-24",
        category: "Build Tools"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "emp3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        taskNo: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write unit tests",
        description: "Create unit tests using Jest.\nCover edge cases.",
        date: "2026-02-06",
        category: "Testing"
      },
      {
        taskNo: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Integration testing",
        description: "Test API and DB integration.\nVerify response consistency.",
        date: "2026-01-28",
        category: "Testing"
      },
      {
        taskNo: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug reproduction",
        description: "Reproduce reported issues.\nDocument exact steps.",
        date: "2026-01-21",
        category: "QA"
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "emp4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNo: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design API architecture",
        description: "Define service boundaries.\nPrepare API flow diagram.",
        date: "2026-02-08",
        category: "System Design"
      },
      {
        taskNo: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code documentation",
        description: "Document backend modules.\nAdd API usage examples.",
        date: "2026-01-27",
        category: "Documentation"
      },
      {
        taskNo: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Microservice migration",
        description: "Split monolith service.\nMigration failed due to dependency issues.",
        date: "2026-01-23",
        category: "Backend"
      },
      {
        taskNo: 4,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Performance profiling",
        description: "Analyze memory usage.\nIdentify bottlenecks.",
        date: "2026-02-10",
        category: "Optimization"
      }
    ]
  },
  {
    id: 5,
    firstName: "Kunal",
    email: "emp5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNo: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Server deployment",
        description: "Deploy application on cloud.\nConfigure environment variables.",
        date: "2026-02-06",
        category: "DevOps"
      },
      {
        taskNo: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "CI/CD pipeline setup",
        description: "Configure automated builds.\nEnable test execution.",
        date: "2026-01-26",
        category: "DevOps"
      },
      {
        taskNo: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server monitoring",
        description: "Set up monitoring alerts.\nService crashed during setup.",
        date: "2026-01-22",
        category: "DevOps"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Suresh",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  const existingEmployees = localStorage.getItem("employees");
  const existingAdmin = localStorage.getItem("admin");

  if (!existingEmployees) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!existingAdmin) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
