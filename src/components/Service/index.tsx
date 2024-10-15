import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { IconTitle } from "../IconTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export function Service(){
  return(
    <section className="mt-48">
      <GridContainer>
          <div>
            <IconTitle title="Meus serviços"/>
          </div>
        <div className=" flex flex-col lg:flex-row justify-center items-center mt-16 lg:mt-32 gap-8 lg:gap-32">
          <Card className="w-full max-w-[380px] h-[250px] border-slate-950  flex justify-center items-center relative mb-10 xl:mb-0 ">
            <CardHeader className="bg-white px-7 py-2 absolute -top-[45px] ">
              <Image
                src='/icon-code.svg'
                alt="Ilustração de código de Programação"
                width={75}
                height={75}
                className=""
              />
            </CardHeader>
            <CardContent className="text-center mt-9">
              <Dialog>
                <DialogTrigger>
                  <CardTitle className="mb-4 hover:text-orange-main transition-colors ease-out 100ms">Desenvolvimento Web</CardTitle>
                  <CardDescription>Como desenvolvedor web especializado, minha principal área de atuação é o front-end, onde utilizo tecnologias modernas para criar interfaces altamente funcionais</CardDescription>
                </DialogTrigger>
                <DialogContent className=" p-12 bg-white rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-center mb-5">Desenvolvimento Web</DialogTitle>
                <DialogDescription className="text-center">
                  <p className="mb-2 text-[15px]">Como desenvolvedor web especializado, minha principal área de atuação é o front-end, onde utilizo tecnologias modernas para criar interfaces altamente funcionais e esteticamente agradáveis.</p>
                  <p className="mb-2 text-[15px]"> Tenho sólida experiência com frameworks e bibliotecas como <strong>React</strong> e <strong>Angular,</strong> além de linguagens como <strong>TypeScript</strong> e o poderoso <strong>Next.js</strong> para criar aplicações rápidas e escaláveis. Utilizo o <strong>Tailwind CSS</strong> para garantir que os designs sejam responsivos e adaptáveis a diferentes dispositivos.</p>
                  <p className="mb-2 text-[15px]">Com um olhar atento tanto para a performance quanto para a estética, consigo entregar projetos que não só atendem, mas superam as expectativas dos usuários, oferecendo uma experiência digital fluida e eficiente.</p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
              </Dialog>
            </CardContent>

          </Card>
          <Card className="w-full max-w-[380px] h-[250px] border-slate-950 flex justify-center items-center relative">
            <CardHeader className="bg-white px-7 py-2 absolute -top-[45px] ">
              <Image
                src='/icon-design.svg'
                alt="Ilustração de uma tela com um pincel, representando o design"
                width={75}
                height={75}
                className=""
              />
            </CardHeader>
            <CardContent className="text-center mt-9">
              <Dialog>
                <DialogTrigger>
                  <CardTitle className=" mb-4 hover:text-orange-main transition-colors ease-out 100ms">Design de Interfaces</CardTitle>
                  <CardDescription>Além do desenvolvimento, sou um profissional apaixonado por design de interfaces, com foco em criar experiências visuais que engajem os usuários e facilitem a interação.</CardDescription>
                </DialogTrigger>
                <DialogContent className=" p-12 bg-white rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-center mb-5">Design de Interfaces</DialogTitle>
                <DialogDescription className="text-center">
                  <p className="mb-2 text-[15px]">Apaixonado por <strong>design de interfaces</strong>, com foco em criar experiências visuais que engajem os usuários e facilitem a interação. Com o uso de ferramentas como <strong>Figma</strong>, realizo a criação de protótipos de alta fidelidade que permitem uma visualização clara do projeto antes de sua implementação.</p>
                  <p className="mb-2 text-[15px]">Cada decisão de design é tomada com o objetivo de melhorar a <strong>usabilidade</strong> e a <strong>experiência do usuário.</strong> Tenho um forte entendimento de como o design pode impactar a forma como os usuários interagem com a tecnologia, e trabalho para garantir que as interfaces sejam simples, intuitivas e eficazes.</p>
                </DialogDescription>
              </DialogHeader>
          
            </DialogContent>
              </Dialog>
            </CardContent>
            
          </Card>
        </div>
      </GridContainer>
    </section>
  )
}


