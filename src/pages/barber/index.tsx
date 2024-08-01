import { Search, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";



export function Barber() {

    const navigate = useNavigate()



    function openschedule() {
        navigate('/schedule')
    }

    return (

        <div className="px-7">
            <div className="space-y-16 ">


                <nav className="mt-6">
                    <div className="flex justify-between text-lg">
                        <span>Barber<strong>Shop</strong></span>
                        <ul>
                            <li>
                                <a href="">Sair</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="flex gap-2 items-center px-4 py-3 rounded-lg bg-zinc-900">
                    <p className="text-xs text-slate-100 shrink-0">Barbeiros Disponíveis</p>
                    <Input variant="search" label="" placeHolder="" type="text">
                        <Search  />
                    </Input>
                </div>
            </div>


            <div onClick={openschedule} className="mt-10 flex justify-evenly bg-white py-3 rounded-3xl">
                <div className="">
                    <img className="size-16 rounded-full outline p-1" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&i" alt="" />
                </div>
                <div className="text-sm flex flex-col items-center gap-1">
                    <h3 className="">Murilo Calmon</h3>
                    <div className="flex gap-1">
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-zinc-950" />
                    </div>
                    <span className="text-xs">Ótimo</span>
                </div>
            </div>
            <div onClick={openschedule} className="mt-10 flex justify-evenly bg-white py-3 rounded-3xl">
                <div className="">
                    <img className="size-16 rounded-full outline p-1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZmlsfGVufDB8fDB8fHww" alt="" />
                </div>
                <div className="text-sm flex flex-col items-center gap-1">
                    <h3 className="">Aria Stark</h3>
                    <div className="flex gap-1">
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-zinc-950" />
                        <Star className="size-5 text-zinc-950" />
                    </div>
                    <span className="text-xs">Bom</span>
                </div>
            </div>
            <div onClick={openschedule} className="mt-10 flex justify-evenly bg-white py-3 rounded-3xl">
                <div className="">
                    <img className="size-16 rounded-full outline p-1" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyZmlsfGVufDB8fDB8fHww" alt="" />
                </div>
                <div className="text-sm flex flex-col items-center gap-1">
                    <h3 className="">João</h3>
                    <div className="flex gap-1">
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                    </div>
                    <span className="text-xs">Excelente</span>
                </div>
            </div>

        </div>
    )
}