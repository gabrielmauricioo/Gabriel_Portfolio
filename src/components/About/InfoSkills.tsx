export type Item2 = {
  title: string;
  data: SkillsName[]  ;
  
};

export type SkillsName = {
  name: string;
  
}





export const skillData: Item2[] = [
  {
    title: 'skills',
    data: [
      {
        name: 'Javascript, Typescript'
      },
      {
        name: 'React, Angular'
      },
      {
        name: 'Aws, Vercel'
      },
      {
        name:'Tailwind, Sass'
      },
      {
        name: 'Figma'
      }
    ]
  },
  {
    title: 'tools',
    data: [
      {
        name: './icon/icon-angular.svg'
      },
      {
        name: './icon/icon-react.svg'
      },
      {
        name: './icon/icon-aws.svg'
      },
      {
        name:'./icon/icon-figma.svg'
      },
      {
        name: './icon/icon-sass.svg'
      },
      {
        name: './icon/icon-tailwind.svg'
      },
      {
        name: './icon/icon-vercel.svg'
      },
      {
        name: './icon/icon-typescript.svg'
      },
      {
        name: './icon/icon-javascript.svg'
      },
      {
        name: './icon/icon-next.svg'
      }

    ]
  }


]