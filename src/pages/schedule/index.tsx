import { ArrowLeft, Heart } from "lucide-react";
import { useState } from "react";
import { ScheduleModal } from "./scheduleModal";
import { Stars } from "../../components/stars";
import { Services } from "./services";
import { useLocation } from "react-router-dom";


interface Barber {
    service: string
    price: string
}



export function Schedule() {

    const [isOpenConfirmSchedule, setIsOpenConfirmSchedule] = useState(false)
    const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
    const location = useLocation()
    const { barber } = location.state


    function openModalSchedule(index: number) {
        setIsOpenConfirmSchedule(true)
        setSelectedBarber(servicesMan[index])
    }
    function closeModalSchedule() {
        setIsOpenConfirmSchedule(false)
    }

    const servicesMan = [
        {
            service: 'Corte masculino',
            price: 'R$: 18,00'
        },
        {
            service: 'Barba',
            price: 'R$: 8,00'
        }, 
        {
            service: 'Bigode',
            price: 'R$: 5,00'
        }, 
        {
            service: 'Barba e bigode',
            price: 'R$: 13,00'
        }, 
        {
            service: 'Completo',
            price: 'R$: 25,00'
        }, 
    ]


    return (
        <div className="mt-28 bg-slate-100 min-h-screen rounded-tl-3xl">
            {/* <div className="bg-slate-200 h-screen w-screen absolute top-0 left-0 -z-50 "></div> */}
            {isOpenConfirmSchedule && (
                <ScheduleModal nome={barber.nome} service={selectedBarber?.service} price={selectedBarber?.price} srcImg={barber.srcImg} closeModalSchedule={closeModalSchedule} />
            )}
            
            <div onClick={() => window.history.back()} className="absolute top-6 left-1/2 -ml-36 cursor-pointer">
                <ArrowLeft />
            </div>
            
            <div className="drop-shadow-2xl flex gap-5 items-center absolute top-16 left-1/2 -ml-36">
                <img className="size-24 rounded-full" src={barber.srcImg} alt="" />
                <div>
                    <h3 className="mt-12">{barber.nome}</h3>
                    <Stars
                        one={barber.stars[0] ? 'text-amber-500' : 'text-zinc-950'}
                        two={barber.stars[1] ? 'text-amber-500' : 'text-zinc-950'}
                        three={barber.stars[2] ? 'text-amber-500' : 'text-zinc-950'}
                        four={barber.stars[4] ? 'text-amber-500' : 'text-zinc-950'}
                        five={barber.stars[5] ? 'text-amber-500' : 'text-zinc-950'}
                    />
                </div>
                <Heart className="bg-slate-100 rounded-lg size-7 drop-shadow-lg" />
            </div>
            <div className="space-y-10 pt-20">
                <h2 className="text-amber-500 text-center font-bold">Lista de serviços</h2>
                {servicesMan.map(({ service, price }, index) => (<div>
                    <Services onClick={() => openModalSchedule(index)} service={service} value={price} />
                </div>
                ))}
            </div>
            
        </div>
    )
}