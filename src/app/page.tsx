import Image from "next/image";
import Navbar from "./component/Navbar"
import Slider from "./component/Slider"
import About from "./component/About"
import Project from "./component/Project"
import Text from "./component/Text"
import Work from "./component/Work"
import Footer from "./component/Footer"
import CardFlip from "./component/CardFlip";
import Card from "@/Card";



function Home() {
  return (
    <div className="">
      <Navbar />
      <Slider />
      <About />
      <Project />
      <Text />
      <Work />
      <CardFlip title={""} />
      <Footer />
      {/* <Card/> */}
    </div>
  );
}
export default Home