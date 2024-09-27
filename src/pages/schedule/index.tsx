import { Heart } from "lucide-react";
import { useState } from "react";
import { ScheduleModal } from "./scheduleModal";
import { Stars } from "../../components/stars";
import { Services } from "./services";
import { Button } from "../../components/Button";
import { useLocation } from "react-router-dom";

export function Schedule() {

    const [isOpenConfirmSchedule, setIsOpenConfirmSchedule] = useState(false)
    const location = useLocation()
    const { barber } = location.state


    function openModalSchedule() {
        setIsOpenConfirmSchedule(true)
    }
    function closeModalSchedule() {
        setIsOpenConfirmSchedule(false)
    }

    const servicesMan = [
        {
            title: 'Corte masculino',
            price: 'R$: 18,00'
        },
        {
            title: 'Barba',
            price: 'R$: 8,00'
        }, 
        {
            title: 'Bigode',
            price: 'R$: 5,00'
        }, 
        {
            title: 'Barba e bigode',
            price: 'R$: 13,00'
        }, 
        {
            title: 'Completo',
            price: 'R$: 25,00'
        }, 
    ]


    return (
        <div className="bg-slate-100 h-screen max-h-screen mt-28 rounded-tl-3xl">
            {isOpenConfirmSchedule && (
                <ScheduleModal closeModalSchedule={closeModalSchedule} />
            )}
            <div className="flex gap-5 items-center absolute top-16 left-1/2 -ml-36">
                <img className="size-24 rounded-full drop-shadow-lg" src={barber.srcImg} alt="" />
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
            <div className="space-y-10 py-20">
                <h2 className="text-amber-500 text-center font-bold">Lista de serviços</h2>
                {servicesMan.map(({ title, price }) => (
                    <Services onClick={openModalSchedule} title={title} value={price} />
                ))}
            </div>

            <div className="px-16">
                <Button onClick={() => window.history.back()}>
                    Voltar
                </Button>
            </div>
        </div>
    )
}