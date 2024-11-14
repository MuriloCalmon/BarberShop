import { ArrowLeft, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { ScheduleModal } from "./scheduleModal";
import { Stars } from "../../components/stars";
import { Services } from "./services";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


interface Service {
    service_name: string,
    price: string
}

export function Schedule() {

    const [isOpenConfirmSchedule, setIsOpenConfirmSchedule] = useState(false)
    const [services, setServices] = useState<Service[]>([])
    const [selectedBarber, setSelectedBarber] = useState<Service | null>(null);
    const location = useLocation()
    const { barber } = location.state


    function openModalSchedule(index: number) {
        setIsOpenConfirmSchedule(true)
        setSelectedBarber(services[index])
    }
    function closeModalSchedule() {
        setIsOpenConfirmSchedule(false)
    }

    useEffect(() => {
        const fetchServices = async () => {
            // Use o toast.promise para gerenciar notificações
            const toastId = toast.loading('Carregando...');

            try {
                const response = await axios.get(`https://server-barbershop-e4q8.onrender.com/services/${barber.id}`);

                const servicesArray: Service[] = response.data.map((resp: Service) => ({
                    service_name: resp.service_name,
                    price: resp.price
                }));

                setServices(servicesArray);
                //toast.success('Serviços carregados com sucesso!'); // Mensagem de sucesso
            } catch (error) {
                console.error('Error fetching services:', error);
                toast.error('Erro ao carregar os serviços!'); // Mensagem de erro
            } finally {
                toast.dismiss(toastId); // Dismiss a loading toast
            }
        };

        if (barber && barber.id) {
            fetchServices();
        }
    }, [barber.id, barber]);

    return (
        <div className="mt-28 bg-slate-100 min-h-screen rounded-tl-3xl">
            {/* <div className="bg-slate-200 h-screen w-screen absolute top-0 left-0 -z-50 "></div> */}
            {isOpenConfirmSchedule && selectedBarber && (
                <ScheduleModal
                    name={barber.name}
                    service={selectedBarber.service_name}
                    price={selectedBarber.price}
                    src_img={barber.src_img}
                    closeModalSchedule={closeModalSchedule} />
            )}

            <div onClick={() => window.history.back()} className="absolute top-6 w-screen px-6 cursor-pointer">
                <ArrowLeft />
            </div>

            <div className="drop-shadow-2xl flex gap-1 items-center absolute top-16 w-screen px-5">
                <img className="size-24 rounded-full" src={barber.src_img} alt="" />
                <div className="flex flex-col items-center">
                    <h3 className="mt-12">{barber.name}</h3>
                    <Stars
                        one={barber.stars[0] ? 'text-amber-500' : 'text-zinc-950'}
                        two={barber.stars[1] ? 'text-amber-500' : 'text-zinc-950'}
                        three={barber.stars[2] ? 'text-amber-500' : 'text-zinc-950'}
                        four={barber.stars[4] ? 'text-amber-500' : 'text-zinc-950'}
                        five={barber.stars[5] ? 'text-amber-500' : 'text-zinc-950'}
                    />
                </div>
                <Heart className="bg-slate-100 rounded-lg size-7 drop-shadow-lg" />
            </div>
            <div className="space-y-10 pt-20">
                <h2 className="text-amber-500 text-center font-bold">Lista de serviços</h2>
                {services.map(({ service_name, price }, index) => (<div key={index}>
                    <Services onClick={() => openModalSchedule(index)} service={service_name} value={price} />
                </div>
                ))}
            </div>
            <Toaster />
        </div>
    )
}