import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AboutMe from '../components/About/AboutMe';
import HeroSection from '../components/Home/HeroSection';
import { fetchPostsApi } from '../redux/blogs/posts';

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsApi());
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <main className="mt-40">
        {/* hero-section */}
        <HeroSection />
        {/* about-section */}
        <AboutMe />
        <Link to="/about">
          <button
            type="button"
            className="bg-lightBlueColor mt-10 rounded px-6 py-2 w-50
      text-lg text-skyColor font-medium ml-4 md:ml-1 hover:bg-secondaryColor hover:text-primaryColor"
          >
            Más
          </button>
        </Link>
      </main>
    </>
  );
};

export default Home;
