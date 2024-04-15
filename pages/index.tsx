import Hero from "@/components/Hero/Hero";
import OurCommunity from "@/components/OurCommunity/OurCommunity";
import OurMission from "@/components/OurMission/OurMission";
import Products from "@/components/Products/Products";

const Home = () => {
  return (
    <div className="text-center">
      <Hero />
          <OurCommunity
            title="Join Our Community"
            description="Join a vibrant community of innovators and creators dedicated to making a difference."
            buttonText="Become a Member"
            imageUrl="/our-community.jpeg" // Make sure you have an image at public/community-image.jpg
          />
      <section className="bg-gray-100">
      <OurMission
        title="Our Mission"
        description="Our mission is to empower every person and every organization on the planet to achieve more."
        buttonText="Learn More"
        imageUrl="/our-mission.jpeg" // Make sure you have an image at public/mission-image.jpg
        />
        </section>

      <Products />
    </div>
  );
};

export default Home;
