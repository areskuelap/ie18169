import { useEffect } from 'react';
import AboutMe from '../components/About/AboutMe';

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="mt-40">
      {/* about-me-section */}
      <AboutMe />
    </div>
  );
};

export default About;
