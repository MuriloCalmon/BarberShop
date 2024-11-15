import { ComponentProps, ReactNode } from "react"



interface PerfilbarberProps extends ComponentProps<'div'> {
    children: ReactNode
    name: string
    openSchedule: () => void | null
    srcImg: string
}

export function PerfilBarber({ children, name, openSchedule, srcImg }: PerfilbarberProps) {
    return (
        <div onClick={openSchedule} className="mt-10 flex justify-evenly bg-white py-5 rounded-3xl">
            <div className="">
                <img className="size-16 rounded-full" src={srcImg} alt="" />
            </div>
            <div className="flex flex-col items-center gap-1">
                <h3 className="">{name}</h3>
                <div className="flex gap-1 drop-shadow-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}