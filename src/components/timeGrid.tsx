import { useState } from 'react';


export function TimeGrid() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const times: string[] = [
    "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00"
  ];

  const handleSpanClick = (time:string) => {
    setSelectedTime(time);
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      {times.map((time, index) => (
        <span
          key={index}
          onClick={() => handleSpanClick(time)}
          className={`p-1 rounded-lg cursor-pointer ${
            selectedTime === time ? 'bg-amber-500' : ''
          }`}
        >
          {time}
        </span>
      ))}
    </div>
  );
}

