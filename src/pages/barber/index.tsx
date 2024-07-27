import { Search, Star } from "lucide-react";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";


export function Barber() {

    const navigate = useNavigate()


    function openschedule() {
        navigate('/schedule')
    }


    return (
        <div className="mt-28 px-7">
            <div className="flex justify-center mb-10">
                <h2 className="text-2xl">Barbeiros disponíveis</h2>
            </div>

            <Input label="" placeHolder="Pesquisar" type="text" variant="search">
                <Search />
            </Input>

            <div onClick={openschedule} className="mt-10 flex justify-around bg-white py-6 px-10 rounded-3xl">
                <div className="">
                    <img className="size-24" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="flex flex-col flex-1 gap-2 items-center">
                    <h3>Murilo Calmon</h3>
                    <p>+ de 10 atendimentos</p>
                    <div className="flex gap-1">
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                    </div>
                </div>
            </div>
            
            <div onClick={openschedule} className="mt-10 flex justify-around bg-white py-6 px-10 rounded-3xl">
                <div className="">
                    <img className="size-24" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="flex flex-col flex-1 gap-2 items-center">
                    <h3>Igor Sena</h3>
                    <p>+ de 24 atendimentos</p>
                    <div className="flex gap-1">
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                    </div>
                </div>
            </div>

            <div onClick={openschedule} className="mt-10 flex justify-around bg-white py-6 px-10 rounded-3xl">
                <div className="">
                    <img className="size-24" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="flex flex-col flex-1 gap-2 items-center">
                    <h3>Igor Sena</h3>
                    <p>+ de 24 atendimentos</p>
                    <div className="flex gap-1">
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                    </div>
                </div>
            </div>


        </div>
    )
}