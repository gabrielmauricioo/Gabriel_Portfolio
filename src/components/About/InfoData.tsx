import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faCalendar, faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons';


{ /* Informações Pessoais*/}
export const infoDatas = [
  {
    icon: <FontAwesomeIcon icon={faUser}  />,
    text: 'Gabriel Mauricio',
  },
  {
    icon: <FontAwesomeIcon icon={faPhone} />,
    text: '+55 (21) 9833-57561'
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    text: 'mauriciorjgabriel@gmail.com'
  },
  {
    icon: <FontAwesomeIcon icon={faCalendar} />,
    text: '24/09/1998'
  },
  {
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    text: 'Análise e Desenvolvimento de Sistemas'
  },
  {
    icon: <FontAwesomeIcon icon={faHouse} />,
    text: 'Rio de Janeiro, Brasil'
  },
];

 
{ /* Qualificações*/}

export type Item = {
  title: string;
  data: ExperienceItem[];
  
};

 export  type ExperienceItem = {
  company: string;
  role: string;
  years: string;
};

export type SkillsName = {
  name: string;
}

export const qualificationData: Item[] = [
  {
    title: 'education',
    data: [
      {
        company: 'Análise de Desenvolvimento de Sistemas' ,
        role: 'Ensino Superior',
        years: '2024 - 2027',
      },
      {
        company: 'Olabi' ,
        role: 'Ciclo Formativo Front-end ',
        years: '2024',
      },
      {
        company: 'Open English' ,
        role: 'Certificado Level 1',
        years: '2024',
      },
      {
        company: 'Siele ' ,
        role: 'Certificado de Proficiência',
        years: '2021',
      }
    ]
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Quaker Houghton' ,
        role: 'Estágio de Suporte de TI',
        years: '2022 - 2024',
      },
      {
        company: 'Freelancer' ,
        role: 'Desenvolvedor Web',
        years: 'Atual',
      }
    ]
  }

]

