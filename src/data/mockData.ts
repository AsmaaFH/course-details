export interface Lesson {
  id: number;
  title: string;
  type: "lesson" | "quiz" | "exercise";
  locked: boolean;
  duration?: string;
  questions?: string;
}

export interface CourseModule {
  weekTitle: string;
  description: string;
  lessons: Lesson[];
  defaultExpanded?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option (0-based)
}

export interface QuizData {
  id: number;
  title: string;
  questions: QuizQuestion[];
  timeLimit: number;
}

// Week 1-4 Data
export const week1to4Lessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction",
    type: "lesson",
    locked: false,
  },
  {
    id: 3,
    title: "Course Overview",
    type: "quiz",
    locked: false,
    duration: "10 MINUTES",
    questions: "0 QUESTION",
  },
  {
    id: 4,
    title: "Course Exercise / Reference Files",
    type: "lesson",
    locked: false,
  },
  {
    id: 5,
    title: "Code Editor Installation (Optional if you have one)",
    type: "lesson",
    locked: false,
  },
  {
    id: 6,
    title: "Embedding PHP in HTML",
    type: "lesson",
    locked: false,
  },
  {
    id: 7,
    title: "Quiz",
    type: "quiz",
    locked: false,
  },
];

// Week 5-8 Data
export const week5to8Lessons: Lesson[] = [
  {
    id: 7,
    title: "Defining Functions",
    type: "lesson",
    locked: true,
  },
  {
    id: 8,
    title: "Function Parameters",
    type: "lesson",
    locked: true,
  },
  {
    id: 9,
    title: "Return Values From Functions",
    type: "quiz",
    locked: true,
    duration: "15 MINUTES",
    questions: "2 QUESTION",
  },
  {
    id: 10,
    title: "Global Variable and Scope",
    type: "lesson",
    locked: true,
  },
  {
    id: 11,
    title: "Newer Way of creating a Constant",
    type: "lesson",
    locked: true,
  },
  {
    id: 12,
    title: "Constants",
    type: "lesson",
    locked: true,
  },
];

// All Course Modules Data
export const courseModules: CourseModule[] = [
  {
    weekTitle: "Week 1-4",
    description: "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: week1to4Lessons,
    defaultExpanded: true,
  },
  {
    weekTitle: "Week 5-8",
    description: "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: week5to8Lessons,
    defaultExpanded: true,
  },
];

export const mockQuizData: QuizData = {
  id: 1,
  title: "Course Overview Quiz",
  timeLimit: 5,
  questions: [
    {
      id: 1,
      question: "Among the following states of India, which one has the oldest rock formations in the country?",
      options: ["Asam", "Bihar", "Karnataka", "Uttar Pradesh"],
      correctAnswer: 2, // Karnataka
    },
    {
      id: 2,
      question: "What is the capital of Maharashtra?",
      options: ["Pune", "Mumbai", "Nagpur", "Nashik"],
      correctAnswer: 1, // Mumbai
    },
    {
      id: 3,
      question: "Which river is known as the 'Ganga of the South'?",
      options: ["Krishna", "Godavari", "Kaveri", "Tungabhadra"],
      correctAnswer: 2, // Kaveri
    },
    {
      id: 4,
      question: "What is the largest state in India by area?",
      options: ["Madhya Pradesh", "Rajasthan", "Maharashtra", "Uttar Pradesh"],
      correctAnswer: 1, // Rajasthan
    },
    {
      id: 5,
      question: "Which city is known as the 'Silicon Valley of India'?",
      options: ["Hyderabad", "Bangalore", "Chennai", "Pune"],
      correctAnswer: 1, // Bangalore
    },
  ],
};

// Additional mock data for future use
export const mockComments = [
  {
    id: 1,
    author: "أحمد محمد",
    content: "شكراً لك على هذا الدرس الرائع!",
    timestamp: "2024-01-15T10:30:00Z",
    likes: 12,
  },
  {
    id: 2,
    author: "فاطمة علي",
    content: "هل يمكنك شرح المزيد عن هذا الموضوع؟",
    timestamp: "2024-01-15T11:45:00Z",
    likes: 8,
  },
];

export const mockCourseInfo = {
  title: "Advanced PHP Development",
  instructor: "Dr. Sarah Johnson",
  duration: "8 weeks",
  level: "Intermediate",
  students: 1250,
  rating: 4.8,
  price: 199,
};
