import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const divBarberVariants = tv ({
    base: ' flex flex-col items-center gap-1',
    variants: {
        variant: {
            schedule: 'mt-14'
        }
    }
})
    
interface PerfilbarberProps extends VariantProps<typeof divBarberVariants> {
    children: ReactNode
    nome: string
}

export function PerfilBarber({children, nome, variant}: PerfilbarberProps) {
    return (
        <div className={divBarberVariants({variant})}>
            <h3 className="">{nome}</h3>
            <div className="flex gap-1 drop-shadow-lg">
                {children}
            </div>
        </div>
    )
}