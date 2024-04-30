import Hero from "@/components/Hero/Hero";
import OurCommunity from "@/components/OurCommunity/OurCommunity";
import OurMission from "@/components/OurMission/OurMission";
import Products from "@/components/Products/Products";import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this threshold as needed
  });

  const [communityRef, communityInView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this threshold as needed
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this threshold as needed
  });

  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this threshold as needed
  });

  const sectionVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  useEffect(() => {
    if (heroInView) {
      // Perform animation for Hero section
    }
  }, [heroInView]);

  useEffect(() => {
    if (communityInView) {
      // Perform animation for OurCommunity section
    }
  }, [communityInView]);

  useEffect(() => {
    if (missionInView) {
      // Perform animation for OurMission section
    }
  }, [missionInView]);

  useEffect(() => {
    if (productsInView) {
      // Perform animation for Products section
    }
  }, [productsInView]);

  return (
    <div className="text-center">
      <div ref={heroRef}>
        <motion.div
          className="overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <Hero />
        </motion.div>
      </div>
      <div ref={communityRef}>
        <motion.div
          className="overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          animate={communityInView ? "visible" : "hidden"}
        >
          <OurCommunity
            title="Join Our Community"
            description="Join a vibrant community of innovators and creators dedicated to making a difference."
            buttonText="Become a Member"
            imageUrl="/our-community.jpeg" // Make sure you have an image at public/community-image.jpg
          />
        </motion.div>
      </div>
      <div ref={missionRef}>
        <motion.div
          className="overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          animate={missionInView ? "visible" : "hidden"}
        >
          <section className="">
            <OurMission
              title="Our Mission"
              description="Our mission is to empower every person and every organization on the planet to achieve more."
              buttonText="Learn More"
              imageUrl="/our-mission.jpeg" // Make sure you have an image at public/mission-image.jpg
            />
          </section>
        </motion.div>
      </div>
      <div ref={productsRef}>
        <motion.div
          className="overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          animate={productsInView ? "visible" : "hidden"}
        >
          <Products />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
