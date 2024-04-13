import Hero from "@/components/Hero/Hero";
import OurMission from "@/components/OurMission/OurMission";
import Products from "@/components/Products/Products";

const Home = () => {
    return (
      <div className="text-center">
        <Hero />
        <OurMission
                title="Our Mission"
                description="Our mission is to empower every person and every organization on the planet to achieve more."
                buttonText="Learn More"
                imageUrl="/mission-image.jpg" // Make sure you have an image at public/mission-image.jpg
            />
        <Products />
      </div>
    );
  };
  
  export default Home;
  