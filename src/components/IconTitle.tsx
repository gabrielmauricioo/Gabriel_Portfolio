import Image from "next/image";

interface TitleProps{
  title: string;
}

export function IconTitle({title}: TitleProps){
  return(
    <div className="flex gap-3 items-center justify-center">
      <Image
        src='/icon-g.svg'
        alt="Icone que fica ao lado do Titulo"
        width={20}
        height={18}
         />
      <h2 className="text-3xl font-semibold">{title}</h2>
    </div>

  )
}