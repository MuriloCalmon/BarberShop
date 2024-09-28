import { useState } from 'react';

export function DateGrid() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const dates: string[] = [
    "08/02", "09/02", "10/02", "11/02",
    "12/02", "13/02", "14/02", "15/02"
  ];

  const handleSpanClick = (date:string) => {
    setSelectedDate(date);
  };

  return (
    <div className="grid grid-cols-4 gap-3  text-zinc-500">
      {dates.map((date, index) => (
        <span
          key={index}
          onClick={() => handleSpanClick(date)}
          className={`p-1 rounded-lg cursor-pointer ${
            selectedDate === date ? 'bg-amber-500' : ''
          }`}
        >
          {date}
        </span>
      ))}
    </div>
  );
}

