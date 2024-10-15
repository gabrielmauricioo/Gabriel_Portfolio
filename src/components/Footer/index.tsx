import { GridContainer } from "../GridContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import Link from "next/link";


export function Footer(){
  return(
    <footer className="mt-40 bg-slate-950">
      <GridContainer>
        <div className="p-10 flex flex-col items-center justify-center">
          <div className="flex  gap-x-5 mb-4" >
            <Link href='/'>
              <FontAwesomeIcon icon={faLinkedinIn} className="w-[24px] h-[24px] text-white hover:text-orange-main transition-all ease-in" />
            </Link>
            <Link href='/'>
              <FontAwesomeIcon icon={faGithub} className="w-[24px] h-[24px] text-white hover:text-orange-main transition-all ease-in" />
            </Link>
            <Link href='/'>
             <FontAwesomeIcon icon={faWhatsapp} className="w-[24px] h-[24px] text-white hover:text-orange-main transition-all ease-in" />
            </Link>
          </div>
          <div className="text-muted-foreground text-center">
            Copyright &copy; Gabriel Maurício. Todos direitos reservados
          </div>
        </div>
      </GridContainer>
    </footer>
  )
}
