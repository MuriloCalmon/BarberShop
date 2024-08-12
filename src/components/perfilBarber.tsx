import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const divBarberVariants = tv({
    base: ' flex flex-col items-center gap-1',
    variants: {
        variant: {
            schedule: 'mt-14'
        }
    }
})

interface PerfilbarberProps extends ComponentProps<'div'>, VariantProps<typeof divBarberVariants> {
    children: ReactNode
    nome: string
    openSchedule: () => void | null
    srcImg: string
}

export function PerfilBarber({ children, nome, variant, openSchedule, srcImg }: PerfilbarberProps) {
    return (

        <div onClick={openSchedule} className="mt-10 flex justify-evenly bg-white py-5 rounded-3xl">
            <div className="">
                <img className="size-16 rounded-full outline p-1" src={srcImg} alt="" />
            </div>
            <div className={divBarberVariants({ variant })}>
                <h3 className="">{nome}</h3>
                <div className="flex gap-1 drop-shadow-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}