import { useState } from 'react';

export function useToggle(initialValue: boolean = false): [boolean, () => void] {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggleValue = () => {
        setValue(prevValue => !prevValue);
    };

    return [value, toggleValue];
}