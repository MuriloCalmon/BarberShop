import { ComponentProps, ReactNode } from "react"



interface PerfilbarberProps extends ComponentProps<'div'> {
    children: ReactNode
    nome: string
    openSchedule: () => void | null
    srcImg: string
}

export function PerfilBarber({ children, nome, openSchedule, srcImg }: PerfilbarberProps) {
    return (
        <div onClick={openSchedule} className="mt-10 flex justify-evenly bg-white py-5 rounded-3xl">
            <div className="">
                <img className="size-16 rounded-full outline p-1" src={srcImg} alt="" />
            </div>
            <div className="flex flex-col items-center gap-1">
                <h3 className="">{nome}</h3>
                <div className="flex gap-1 drop-shadow-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}