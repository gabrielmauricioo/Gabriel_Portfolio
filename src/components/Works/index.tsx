'use client'
import Image from "next/image";
import { GridContainer } from "../GridContainer";
import Link from "next/link";
import { Button } from "../ui/button";


// import swiper react components

import {Swiper, SwiperSlide} from "swiper/react";

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// irequired modules
import { Pagination} from "swiper/modules";




// components
import { ProjectCard, projectData, projectDataProps } from "../ProjectCard";

export function Works(){
  return(
    <section className="relative mb-12 xl:mb-80" id="projetos">
      <GridContainer  >
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0  text-center xl:text-left mb-32  xl:h-[400px] flex flex-col justify-center items-center xl:items-start xl:mb-0">
          <div className="flex gap-x-3 mb-8 xl:mb-4">
            <Image
            src='/icon-g.svg'
            alt="Icone que fica ao lado do Titulo"
            width={20}
            height={18}
            />
            <h2 className="text-3xl font-semibold">Últimos projetos</h2>
          </div>
          <p className="mb-6 text-lg text-slate-800 xl:text-left text-center "> Confira alguns dos projetos desenvolvidos por Gabriel Mauricio, que destacam sua experiência e habilidades.</p>
          <Link href='https://www.psimaiasilva.site/' target="blank">
            <Button 
            className="bg-orange-main rounded-3xl text-base xl:text-xl p-6 hover:text-white transition-colors ease-in delay-90"
            variant='outline'
            >
              Veja o último projeto
            
            </Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[950px] xl:absolute xl:right-10 right-0 top-0 ">
          <Swiper className=" h-[590px]" slidesPerView={1} breakpoints={{
            640: {
                slidesPerView: 2
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{clickable: true}}
          >
            {/* show only first 4 projects for the slides */}
            {projectData.slice(0,4).map((project, index)=>{
              return(
                <SwiperSlide key={index}>
                  <ProjectCard project={project}/>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

      </GridContainer>
    </section>
  )
}