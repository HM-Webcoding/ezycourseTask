import AddToCard from "./component/AddToCard/AddToCard";
import Container from "./component/Container/Container";
import CourseContent from "./component/CourseContent/CourseContent";
import CourseDetails from "./component/CourseDetails/CourseDetails";
import CourseOverview from "./component/CourseOverview/CourseOverview";
import Hero from "./component/Hero/Hero";
import Layout from "./component/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <CourseDetails />
        <Container className="mt-[57px]">
          <div className="xl:flex">
            <CourseOverview />
            <AddToCard />
          </div>
        </Container>
        <CourseContent />
      </Layout>
    </>
  );
}

export default App;
