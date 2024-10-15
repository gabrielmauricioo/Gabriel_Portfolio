'use client'
import Link from "next/link";
import { GridContainer } from "../GridContainer";
import { Button } from "../ui/button";

export function Cta(){
  const ctaWhatsapp = () => {
    const whatsappNumber = "5521987466501";
    const message = "Olá, gostaria de mais informações.";
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    window.open(url, 'blank')
 }

  return(
    <section className="">
      <GridContainer>
        <div className="flex flex-col items-center mb-2">
          <h2 className="text-2xl xl:text-3xl max-w-[780px] text-center mb-8 font-bold mt-20">Pronto para transformar suas ideias em realidade Estou aqui para ajudar.</h2>
          <Link href='/'>
            <Button 
              className="flex items-center bg-orange-main rounded-3xl text-lg xl:text-xl 
              text-white p-5 hover:text-slate-900 transition-colors ease-in delay-90" 
              variant='outline'
              onClick={ctaWhatsapp}
            >
              Contate-me
              </Button>
          </Link>
        </div>
      </GridContainer>
    </section>
  )
}