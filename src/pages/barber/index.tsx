import { ArrowLeftToLine, Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { PerfilBarber } from "../../components/perfilBarber";
import { Stars } from "../../components/stars";
import { useEffect, useState } from "react";
import axios from "axios";

interface BarberProps {
    id: string
    name: string
    src_img: string
    stars: boolean[]
}

//interface BarbersTypeCorrect { nome: string; srcImg: string; stars: boolean[] }[]

export function Barber() {

    const [searchBarber, setSearchBarber] = useState('')
    const [barbers, setBarbers] = useState<BarberProps[]>([])
    const navigate = useNavigate()
    const location = useLocation()
    const { formLoginData } = location.state as { formLoginData: { login: string; password: string } };

    function exitForLogin() {
        navigate('/')
    }

    function openSchedule(barber: BarberProps) {
        navigate('/schedule', { state: { barber } })
    }

    useEffect(() => {
        const fetchBarbers = async () => {
            try {
                const response = await axios.get('https://server-barbershop-e4q8.onrender.com/barber')
                const data = response.data
                if (Array.isArray(data)) {
                    setBarbers(data);
                } else {
                    console.log('A resposta não é um array:', data);
                }
                setBarbers(response.data)

            } catch (error) {
                console.log('Erro ao buscar os dados', error)
            }
        }

        fetchBarbers()
    }, [])

    const filteredBarbers = barbers.filter(barber => {
        return barber.name.toLowerCase().includes(searchBarber.toLowerCase());
    });

    return (

        <div className="px-7 pb-4">
            <div className="space-y-10">
                <nav className="mt-10">
                    <div className="flex justify-between items-center text-lg">
                        <ul>
                            <li>
                                <a onClick={exitForLogin}><ArrowLeftToLine className="size-7" /></a>
                            </li>
                        </ul>
                        <div className="flex items-baseline gap-2">
                            <span className="text-xs">Bem vindo(a): </span>
                            <p className="">{formLoginData.login}</p>
                        </div>
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

            {filteredBarbers.map((barber) => (
                <PerfilBarber
                    key={barber.id}
                    openSchedule={() => openSchedule(barber)}
                    name={barber.name}
                    srcImg={barber.src_img}
                >
                    <Stars
                        one={barber.stars[0] ? 'text-amber-500' : 'text-zinc-950'}
                        two={barber.stars[1] ? 'text-amber-500' : 'text-zinc-950'}
                        three={barber.stars[2] ? 'text-amber-500' : 'text-zinc-950'}
                        four={barber.stars[3] ? 'text-amber-500' : 'text-zinc-950'}
                        five={barber.stars[4] ? 'text-amber-500' : 'text-zinc-950'}
                    />

                </PerfilBarber>
            ))}

        </div>
    )
}