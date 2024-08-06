import { Star } from "lucide-react";

interface StarsProps {
    one: string
    two: string
    three: string
    four: string
    five: string
}


export function Stars({five, four, one, three, two}: StarsProps) {
    return (
        <div className="flex gap-2">
            <Star className={one}/>
            <Star className={two} />
            <Star className={three} />
            <Star className={four} />
            <Star className={five} />
        </div>
    )
}