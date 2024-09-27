import { ArrowLeftToLine, Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { PerfilBarber } from "../../components/perfilBarber";
import { Stars } from "../../components/stars";




export function Barber() {

    const navigate = useNavigate()
    const location = useLocation()
    const { formData } = location.state as { formData: { login: string; password: string } };

    function openSchedule() {
        navigate('/schedule')
    }

    function exitForLogin() {
        navigate('/')
    }

    return (

        <div className="px-7">
            <div className="space-y-10 ">
                <nav className="mt-10">
                    <div className="flex justify-between text-lg">
                        <ul>
                            <li>
                                <a onClick={exitForLogin}><ArrowLeftToLine className="size-7" /></a>
                            </li>
                        </ul>
                        <p>{formData.login}</p>
                    </div>
                </nav>

                <div className="flex flex-col gap-2 items-center px-4 py-3 rounded-lg bg-zinc-900">
                    <p className="text-slate-100 shrink-0">Barbeiros Disponíveis</p>
                    <div className="flex bg-white p-1 rounded">
                        <input className="outline-none" type="text" name="" id="" />
                        <Search />
                    </div>
                </div>
            </div>

            <PerfilBarber openSchedule={openSchedule} nome="Murilo Calmon" srcImg="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&i">
                <Stars
                    one="text-amber-500"
                    two="text-amber-500"
                    three="text-amber-500"
                    four="text-amber-500"
                    five="text-amber-500" />
                    
            </PerfilBarber>

            {/* <PerfilBarber openSchedule={openSchedule} nome="Aria Stark" srcImg="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZmlsfGVufDB8fDB8fHww">
                <Stars
                    one="text-amber-500"
                    two="text-amber-500"
                    three="text-amber-500"
                    four="text-zinc-900"
                    five="text-zinc-900" />
            </PerfilBarber>

            <PerfilBarber openSchedule={openSchedule} nome="Roberto" srcImg="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyZmlsfGVufDB8fDB8fHww">
                <Stars
                    one="text-amber-500"
                    two="text-amber-500"
                    three="text-amber-500"
                    four="text-amber-500"
                    five="text-zinc-900" />
            </PerfilBarber> */}
        </div>
    )
}