'use client'
import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { downloadFile } from './curriculo';
import Link from "next/link";

export function Hero() {

  const ctaWhatsapp = () => {
     const whatsappNumber = "5521983357561";
     const message = "Olá, gostaria de mais informações.";
     const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

     window.open(url, 'blank')
  }

  const handleDownload = () =>  {
    downloadFile('/curriculo-gabriel.pdf'); 
  };

  return (
    <section className="mt-20 xl:mt-24 md:mt-36" id="home">
      <GridContainer>
        <div className="flex flex-col  lg:flex-row justify-between items-center gap-6 md:gap-3">
          <div>
            <h1 className="font-semibold text-4xl text-center sm:text-5xl  lg:text-6xl xl:text-left lg:text-left text-slate-900 w-full max-w-full lg:max-w-[577px] mb-5 leading-tight">
              Olá, meu nome é Gabriel Maurício
            </h1>
            <h3 className="text-slate-700 text-center text-lg sm:text-xl lg:text-2xl lg:text-left xl:text-left font-light w-full max-w-full lg:max-w-[730px]">
              Analista de Dados com experiência prática em ETL para apoiar decisões estratégicas. Tenho sólida base em ferramentas de análise e visualização de dados, 
              unindo pensamento analítico e clareza na comunicação para transformar números em insights acionáveis.
            </h3>
            <div className="flex flex-col sm:flex-row mt-8 gap-4 justify-center xl:justify-start">
              <Button
                className="flex items-center bg-orange-main rounded-3xl text-lg sm:text-xl p-4 sm:p-6"
                variant="outline"
                onClick={ctaWhatsapp}
              >
                <p className="flex items-center gap-3 hover:text-white transition-colors ease-in delay-90">
                  Me chama aqui <FontAwesomeIcon icon={faWhatsapp} className="w-4 sm:w-5" />
                </p>
              </Button>
              
              <Button
                className="flex items-center bg-slate-950 rounded-3xl text-lg sm:text-xl text-white p-4 sm:p-6"
                variant="outline"
                onClick={handleDownload}
              >
                <p className="flex items-center gap-3 hover:text-orange-main transition-colors ease-in delay-90">
                  Download CV <FontAwesomeIcon icon={faDownload} className="w-4 sm:w-5" />
                </p>
              </Button>
            </div>
          </div>
          <Image
            src='/eu.svg'
            width={460}   
            height={479}  
            alt="Foto do Gabriel Mauricio"
            className="mt-8 lg:mt-0"
            loading="lazy"
          />
        </div>
      </GridContainer>
    </section>
  );
}
