import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
    base: 'text-slate-100 rounded-lg w-full flex items-center justify-center gap-2 font-bold',
    variants: {
        variant: {
            primary: 'bg-zinc-950 p-4',
            secondary: 'outline outline-1 outline-slate-100 p-3',
            schedule:  'p-3 w-auto  font-bold bg-amber-500 rounded-lg'
        },

    },
    defaultVariants: {
        variant: 'primary',
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}


export function Button({ children, variant, ...props }: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({variant})} >
            {children}
        </button>
    )
}
