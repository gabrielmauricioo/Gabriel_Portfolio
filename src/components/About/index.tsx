import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { IconTitle } from "../IconTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { infoDatas, qualificationData, Item, ExperienceItem} from "./InfoData";
import { skillData, Item2, SkillsName} from "./InfoSkills";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faGraduationCap} from '@fortawesome/free-solid-svg-icons';




export function About(){
  const getData = (arr: Item[], title: string): Item | undefined => {
    return arr.find((item) => item.title === title);
  };
  const getData2 = (arr: Item2[], title: string): Item2 | undefined => {
    return arr.find((item) => item.title === title);
  };
  return(
    <section className="mt-56 mb-56" id="sobre">
      <GridContainer className="">
        <div className=" mb-20 xl:mb-32">
          <IconTitle title="Sobre mim"/>
        </div>
        <div className="flex flex-col justify-center items-center xl:flex-row xl:items-start gap-x-32">
          <Image
            src='/eu2.svg'
            alt="Foto do Gabriel Mauricio"
            width={383}
            height={344}
          />
          <div className=" flex xl:flex-1">
            <Tabs defaultValue="pessoal">
              <TabsList className="w-full grid grid-cols-1 xl:grid-cols-3 xl:max-w-[520px] border mx-auto xl:mx-0 mt-10 xl:mt-0">
                <TabsTrigger value="pessoal">Informação Pessoal</TabsTrigger>
                <TabsTrigger className="w-auto" value="qualificacao">Qualificações</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-8">
                {/* tabs pessoal */}
                <TabsContent value="pessoal">
                  <div className="text-center xl:text-left">
                    <h3 className="text-2xl font-semibold mb-4 ">Inovação e Qualidade no Desenvolvimento</h3>
                    <p className="text-base text-gray-600 max-w-xl mx-auto xl:mx-0 ">Ofereço entregas de soluções tecnológicas de alta qualidade. Experiência sólida em desenvolvimento web, com foco em eficiência, inovação e atendimento às necessidades dos clientes.</p>
                    <div className="grid xl:grid-cols-2 gap-6 mb-12 mt-8 text-center xl:text-left">
                      {infoDatas.map((item, index)=> {
                        return <div key={index} className="flex items-center gap-x-4 mx-auto xl:mx-0" >
                          <div className="text-orange-main">{item.icon}</div>
                          <div className="text-base text-slate-800">{item.text}</div>
                        </div>
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-orange-main">Idiomas falados</div>
                      <div className="border-b border-border"></div>
                      <div>English, Spanish and Portugues</div>
                    </div>
                  </div>
                </TabsContent>
                {/* tabs qualificação */}
                <TabsContent value="qualificacao"> 
                  <div>
                    <h3 className="text-[22px] xl:text-2xl font-semibold mb-8 text-center xl:text-left"> Minha Jornada</h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8 ">
                      {/* experience */}
                      <div className="flex flex-col ga-y-6">
                        <div className="flex gap-x-4 items-center text-xl xl:text-[22px] text-orange-main mb-8">
                          <FontAwesomeIcon icon={faSuitcase}  />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'experience')?.title}
                          </h4>
                        </div>
                        {/* list*/}
                        <div className=" flex flex-col gap-y-8 ">
                          {getData(qualificationData, 'experience')?.data.map((item: ExperienceItem, index: number) => {
                            const {company, role, years} = item;
                            return (
                              <div className=" flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-orange-main absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-lg xl:text-xl leading-none mb-2">{company}</div>
                                  <div className=" text-base xl:text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                  <div className=" text-sm xl:text-base font-medium">{years}</div>
                                </div>

                              </div>
                            )
                          })}
                        </div>
                      </div>
                      {/* education*/}
                      <div className="flex flex-col ga-y-6">
                        <div className="flex gap-x-4 items-center text-xl xl:text-[22px] text-orange-main mb-8 ">
                          <FontAwesomeIcon icon={faGraduationCap}  />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'education')?.title}
                          </h4>
                        </div>
                        {/* list*/}
                        <div className=" flex flex-col gap-y-8 ">
                          {getData(qualificationData, 'education')?.data.map((item: ExperienceItem, index: number) => {
                            const {company, role, years} = item;
                            return (
                              <div className=" flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-orange-main absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div className="">
                                  <div className=" font-semibold text-lg xl:text-xl leading-none mb-2 ">{company}</div>
                                  <div className="text-base xl:text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                  <div className=" text-sm xl:text-base font-medium">{years}</div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* tabs skills */}
                <TabsContent value="skills">
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold mb-8 text-center xl:text-left">O que utilizo</h3>
                  </div>
                  <div className="mb-16">
                    <h4 className="text-xl font-semibold mb-2 text-center xl:text-left">Hard skilss</h4>
                    <div className="border-b border-border mb-8 xl:mb-4"></div>
                    { /* skill list*/}
                    <div >
                      {getData2(skillData, 'skills')?.data.map((item: SkillsName, index: number)=>{
                        const {name} = item;
                        return (
                          <div  className="w-2/4 xl:text-left xl:mx-0 mx-auto text-center mb-1"
                            key={index}>
                            <div className="font-medium text-slate-700">{name}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left text-center ">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex flex-wrap gap-4">
                        {getData2(skillData, 'tools')?.data.map((item: SkillsName, index: number)=>{
                        const {name} = item;
                        return (
                          <div className=" w-10 xl:flex xl:flex-row xl:w-auto mt-2 items-center justify-center ml-7 xl:ml-0"
                            key={index}>
                              <Image
                                src={name}
                                width={60}
                                height={40}
                                alt="fuk"
                                priority
                                
                              
                              />
                          </div>
                        )
                      })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </GridContainer>
    </section>
  )
}