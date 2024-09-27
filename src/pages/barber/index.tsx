import { ArrowLeftToLine, Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { PerfilBarber } from "../../components/perfilBarber";
import { Stars } from "../../components/stars";
import { useState } from "react";

interface BarberProps {
    nome: string
    srcImg: string
    stars: boolean[]
}

export function Barber() {

    const [searchBarber, setSearchBarber] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const { formLoginData } = location.state as { formLoginData: { login: string; password: string } };

    function exitForLogin() {
        navigate('/')
    }

    const barbers = [
        {
            nome: 'Murilo Calmon',
            srcImg: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&i',
            stars: [true, true, true, true, true]
        },
        {
            nome: 'Aria Stark',
            srcImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZmlsfGVufDB8fDB8fHww',
            stars: [true, false, false, false, false]
        },
        {
            nome: 'Roberto dos Santos',
            srcImg: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZW18ZW58MHx8MHx8fDA%3D',
            stars: [true, true, false, false, false]
        },
        {
            nome: 'Maria dos Anjos',
            srcImg: 'https://plus.unsplash.com/premium_photo-1679440415182-c362deb2fd40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVsaGVyfGVufDB8fDB8fHww',
            stars: [true, true, true, true, false]
        },
    ];

    
    function openSchedule(barber: BarberProps) {
        navigate('/schedule', {state: {barber}})
    }


    const filteredBarbers = barbers.filter(barber =>
        barber.nome.toLowerCase().includes(searchBarber.toLowerCase())
    )


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
                        <p className=""><span className="text-xs">Bem vindo(a)</span> {formLoginData.login}</p>
                    </div>
                </nav>

                <div className="flex flex-col gap-2 items-center px-4 py-3 rounded-lg bg-zinc-900">
                    <p className="text-slate-100 shrink-0">Barbeiros Disponíveis</p>
                    <div className="flex bg-white p-1 rounded">
                        <input
                            className="outline-none"
                            type="text"
                            value={searchBarber}
                            onChange={(e) => setSearchBarber(e.target.value)}
                          />
                        <Search />
                    </div>
                </div>
            </div>

            {/* Filtra os barbeiros e  */}
            {filteredBarbers.map((barber, index)=> (
                <PerfilBarber
                    key={index}
                    openSchedule={() => openSchedule(barber)}
                    nome={barber.nome}
                    srcImg={barber.srcImg}
                >
                
                <Stars
                    one={barber.stars[0] ? 'text-amber-500': 'text-zinc-950'}
                    two={barber.stars[1] ? 'text-amber-500': 'text-zinc-950'}
                    three={barber.stars[2] ? 'text-amber-500': 'text-zinc-950'}
                    four={barber.stars[4] ? 'text-amber-500': 'text-zinc-950'}
                    five={barber.stars[5] ? 'text-amber-500': 'text-zinc-950'}
                />

                </PerfilBarber>
            ))}

        </div>
    )
}