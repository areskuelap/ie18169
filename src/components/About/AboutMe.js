import { ChevronRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import personJuggling from '../../assets/images/person_juggling.gif';
import codeSnipped from '../../assets/images/code-snippet.png';

const stacks = [
  {
    name: 'Front end development', stack1: 'React JS', stack2: 'JavaScript', stack3: 'HTML & CSS', stack4: 'Tailwind',
  },
  {
    name: 'Back end development', stack1: 'Ruby On Rails', stack2: 'Ruby', stack3: 'Java', stack4: 'SQL',
  },
  {
    name: 'Tools', stack1: 'Wordpress', stack2: 'Netlify', stack3: 'Github & Git', stack4: 'VS Code',
  },
];

const AboutMe = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.1, duration: 0.8 }}
    className="mt-14 md:mt-24"
  >
    <div className="flex gap-3 ml-3 md:ml-0">
      <h2 className="text-2xl md:text-4xl">Acerca de</h2>
      <div className="border-b-2 w-3/5 mb-3 border-secondaryColor hr-about" />
    </div>
    <div className="flex flex-col md:flex-row mt-5 ml-4 mr-5 gap-5 text-base text-skyColor md:ml-1 about-text">
      <div className="flex flex-col gap-5 md:mt-3">
        <p>
        La Institución educativa Escuela 18169 se ubica en el distrito de Congón, provincia de Luya , tal I E compete a la UGEL LUYA que inspecciona el servicio educativo, que pertenece a la Dirección regional de educación DRE AMAZONAS. La Institución educativa Escuela 18169, es hablar más que una Institución Educativa, es un ambiente familiar, un equipo de profesionales eficientes que custodian para que los estudiantes se incorporen adecuadamente, tanto en su vida como personas como social y escolar.
        </p>
        <p>
        El novedoso sistema para evaluar debe responder a una evaluación diferente que respete niveles y procedimeintos de aprendizajes de los estudiantes, el sistema de evaluación constante es de forma diaria y semanal en actividades pedagógicas (AP) y evaluaciones para desarrollar (EPD) <br/> La institución Escuela 18169 busca perfeccionar personas acreditadas con una aumentada autoestima, conciencia, aptitudes sociales y una estable formación académica, moral y emocional para que puedan adquirir el éxito personal y profesional dentro de una sociedad contemporáneo y cambiante. <br/> En esta institucion educativa sabemos que en Congón esta institución educativa entrega una educación de alta calidad en un ambiente de estudio seguro, en donde nuestros alumnos logran su total crecimiento espiritual, físico, social, intelectual, moral y emocional.
        </p>
      </div>
    </div>
  </motion.div>
);

export default AboutMe;
