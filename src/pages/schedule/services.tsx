import { ComponentProps } from "react";
import { Button } from "../../components/Button";

interface ServicesProps extends ComponentProps<'button'> {
    title: string
    value: string
}


export function Services({title, value, ...props}:ServicesProps) {
    return (
        <div className="flex px-7">
            <div className="flex-1">
                <h4 className="font-bold text-amber-600">{title}</h4>
                <span className="">{value}</span>
            </div>
            <Button {...props} variant="schedule">Agendar</Button>
        </div>
    )
}