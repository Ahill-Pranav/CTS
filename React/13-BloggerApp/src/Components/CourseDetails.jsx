function CourseDetails() {
  const courses = [
    {
      id: 1,
      name: "React",
      duration: "30 Days",
      trainer: "Alex"
    },
    {
      id: 2,
      name: "Spring Boot",
      duration: "45 Days",
      trainer: "Chris"
    },
    {
      id: 3,
      name: "Microservices",
      duration: "40 Days",
      trainer: "Sophia"
    }
  ];

  return (
    <div>
      <h2>Course Details</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <p><b>Course:</b> {course.name}</p>
          <p><b>Duration:</b> {course.duration}</p>
          <p><b>Trainer:</b> {course.trainer}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;