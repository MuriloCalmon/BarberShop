import { User, Lock, EyeOff, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { useToggle } from "../../hook/useToogle";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
export function Register() {

    const navigate = useNavigate()

    function handleSubmitForLogin() {
        navigate('/')
    }

    const [isToggled, toggle] = useToggle(false);

    const [userDataRegister, setUserDataRegister] = useState({
        login: '',
        password: '',
        confirmPassword: ''
    })

    const registerSchema = z.object({
        login: z.string()
            .min(4, 'Login precisa ter no mínimo 4 caracteres')
            .max(14, 'Login com no máximo 12 caracters'),
        password: z.string()
            .min(6, 'Senha precisa ter no mínimo 6 caracteres'),
        confirmPassword: z.string()
            .min(6, 'Senha precisa ter no mínimo 6 caracteres')
    })
        .refine((data) =>
            (data.password === data.confirmPassword),
            { message: 'Senhas precisam ser iguais', path: ['confirmPassword'] }
        )

    type RegisterSchema = z.infer<typeof registerSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema)
    })

    function handleSubmitRegister() {
        const { login, password, confirmPassword } = userDataRegister

        const myRequest = axios({
            method: 'post',
            url: 'https://server-barbershop-e4q8.onrender.com/user',
            data: {
                login,
                password,
                confirmPassword
            },
        })

        toast.promise(myRequest, {
            loading: 'Loading',
            success: 'Criado com sucesso',
            error: 'Ocorreu um erro'
        })

    }
    return (
        <div className='space-y-8 h-full mt-16'>
            <div className='flex justify-center min-w-80 m-auto'>
                <img className='size-48' src="barber.png" alt="barbeiro logo" />
            </div>
            <form onSubmit={handleSubmit(handleSubmitRegister)}>

                <div className='px-7 m-auto space-y-10'>
                    <div className='space-y-4'>
                        <div>
                            <label>Login</label>
                            <div className="p-4 flex justify-between items-center bg-white rounded-lg">
                                <input className="outline-none"
                                    type="text"
                                    id="login"
                                    placeholder="Informe seu login"
                                    {...register("login")}
                                    onChange={(e) => {
                                        setUserDataRegister({ ...userDataRegister, login: e.target.value })
                                    }}
                                />
                                <User className="size-5 text-zinc-900" />
                            </div>
                            {errors.login && <span className="text-xs text-red-600">{errors.login.message}</span>}
                        </div>

                        <div>
                            <label>Senha</label>
                            <div className="p-4 flex justify-between items-center bg-white rounded-lg">
                                <input className="outline-none w-4/5"
                                    type={isToggled ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Informe sua senha"
                                    {...register('password')}
                                    onChange={(e) => {
                                        setUserDataRegister({ ...userDataRegister, password: e.target.value })
                                    }}
                                />
                                {isToggled ? <EyeOff className="size-5" onClick={toggle} /> : <Eye className="size-5" onClick={toggle} />}
                                <Lock className="size-5 text-zinc-900" />
                            </div>
                            {errors.password && <span className="text-xs text-red-600">{errors.password.message}</span>}
                        </div>
                        <div>
                            <div className="p-4 flex justify-between items-center bg-white rounded-lg">
                                <input className="outline-none w-4/5"
                                    type={isToggled ? 'text' : 'password'}
                                    id="confirm_password"
                                    placeholder="Confirme sua senha"
                                    {...register('confirmPassword')}
                                    onChange={(e) => {
                                        setUserDataRegister({ ...userDataRegister, confirmPassword: e.target.value })
                                    }}
                                />
                                {isToggled ? <EyeOff className="size-5" onClick={toggle} /> : <Eye className="size-5" onClick={toggle} />}
                                <Lock className="size-5 text-zinc-900" />
                            </div>
                            {errors.confirmPassword && <span className="text-xs text-red-600">{errors.confirmPassword.message}</span>}
                        </div>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <Button type="submit">
                            Cadastrar
                        </Button>
                        <p className="text-right mr-1 text-slate-100 text-sm cursor-pointer" onClick={handleSubmitForLogin}>Fazer login</p>
                    </div>
                </div>
            </form>
            <Toaster toastOptions={{duration: 2000}} />
        </div>
    )
}