import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const InputDivVariant =tv ({
    base: 'px-4 py-5 flex items-center bg-white',
    variants: {
        variant: {
            form: 'rounded-lg',
            search: 'rounded-3xl px-6 py-3'
        },
        
    },
    defaultVariants: {
        variant: 'form',
    }
})



interface InputProps extends VariantProps<typeof InputDivVariant> {
    label: string
    placeHolder: string
    children: ReactNode
    type: string
}

export function Input({placeHolder, variant, children, label, type}: InputProps) {
    return (
        <div className='flex flex-col gap-2'>
            <p className='font-medium'>{label}</p>
            <div className={InputDivVariant({variant})} >
                <input className='flex flex-1 w-full outline-none ' type={type} placeholder={placeHolder} />
                {children}
            </div>
        </div>
    )
}