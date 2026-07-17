import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {
  const view = "book";
  // Change to "blog" or "course" to test other components

  if (view === "book") {
    return <BookDetails />;
  } else if (view === "blog") {
    return <BlogDetails />;
  } else {
    return <CourseDetails />;
  }
}

export default App;