import { Heart, Star } from "lucide-react";
import { Button } from "../../components/Button";
import { Calendar } from 'primereact/calendar';
export function Schedule() {
    return (
        <div className="bg-slate-100 h-screen max-h-screen mt-28 rounded-tl-3xl">
            <div className="fixed z-20 inset-0 bg-black/60 flex items-center justify-center">
                <div className="bg-amber-600 shadow-shape w-80 h-3/5 rounded-lg p-4 space-y-10">
                    <div className="flex bg-slate-100 rounded-lg items-center justify-between px-4 py-1">
                        <img className="size-16 rounded-full drop-shadow-lg" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&i" alt="" />
                        <p>Murilo Calmon</p>
                    </div>
                    <div className="flex bg-slate-100 rounded-lg items-center justify-between p-4">
                        <p>Murilo Calmon</p>
                        <p>R$: 18,00</p>
                    </div>
                    <div className="flex flex-col gap-3 bg-slate-100 rounded-lg items-center justify-between p-4">
                        <p>Escolha a data</p>
                        <Calendar showIcon showTime touchUI showButtonBar />
                    </div>
                    <Button>
                        Finalizar o agendamento
                    </Button>

                </div>
            </div>
            <div className="flex gap-5 items-center absolute top-16 left-1/2 -ml-36">
                <img className="size-24 rounded-full drop-shadow-lg" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&i" alt="" />
                <div className=" flex flex-col items-center gap-1">
                    <h3 className="mt-12 font-semibold">Murilo Calmon</h3>
                    <div className="flex gap-1 drop-shadow-lg">
                        <Star className="size-5 text-slate-100" />
                        <Star className="size-5 text-slate-100" />
                        <Star className="size-5 text-slate-100" />
                        <Star className="size-5 text-slate-100" />
                        <Star className="size-5 text-zinc-950" />
                    </div>
                </div>
                <Heart className="bg-slate-100 rounded-lg size-7 drop-shadow-lg" />
            </div>
            <div className="space-y-10 py-20">
                <h2 className="text-amber-500 text-center font-bold">Lista de serviços</h2>
                <div className="flex justify-around items-center">
                    <div className="">
                        <h4 className="font-bold">Corte masculino</h4>
                        <span>R$: 18,00</span>
                    </div>
                    <Button variant="schedule">Agendar</Button>
                </div>
                <div className="flex justify-around items-center">
                    <div className="">
                        <h4 className="font-bold">Corte masculino</h4>
                        <span>R$: 18,00</span>
                    </div>
                    <Button variant="schedule">Agendar</Button>
                </div>
                <div className="flex justify-around items-center">
                    <div className="">
                        <h4 className="font-bold">Corte masculino</h4>
                        <span>R$: 18,00</span>
                    </div>
                    <Button variant="schedule">Agendar</Button>
                </div>
                <div className="flex justify-around items-center">
                    <div className="">
                        <h4 className="font-bold">Corte masculino</h4>
                        <span>R$: 18,00</span>
                    </div>
                    <Button variant="schedule">Agendar</Button>
                </div>
            </div>
            <div className="flex flex-col gap-4 py-4 px-5 w-80 m-auto bg-amber-600 rounded-lg">
                <div className="flex items-center">
                    <h3 className="flex-1 text-slate-100 font-semibold">João Maria</h3>
                    <div className="flex items-center gap-1 drop-shadow-lg">
                        <Star className="size-4 text-slate-100" />
                        <Star className="size-4 text-slate-100" />
                        <Star className="size-4 text-slate-100" />
                        <Star className="size-4 text-slate-100" />
                        <Star className="size-4 text-slate-100" />
                    </div>
                </div>
                <p className="text-xs text-slate-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sapiente amet cupiditate iusto magni id eos laborum
                </p>
            </div>
        </div>
    )
}