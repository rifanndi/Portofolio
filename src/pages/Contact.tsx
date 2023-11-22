import { motion } from 'framer-motion';
import {
  IconBrandWhatsapp,
  IconBrandCampaignmonitor,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeadphones,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ContactCard } from '../components/ContactCard';

export const Contact = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Feel free to contact me';
  const iconStyles = { width: '100%', height: '100%' };
  const contacts = [
    {
      id: 1,
      name: 'Whatsapp',
      image: <IconBrandWhatsapp style={iconStyles} />,
      //description: '+62887676546',
     // link: 'https://wa.me/+62887676546',
    },
    {
      id: 2,
      name: 'Email',
      image: <IconBrandCampaignmonitor style={iconStyles} />,
      description: 'rifandiannass@gmail.com',
      link: 'mailto:rifandiannass@gmail.com',
    },
    {
      id: 3,
      name: 'Instagram',
      image: <IconBrandInstagram style={iconStyles} />,
      description: 'Rifandi annas ',
      link: 'https://www.instagram.com/rifa_annas',
    },
    {
      id: 4,
      name: 'Github',
      image: <IconBrandGithub style={iconStyles} />,
      description: 'Rifandi Annas Sharuri ',
      link: 'https://github.com/rifanndi',
    },
    {
      id: 5,
      name: 'Linkedin',
      image: <IconBrandLinkedin style={iconStyles} />,
      description: 'Rifandi Annas s',
      link: 'https://www.linkedin.com/in/Rifandiannasshahruri/',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconHeadphones />}
        label="Contact"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </motion.section>
  );
};
