import { ComponentProps } from "react";
import { Button } from "../../components/Button";

interface ServicesProps extends ComponentProps<'button'> {
    service: string
    value: string
}


export function Services({ service, value, ...props }: ServicesProps) {
    return (
        <div className="flex px-7">
            <div className="flex flex-1 items-start">
                <div className="">
                    <h4 className="font-bold text-amber-600">{service}</h4>
                    <span className="">{value}</span>
                </div>
            </div>
            <div>
                <Button {...props} variant="schedule">Agendar</Button>
            </div>
        </div>
    )
}