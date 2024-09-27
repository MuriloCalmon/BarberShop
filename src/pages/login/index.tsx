import { User, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { useToggle } from '../../hook/useToogle'
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

export function Login() { 

    const loginSchema = z.object({
        login: z.string().refine(login => {
            return login.length !== 0
        }, 'Campo obrigatório'),
        password: z.string().refine(login => {
            return login.length !== 0
        }, 'Campo obrigatório'),
    })

    type LoginSchema = z.infer<typeof loginSchema>

    const { register, handleSubmit, formState: {errors} } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    })

    const navigate = useNavigate()

    function handleSubmitLogin(data: LoginSchema) {
        navigate('/barber', {state: {formData: data} })
        console.log(data)
    }

    function openRegistrationScreen() {
        navigate('/register')
    }

    const [isToggled, toggle] = useToggle(false);   

    return (
        <div className=' space-y-8 h-full mt-16'>
            <div className='flex justify-center min-w-80 m-auto'>
                <img className='size-48' src="barber.png" alt="barbeiro logo" />
            </div>
            <form onSubmit={handleSubmit(handleSubmitLogin)}>
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

                    </div>
                    <div className='flex flex-col gap-2'>
                        <Button type="submit" variant="primary">
                            Entrar
                        </Button>

                        <Button type="button" onClick={openRegistrationScreen} variant="secondary">
                            Cadastra-se
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}