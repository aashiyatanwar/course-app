const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const courses = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://www.hammer.net/wp-content/uploads/2023/02/react-native_large.jpg',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native' },
        { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app.' },
      ],
      students: [
        { id: 101, name: 'Alice Johnson', email: 'alice@example.com' },
        { id: 102, name: 'Bob Smith', email: 'bob@example.com' },
      ],
      
    },
    {
      id: 2,
      name: 'Full Stack Web Development',
      instructor: 'Jane Smith',
      description: 'Master the MERN stack and build scalable full-stack applications.',
      enrollmentStatus: 'Closed',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRj0wMd0CYobO7ucQ2ClBLlTUtkEOXEDd9jg&s',
      duration: '12 weeks',
      schedule: 'Mondays, Wednesdays, and Fridays, 4:00 PM - 6:00 PM',
      location: 'In-person',
      prerequisites: ['Basic knowledge of HTML, CSS, JavaScript'],
      syllabus: [
        { week: 1, topic: 'Introduction to Web Development', content: 'Overview of front-end and back-end technologies.' },
        { week: 2, topic: 'Building RESTful APIs', content: 'Creating server-side APIs using Node.js and Express.' },
      ],
      students: [
        { id: 103, name: 'Charlie Brown', email: 'charlie@example.com' },
        { id: 104, name: 'Emily Davis', email: 'emily@example.com' },
      ],
      likes : 15
    },
    {
      id: 3,
      name: 'Data Structures and Algorithms',
      instructor: 'Alice Williams',
      description: 'Deep dive into data structures and algorithms to enhance your problem-solving skills.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-fvR_E5N6E_Hs2vT6YoDysMBqXbC3h4lAg&s',
      duration: '10 weeks',
      schedule: 'Saturdays, 10:00 AM - 1:00 PM',
      location: 'Online',
      prerequisites: ['Basic programming knowledge in any language'],
      syllabus: [
        { week: 1, topic: 'Introduction to Data Structures', content: 'Overview of arrays, linked lists, stacks, and queues.' },
        { week: 2, topic: 'Sorting Algorithms', content: 'Implementation of sorting algorithms like Quick Sort and Merge Sort.' },
      ],
      students: [
        { id: 105, name: 'David Wilson', email: 'david@example.com' },
        { id: 106, name: 'Sophia Taylor', email: 'sophia@example.com' },
      ],
     
    },
    {
      id: 4,
      name: 'Machine Learning with Python',
      instructor: 'Bob Lee',
      description: 'Get started with machine learning algorithms and libraries in Python.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg',
      duration: '14 weeks',
      schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Basic Python programming', 'Mathematics (linear algebra and statistics)'],
      syllabus: [
        { week: 1, topic: 'Introduction to Machine Learning', content: 'Overview of ML, AI, and the importance of data.' },
        { week: 2, topic: 'Supervised Learning', content: 'Implementing algorithms like Linear Regression and SVM.' },
      ],
      students: [
        { id: 107, name: 'Ella Thompson', email: 'ella@example.com' },
        { id: 108, name: 'Michael Johnson', email: 'michael@example.com' },
      ],
      
    },
    {
      id: 5,
      name: 'DevOps Fundamentals',
      instructor: 'Carlos Garcia',
      description: 'Learn the essentials of DevOps, including CI/CD pipelines, Docker, and Kubernetes.',
      enrollmentStatus: 'Closed',
      thumbnail: 'https://wac-cdn.atlassian.com/dam/jcr:1f9893d0-a300-4afd-95b3-3ddb79403d62/ADO-DevOps-Tool_1200x675@2x.png?cdnVersion=2211',
      duration: '6 weeks',
      schedule: 'Wednesdays and Fridays, 5:00 PM - 7:00 PM',
      location: 'In-person',
      prerequisites: ['Basic knowledge of Linux and Git'],
      syllabus: [
        { week: 1, topic: 'Introduction to DevOps', content: 'Understanding the DevOps lifecycle.' },
        { week: 2, topic: 'CI/CD with Jenkins', content: 'Setting up continuous integration and delivery pipelines.' },
      ],
      students: [
        { id: 109, name: 'Sarah Martinez', email: 'sarah@example.com' },
        { id: 110, name: 'James Brown', email: 'james@example.com' },
      ],
      
    },
    {
      id: 6,
      name: 'Cloud Computing with AWS',
      instructor: 'Mary Green',
      description: 'Explore cloud computing concepts and build solutions using Amazon Web Services (AWS).',
      enrollmentStatus: 'Open',
      thumbnail: 'https://assets.allcode.com/wp-content/uploads/2021/07/top-aws-service-list-2023-scaled.webp',
      duration: '8 weeks',
      schedule: 'Mondays and Wednesdays, 3:00 PM - 5:00 PM',
      location: 'Online',
      prerequisites: ['Basic understanding of networking and virtualization'],
      syllabus: [
        { week: 1, topic: 'Introduction to Cloud Computing', content: 'Overview of cloud computing services and deployment models.' },
        { week: 2, topic: 'AWS Basics', content: 'Setting up AWS services like EC2, S3, and RDS.' },
      ],
      students: [
        { id: 111, name: 'Noah Clark', email: 'noah@example.com' },
        { id: 112, name: 'Olivia Lewis', email: 'olivia@example.com' },
      ],
      
    },
  ];

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});