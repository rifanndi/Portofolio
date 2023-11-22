import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A short story of me';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, i'm Rifandi</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
        I am Software Engineer proficient in TypeScript and well-versed in
        popular frameworks such as React JS, Next JS, Vue JS, and Nuxt Js. Not
        just coding. I am passionate about creating clean and efficient code,
        automating testing code, and implementing modern design principles to
        deliver intuitive user experiences. With my technical expertise, I am
        able to create highly performant and elegant solutions that are easy to
        maintain and scale. I am always eager to learn new technologies and
        improve my skills
      </p>
      <p>
      I'd suggest adding some specific examples or projects you've worked on to showcase your practical experience. Also, consider mentioning any specific achievements or outcomes from your projects, such as improved performance metrics, successful implementations, or positive user feedback.

Additionally, you might want to highlight your eagerness to learn new technologies and your commitment to skill improvement. Maybe mention any specific technologies or areas you're currently exploring or interested in.

Feel free to let me know if you'd like assistance with any other specific sections or if you have additional information you'd like to include!
      </p>
    </motion.section>
  );
};
