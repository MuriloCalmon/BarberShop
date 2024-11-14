import { Button } from "../../components/Button"
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { ConfirmationModal } from "./confirmScheduleModal";
import { DateTimeGrid } from "./dateTime";


interface ScheduleModalProps {
    closeModalSchedule: () => void
    name: string
    src_img: string
    service: string | undefined
    price: string | undefined
}




export function ScheduleModal({ closeModalSchedule, name, service, price, src_img }: ScheduleModalProps) {

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
                    <img className="size-16 rounded-full drop-shadow-lg" src={src_img} alt="" />
                    <p className="font-semibold text-base">{name}</p>
                </div>
                <div className="flex bg-slate-100 rounded-lg items-center justify-between p-4">
                    <p className="font-semibold">{service}</p>
                    <p className="font-semibold">{price}</p>
                </div>
                <div className="flex flex-col gap-1 bg-slate-100 rounded-lg items-center justify-between p-4">
                    <DateTimeGrid />
                </div>
                <div className="flex flex-col gap-4">
                    <Button onClick={handleScheduleClick} >
                        Finalizar o agendamento
                    </Button>
                    <Toaster toastOptions={{ duration: 2000 }} />

                    <ConfirmationModal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onConfirm={handleConfirm}
                    />
                    <Button onClick={closeModalSchedule} variant="secondary">
                        Voltar
                    </Button>
                </div>
            </div>
        </div>
    )
}