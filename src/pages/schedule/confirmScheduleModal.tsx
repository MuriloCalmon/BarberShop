import { Button } from "../../components/Button"

interface ConfirmScheduleModalProps {
    closeModalSchedule: () => void
}

export function ConfirmScheduleModal({ closeModalSchedule }: ConfirmScheduleModalProps) {
    return (
        <div className="fixed z-20 inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-amber-500 shadow-shape w-80  rounded-lg p-4 space-y-6">
                <div className="flex bg-slate-100 rounded-lg items-center justify-between px-4 py-1">
                    <img className="size-16 rounded-full drop-shadow-lg" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&i" alt="" />
                    <p>Murilo Calmon</p>
                </div>
                <div className="flex bg-slate-100 rounded-lg items-center justify-between p-4">
                    <p>Murilo Calmon</p>
                    <p>R$: 18,00</p>
                </div>
                <div className="flex flex-col gap-1 bg-slate-100 rounded-lg items-center justify-between p-4">
                    <p>Escolha a data</p>
                    <input type="date" name="" id="" className="p-2 rounded-lg border-none bg-slate-100 text-zinc-900 text-center" />
                </div>
                <div className="flex flex-col gap-1 bg-slate-100 rounded-lg items-center justify-between p-4">
                    <p>Escolha o horário</p>
                    <input type="time" name="" id="" className="p-2 rounded-lg border-none bg-slate-100 text-zinc-900 text-center" />
                </div>
                <div className="flex flex-col gap-4">
                    <Button >
                        Finalizar o agendamento
                    </Button>
                    <Button onClick={closeModalSchedule} variant="secondary">
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    )
}