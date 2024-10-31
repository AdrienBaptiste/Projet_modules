// components/atoms/Input.tsx
import React from 'react';

interface InputProps {
    type: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type }) => {
    return (
        <input className="border-solid border-2 border-grey-200 rounded p-2 w-full" type={type} placeholder={placeholder} />
    );
};

export default Input;