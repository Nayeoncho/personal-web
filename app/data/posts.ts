export type PostSection = {
  heading?: string;
  body: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "clean-architecture-nodejs-typescript",
    title: "Clean Architecture in Node.js with TypeScript",
    date: "2026-06-10",
    summary:
      "How I structured a forum backend using domain, application, and infrastructure layers — and why it made testing so much easier.",
    tags: ["TypeScript", "Node.js", "Architecture", "Open Source"],
    sections: [
      {
        body: "In my Open Source class, our group built a Reddit-style forum API. Early on we had all the business logic crammed into controllers, which made writing unit tests a nightmare because everything depended on the database. The fix was clean architecture — separating the code into layers that don't know about each other.",
      },
      {
        heading: "The Three Layers",
        body: "The domain layer holds your core models and repository interfaces (e.g. IUserRepo, IPostRepo). It has zero dependencies on Express, databases, or anything external. The application layer contains use cases — each use case is a class that takes repository interfaces through its constructor. The infrastructure layer is where the actual database queries live, implementing those interfaces.",
      },
      {
        heading: "Why This Matters for Testing",
        body: "Because use cases only depend on interfaces, in Jest tests you just pass in mock objects that satisfy the interface. No real database needed. We caught several bugs this way — like an admin endpoint that wasn't checking permissions correctly — before they ever hit the actual DB.",
      },
      {
        heading: "What I'd Do Differently",
        body: "Defining all the interfaces upfront felt like overhead at first, but it paid off as the project grew. One thing I'd add next time is proper error types in the domain layer instead of throwing raw strings everywhere.",
      },
    ],
  },
  {
    slug: "jwt-auth-and-security-middleware",
    title: "JWT Authentication & Security Middleware",
    date: "2026-05-28",
    summary:
      "What I learned building an auth system — from signing tokens to protecting routes with middleware — and the OWASP pitfalls to avoid.",
    tags: ["Security", "JWT", "Node.js", "OWASP"],
    sections: [
      {
        body: "Between the Computer Security course (INFO2050) and building the forum backend, I got a solid understanding of how authentication actually works under the hood. The OWASP Top 10 became a checklist I ran through every time I touched auth code.",
      },
      {
        heading: "How JWTs Work",
        body: "A JSON Web Token has three parts: header (algorithm), payload (claims like userId and role), and a signature. The server signs the token with a secret key. On every subsequent request, the server verifies the signature — if someone tampers with the payload, the signature won't match. The token itself is not encrypted, so never put sensitive data in the payload.",
      },
      {
        heading: "Middleware Chain",
        body: "In our forum, we had three middleware functions: authenticate (verifies the token and attaches the user to req), authorizeAdmin (checks user.role === 'admin'), and authorizeSuper (checks for superadmin). Routes were protected by chaining them: router.get('/admin/stats', authenticate, authorizeAdmin, handler). This kept all permission logic out of the controllers.",
      },
      {
        heading: "OWASP Lessons from Computer Security Lab",
        body: "We used OWASP Juice Shop to practice real attacks. The most eye-opening was Broken Access Control — you could access other users' data just by changing an ID in the URL because the backend wasn't checking ownership. SQL Injection was another big one: always use parameterized queries, never string concatenation. And storing passwords in plaintext is an instant fail — always bcrypt.",
      },
    ],
  },
  {
    slug: "unit-testing-with-jest-typescript",
    title: "Unit Testing Tips I Learned the Hard Way (Jest + TypeScript)",
    date: "2026-05-15",
    summary:
      "Common pitfalls with mocking, async tests, and keeping tests isolated — from building real test suites in the forum project and SQA class.",
    tags: ["Jest", "Testing", "TypeScript", "SQA"],
    sections: [
      {
        body: "I took Software Quality Assurance (PROG2070) at the same time as working on the forum backend tests. The combination was intense but I came out understanding testing at a level I didn't expect.",
      },
      {
        heading: "Mock Everything External",
        body: "Unit tests should test one thing. If your use case talks to a database, mock the repository. In Jest with TypeScript, I used jest.fn() to create mock functions that satisfy an interface. The key insight: if your test breaks because the database is down, it's not a unit test. Our forum tests mocked IUserRepo, IPostRepo etc., so they ran in milliseconds.",
      },
      {
        heading: "Reset Mocks Between Tests",
        body: "This burned us. If a mock returns a value in one test, it might bleed into the next test unless you call jest.clearAllMocks() in beforeEach. We had a test that passed in isolation but failed when run with the full suite — turned out a mock was carrying state from a previous test.",
      },
      {
        heading: "Testing Async Code",
        body: "Always await async calls in tests, and always return the promise or use async/await in the test function. If you forget, Jest will finish the test before the async code runs, and errors won't be caught. We used async/await everywhere to make this explicit.",
      },
      {
        heading: "SQA Perspective: Beyond Unit Tests",
        body: "PROG2070 covered the full testing pyramid. Unit tests are fast but only test one piece. Functional tests verify end-to-end flows. Selenium WebDriver tests actually drive a real browser — we built tests in C# that clicked buttons and verified page content. Performance testing with tools like JMeter found bottlenecks that unit tests can't catch.",
      },
    ],
  },
  {
    slug: "flutter-dart-mobile-development",
    title: "Building Mobile Apps with Flutter and Dart",
    date: "2026-04-20",
    summary:
      "My experience learning Flutter — the widget model, state management basics, and building a real meeting room booking app from scratch.",
    tags: ["Flutter", "Dart", "Mobile", "OOP"],
    sections: [
      {
        body: "Coming from a TypeScript/Node background, picking up Dart felt surprisingly comfortable. The syntax is similar, and Flutter's 'everything is a widget' model clicked for me once I stopped thinking in HTML/CSS terms.",
      },
      {
        heading: "Dart vs TypeScript",
        body: "Dart is strongly typed like TypeScript but compiled, not interpreted. Classes are first-class with proper constructors, interfaces (abstract classes), and inheritance. The null safety system is stricter than TypeScript — you have to explicitly declare if a variable can be null using the ? suffix. This caught a lot of potential runtime errors at compile time.",
      },
      {
        heading: "The Widget Model",
        body: "In Flutter, everything — layout, text, buttons, padding — is a widget. Widgets are either Stateless (render once based on props) or Stateful (can rebuild when internal state changes). It maps to React's component model closely. The BuildContext object is Flutter's way of locating a widget in the tree, similar to how React context works.",
      },
      {
        heading: "Building the Meeting Room App",
        body: "For the final project, we built a cross-platform meeting room booking app. The biggest challenge was managing state across screens — knowing which room was selected and which time slots were taken. We used setState for local widget state and passed data down through constructors. For a larger app, I'd reach for a state management solution like Provider or Riverpod.",
      },
      {
        heading: "One Codebase, All Platforms",
        body: "The most impressive part of Flutter is genuinely running the same Dart code on Android, iOS, web, and desktop. The platform-specific folders (android/, ios/) mostly handle build configuration, not business logic. For the final project, we targeted Android as primary but the web build worked out of the box.",
      },
    ],
  },
  {
    slug: "machine-learning-supervised-learning-python",
    title: "Intro to Machine Learning: Supervised Learning with Python",
    date: "2026-03-30",
    summary:
      "From k-NN to linear regression to a student mental health dataset — what I actually understood after PROG2590.",
    tags: ["Python", "Machine Learning", "pandas", "scikit-learn"],
    sections: [
      {
        body: "PROG2590 (Machine Learning) started from math fundamentals — linear algebra, probability, statistics — before touching any algorithms. It felt slow at first but understanding why algorithms work made debugging models much less frustrating.",
      },
      {
        heading: "pandas is the Foundation",
        body: "Before any model, you spend most of your time in pandas. A DataFrame is like a typed spreadsheet in code. We learned to load CSVs, inspect distributions, handle missing values, normalize features, and split into train/test sets. Getting this step wrong breaks everything downstream.",
      },
      {
        heading: "k-Nearest Neighbors (k-NN)",
        body: "k-NN was the first algorithm we implemented. For a new data point, find the k training examples closest to it (by Euclidean distance) and take a majority vote (for classification) or average (for regression). The key hyperparameter is k — too small and the model overfits noise; too large and it underfits. We tested k-NN on cancer and wave datasets to see this tradeoff directly.",
      },
      {
        heading: "Linear Regression",
        body: "Linear regression finds the line (or hyperplane) that minimizes prediction error across training data. We applied it to a diabetes dataset to predict disease progression. The most important lesson: correlation is not causation, and always check residuals — if they're not random, your model is missing something.",
      },
      {
        heading: "Final Project: Student Mental Health Dataset",
        body: "For the final project, we analyzed a dataset on student mental health and burnout. We cleaned the data, visualized feature distributions, trained multiple models, and compared accuracy. The most interesting finding: study hours and sleep quality were stronger predictors of burnout than GPA. Feature engineering (combining related variables) improved model performance noticeably.",
      },
    ],
  },
  {
    slug: "web-security-owasp-top-10",
    title: "Web Security: What the OWASP Top 10 Actually Looks Like in Code",
    date: "2026-03-10",
    summary:
      "Hands-on with OWASP Juice Shop — what SQL injection, broken access control, and XSS look like when you're the attacker.",
    tags: ["Security", "OWASP", "Web", "INFO2050"],
    sections: [
      {
        body: "INFO2050 (Computer Security) used OWASP Juice Shop — an intentionally vulnerable web app — to teach security by actually exploiting it. Seeing vulnerabilities from the attacker's perspective made me a much more security-conscious developer.",
      },
      {
        heading: "SQL Injection",
        body: "The classic attack. If a login form builds a query like SELECT * FROM users WHERE email = '{input}', an attacker can enter ' OR '1'='1 to bypass authentication entirely. The fix is parameterized queries (prepared statements) — never concatenate user input into SQL strings. Every ORM does this automatically; raw string queries are dangerous.",
      },
      {
        heading: "Broken Access Control",
        body: "This was the most common vulnerability in Juice Shop. Many endpoints checked if you were logged in but not if you owned the resource. Changing a user ID in an API request would return another user's data. The fix: always verify that the authenticated user has permission to access the specific resource, not just that they're logged in.",
      },
      {
        heading: "XSS (Cross-Site Scripting)",
        body: "If a site displays user-provided content without sanitizing it, an attacker can inject a <script> tag that runs in other users' browsers. This can steal session cookies, redirect users, or deface the page. The fix: always escape HTML output, and use Content Security Policy headers to restrict what scripts can run.",
      },
      {
        heading: "Security Headers and HTTPS",
        body: "A big chunk of security is configuration, not code. HTTP Strict Transport Security (HSTS) forces browsers to use HTTPS. X-Content-Type-Options prevents MIME sniffing. X-Frame-Options prevents clickjacking. These are one-line additions to your server config but they close real attack vectors. Our group project for INFO2050 added all of these to a Node/Express backend.",
      },
    ],
  },
];
