import { useState } from 'react';

export const useInput = (initalValue) => {
    const [value, setValue] = useState(initalValue);
    return {
        value,
        setValue,
        reset: () => { setValue('') },
        bind: {
            value,
            onChange: (e) => {
                setValue(e.target.value);
            }
        }
    };
};