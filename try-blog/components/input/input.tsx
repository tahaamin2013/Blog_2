'use client'


interface InputProps {
    type: any,
    value: any,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
    id: string
    placeholder?: string
    big?: boolean
}


export default function Input({ type, value, onChange, name, id, placeholder, big }: InputProps) {
    return (
        <input id={id} placeholder={placeholder} type={type} value={value} onChange={onChange} name={name}
        className={`w-full p-4 pt-6 font-light bg-white border-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed text-black        
        ${big ? 'w-[400px] pb-[6rem]' : ''}`} />
    )
}
