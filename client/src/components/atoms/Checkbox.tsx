// components/atoms/Checkbox.tsx
import React from 'react';

interface CheckboxProps {
  type: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ type }) => {
  return (
    <input type={type} />
  );
};

export default Checkbox;