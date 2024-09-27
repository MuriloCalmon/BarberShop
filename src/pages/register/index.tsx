import { User, Lock, EyeOff, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { useToggle } from "../../hook/useToogle";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
export function Register() {

    const navigate = useNavigate()

    function handleSubmitForLogin() {
        navigate('/')
    }

    const [isToggled, toggle] = useToggle(false);

    const registerSchema = z.object({
        login: z.string()
            .min(4, 'Login precisa ter no mínimo 4 caracteres'),
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

    function handleSubmitRegister(data: RegisterSchema) {
        handleSubmitForLogin()
        console.log(data)
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
                                <input className="outline-none" type="text" id="login" placeholder="Informe seu login" {...register("login")} />
                                <User className="size-5 text-zinc-900" />
                            </div>
                            {errors.login && <span className="text-xs text-red-600">{errors.login.message}</span>}
                        </div>

                        <div>
                            <label>Senha</label>
                            <div className="p-4 flex justify-between items-center bg-white rounded-lg">
                                <input className="outline-none" type={isToggled ? 'text' : 'password'} id="password" placeholder="Informe sua senha" {...register('password')} />
                                {isToggled ? <EyeOff className="size-5" onClick={toggle} /> : <Eye className="size-5" onClick={toggle} />}
                                <Lock className="size-5 text-zinc-900" />
                            </div>
                            {errors.password && <span className="text-xs text-red-600">{errors.password.message}</span>}
                        </div>
                        <div>
                            <div className="p-4 flex justify-between items-center bg-white rounded-lg">
                                <input className="outline-none" type={isToggled ? 'text' : 'password'} id="confirm_password" placeholder="Confirme sua senha" {...register('confirmPassword')} />
                                {isToggled ? <EyeOff className="size-5" onClick={toggle} /> : <Eye className="size-5" onClick={toggle} />}
                                <Lock className="size-5 text-zinc-900" />
                            </div>
                            {errors.confirmPassword && <span className="text-xs text-red-600">{errors.confirmPassword.message}</span>}
                        </div>

                    </div>
                    <div className='flex gap-4'>
                        <Button type="submit">
                            Cadastrar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}