import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

export function DateTimeGrid() {
    const location = useLocation()
    const { barber } = location.state
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [times, setTimes] = useState<string[]>([]);
    const [dates, setDates] = useState<string[]>([]);

    useEffect(() => {
        const fetchDateTime = async () => {
            const toastDateTime = toast.loading('Carregando...')
            try {
                const response = await axios.get(`https://server-barbershop-e4q8.onrender.com/datetime/${barber.id}`)
                const dateTime = response.data[0]
                const datesArray = JSON.parse(dateTime.date.replace(/{/g, '[').replace(/}/g, ']'));
                const timesArray = JSON.parse(dateTime.time.replace(/{/g, '[').replace(/}/g, ']'));
                setDates(datesArray)
                setTimes(timesArray)
            } catch (error) {
                console.error('Error fetching dados:', error);
                toast.error('Erro ao carregar os dados!');
            } finally {
                toast.dismiss(toastDateTime)
            }
        }

        if (barber.id) {
            fetchDateTime()
        }
    }, [barber.id])

    const handleSpanClickDate = (date: string) => {
        setSelectedDate(date);
    };

    const handleSpanClickTime = (time: string) => {
        setSelectedTime(time);
    };

    return (
        <div className='space-y-10'>

            <div className='flex flex-col gap-2'>
                <p className="font-bold text-center">Escolha a data</p>
                <div className="grid grid-cols-4 gap-3  text-zinc-500">
                    {dates.map((date, index) => (
                        <span
                            key={index}
                            onClick={() => handleSpanClickDate(date)}
                            className={`p-1 rounded-lg cursor-pointer ${selectedDate === date ? 'bg-amber-500' : ''
                                }`}
                        >
                            {date}
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <p className="font-bold text-center">Escolha o horário</p>
                <div className="grid grid-cols-4 gap-3 text-zinc-500">
                    {times.map((time, index) => (
                        <span
                            key={index}
                            onClick={() => handleSpanClickTime(time)}
                            className={`p-1 rounded-lg cursor-pointer ${selectedTime === time ? 'bg-amber-500' : ''
                                }`}
                        >
                            {time}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

