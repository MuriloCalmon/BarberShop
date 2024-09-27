import { Button } from "../../components/Button"
import { TimeGrid } from "../../components/timeGrid";
import { DateGrid } from "../../components/dateGrid";
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { ConfirmationModal } from "./confirmScheduleModal";
interface ScheduleModalProps {
    closeModalSchedule: () => void
}




export function ScheduleModal({ closeModalSchedule }: ScheduleModalProps) {


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
                    <img className="size-16 rounded-full drop-shadow-lg" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&i" alt="" />
                    <p>Murilo Calmon</p>
                </div>
                <div className="flex bg-slate-100 rounded-lg items-center justify-between p-4">
                    <p>Murilo Calmon</p>
                    <p>R$: 18,00</p>
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