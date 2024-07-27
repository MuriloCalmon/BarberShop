import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
    base: 'rounded-lg w-full flex items-center justify-center gap-2 font-bold',
    variants: {
        variant: {
            primary: 'bg-black text-white p-5',
            secondary: 'outline outline-1 outline-slate-100 text-white p-4'
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
