import { Button } from "../../components/Button"
import { TimeGrid } from "../../components/timeGrid";
import { DateGrid } from "../../components/dateGrid";
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { ConfirmationModal } from "./confirmScheduleModal";


interface ScheduleModalProps {
    closeModalSchedule: () => void
    nome: string
    srcImg: string
    service: string | undefined
    price: string | undefined
}




export function ScheduleModal({ closeModalSchedule, nome, service, price, srcImg }: ScheduleModalProps) {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleScheduleClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = () => {
        toast.success('Agendado com sucesso!');
        setIsModalOpen(false);
    };


    return (
        <div className="fixed z-20 inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-amber-500 shadow-shape w-80  rounded-lg px-4 py-6 space-y-6">
                <div className="flex bg-slate-100 rounded-lg items-center justify-between px-4 py-3">
                    <img className="size-16 rounded-full drop-shadow-lg" src={srcImg} alt="" />
                    <p className="font-semibold text-base">{nome}</p>
                </div>
                <div className="flex bg-slate-100 rounded-lg items-center justify-between p-4">
                    <p className="font-semibold">{service}</p>
                    <p className="font-semibold">{price}</p>
                </div>
                <div className="flex flex-col gap-1 bg-slate-100 rounded-lg items-center justify-between p-4">
                    <p className="font-bold">Escolha a data</p>
                    <DateGrid />
                </div>
                <div className="flex flex-col gap-1 bg-slate-100 rounded-lg items-center justify-between p-4">
                    <div className="flex flex-col items-center gap-3">
                        <p className="font-bold">Escolha o horário</p>
                        <TimeGrid />

                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Button onClick={handleScheduleClick} >
                        Finalizar o agendamento
                    </Button>
                    <Toaster />

                    <ConfirmationModal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onConfirm={handleConfirm}
                    />
                    <Button onClick={closeModalSchedule} variant="secondary">
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    )
}