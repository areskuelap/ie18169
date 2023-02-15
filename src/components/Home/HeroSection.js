import { CheckCircleIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profilePicture from '../../assets/images/profilePicture.jpg';


const fields = ['Academia', 'Responsabilidad social', 'Eco-amigable', 'Formación holística'];

const HeroSection = () => (
  <motion.div
    initial={{ x: '-100vw' }}
    animate={{ x: -0 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center gap-10 md:flex-row md:gap-60"
  >
    <div className="md:order-1">
      <img src={profilePicture} alt="profile" className="h-64 md:h-80 rounded-full" />
    </div>
    <div className="text-skyColor">
      <p className="text-base text-secondaryColor"></p>
      <h1 className="text-secondaryColor text-4xl md:text-5xl">I.E. 18169</h1>
      {
          fields.map((field) => (
            <div key={field} className="flex gap-4 mt-3">
              <CheckCircleIcon className="h-7" />
              <p className="m-px text-base">{field}</p>
            </div>
          ))
        }
      <Link to="/contact">
        <button
          type="button"
          className="bg-lightBlueColor mt-10 rounded px-6 py-2 w-50
      text-lg text-skyColor font-medium hover:bg-secondaryColor hover:text-primaryColor"
        >
          Contáctanos
        </button>
      </Link>
    </div>
  </motion.div>
);

export default HeroSection;
