import Link from "next/link";
import { GridContainer } from "../GridContainer";
import { Badge, badgeVariants } from "@/components/ui/badge"

export function Header() {
  return (
    <header className="sticky top-0 w-full h-[80px] z-50 bg-white flex items-center">
      <GridContainer>
        <nav className="flex items-center justify-center">
          <ul className="flex gap-8 mt-2">
            <li>
              <Link href="#home" className="text-base font-semibold hover:text-orange-main transition-colors">Home</Link>
                                                                                                           
            </li>
            <li>
              <Link href="#sobre" className="text-base font-semibold hover:text-orange-main transition-colors">Sobre mim</Link>
                                                                                                           
            </li>
            <li>
              <Link href="#projetos" className="text-base font-semibold hover:text-orange-main transition-colors">Projetos</Link>                                                                                           
            </li>
          

          </ul>

        </nav>
      </GridContainer>
    </header>
  );
}