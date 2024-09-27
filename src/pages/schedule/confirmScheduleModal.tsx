import { Button } from "../../components/Button";

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    // appointmentDate: string; // Data do agendamento
}

export function ConfirmationModal({ isOpen, onClose, onConfirm }: ConfirmationModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-50">
            <div className="bg-slate-100 rounded-lg p-6 shadow-shape w-72">
                <h2 className="font-semibold mb-4">Confirmação de Agendamento</h2>
                <p className="mb-6 text-sm">Deseja confirmar?</p>
                <div className="flex justify-between gap-2">
                    <Button onClick={onConfirm} variant="schedule">
                        Confirmar
                    </Button>
                    <Button onClick={onClose}>
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    );
}