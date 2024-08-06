import { Heart, Star } from "lucide-react";
import { Button } from "../../components/Button";

export function Schedule() {
    return (
        <div className="bg-slate-100 h-screen max-h-screen mt-28 rounded-tl-3xl">
            <div className="flex gap-5 items-center absolute top-16 left-1/2 -ml-36">
                <img className="size-24 rounded-full drop-shadow-lg" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&i" alt="" />
                <div className=" flex flex-col items-center gap-1">
                    <h3 className="mt-12 font-semibold">Murilo Calmon</h3>
                    <div className="flex gap-1 drop-shadow-lg">
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-zinc-950" />
                    </div>
                </div>
                <Heart className="bg-slate-100 rounded-lg size-7 drop-shadow-lg" />
            </div>
            <div className="space-y-10 py-20">
                <h2 className="text-amber-500 text-center">Lista de serviços</h2>
                <div className="flex justify-around items-center">
                    <div className="">
                        <h4 className="font-semibold">Corte masculino</h4>
                        <span>R$: 18,00</span>
                    </div>
                    <Button variant="schedule">Agendar</Button>
                </div>
                <div className="flex justify-around items-center">
                    <div className="">
                        <h4 className="font-semibold">Corte masculino</h4>
                        <span>R$: 18,00</span>
                    </div>
                    <Button variant="schedule">Agendar</Button>
                </div>
                <div className="flex justify-around items-center">
                    <div className="">
                        <h4 className="font-semibold">Corte masculino</h4>
                        <span>R$: 18,00</span>
                    </div>
                    <Button variant="schedule">Agendar</Button>
                </div>
                <div className="flex justify-around items-center">
                    <div className="">
                        <h4 className="font-semibold">Corte masculino</h4>
                        <span>R$: 18,00</span>
                    </div>
                    <Button variant="schedule">Agendar</Button>
                </div>
            </div>
        </div>
    )
}