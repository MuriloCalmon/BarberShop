import { Heart } from "lucide-react";
import { useState } from "react";
import { ConfirmScheduleModal } from "./confirmScheduleModal";
import { Stars } from "../../components/stars";
import { Services } from "./services";
export function Schedule() {

    const [isOpenConfirmSchedule, setIsOpenConfirmSchedule] = useState(false)

    function openModalSchedule() {
        setIsOpenConfirmSchedule(true)
    }
    function closeModalSchedule() {
        setIsOpenConfirmSchedule(false)
    }

    return (
        <div className="bg-slate-100 h-screen max-h-screen mt-28 rounded-tl-3xl">
            {isOpenConfirmSchedule && (
                <ConfirmScheduleModal closeModalSchedule={closeModalSchedule} />
            )}
            <div className="flex gap-5 items-center absolute top-16 left-1/2 -ml-36">
                <img className="size-24 rounded-full drop-shadow-lg" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&i" alt="" />
                <div>
                    <h3 className="mt-12">Murilo Calmon</h3>
                    <Stars
                        one="text-amber-500"
                        two="text-amber-500"
                        three="text-amber-500"
                        four="text-zinc-950"
                        five="text-zinc-950" />
                </div>
                <Heart className="bg-slate-100 rounded-lg size-7 drop-shadow-lg" />
            </div>
            <div className="space-y-10 py-20">
                <h2 className="text-amber-500 text-center font-bold">Lista de serviços</h2>
                <Services onClick={openModalSchedule} title="Corte masculino" value="R$: 18,00" />
                <Services onClick={openModalSchedule} title="Corte masculino" value="R$: 18,00" />
                <Services onClick={openModalSchedule} title="Corte masculino" value="R$: 18,00" />
                <Services onClick={openModalSchedule} title="Corte masculino" value="R$: 18,00" />
            </div>
            <div className="flex flex-col gap-4 py-4 px-5 w-80 m-auto bg-amber-600 rounded-lg">
                <div className="flex items-center">
                    <h3 className="flex-1 text-slate-100 font-semibold">João Maria</h3>
                    <div className="flex items-center gap-1 drop-shadow-lg">
                        <Stars
                            one="text-slate-100 size-4"
                            two="text-slate-100 size-4"
                            three="text-slate-100 size-4"
                            four="text-slate-100 size-4"
                            five="text-slate-100 size-4" />
                    </div>
                </div>
                <p className="text-xs text-slate-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sapiente amet cupiditate iusto magni id eos laborum
                </p>
            </div>
        </div>
    )
}