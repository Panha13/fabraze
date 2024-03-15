import Announment from "./components/Announment";
import Categories from "./components/Categories";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import Newslatter from "./components/Newslatter";
import Footer from "./components/Footer";
import Slideshow from "./components/Slideshow";

const App = () => {
  return (
    <>
      <Navbar />
      <Slideshow />
      <Categories />
      <Feature />
      <Newslatter />
      <Footer />
    </>
  );
};

export default App;
