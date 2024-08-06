import { ComponentProps } from "react";
import { Button } from "../../components/Button";

interface ServicesProps extends ComponentProps<'button'> {
    title: string
    value: string
}


export function Services({title, value, ...props}:ServicesProps) {
    return (
        <div className="flex justify-around items-center">
            <div className="">
                <h4 className="font-bold">{title}</h4>
                <span>{value}</span>
            </div>
            <Button {...props} variant="schedule">Agendar</Button>
        </div>
    )
}