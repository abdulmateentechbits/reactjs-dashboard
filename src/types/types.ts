export interface InputFieldProps {
    label: string;
    name: string;
    type: string; // "email" | "password"
    placeholder?: string;
}

export interface LoginFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface LoginState {
    email: string;
    password: string;
}