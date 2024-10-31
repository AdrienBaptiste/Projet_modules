// components/organisms/LoginForm.tsx
import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Checkbox from '../atoms/Checkbox';
import CustomLink from '../atoms/CustomLink';

interface LoginFormProps {
    onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-1/2 p-4">
            <div className="text-lg font-semibold">Login In</div>
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Login" />
            <div>
                <p>Keep me logged in</p>
                <Checkbox type="checkbox"/>
            </div>
            <Button label="Se connecter" onClick={onLogin} />
            <div className="flex">
                <p>Mot de passe oublié?</p>
                <CustomLink href="#" content="Réinitialiser"/>
            </div>
        </div>
    );
};

export default LoginForm;