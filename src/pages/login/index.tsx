import { User, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useToggle } from '../../hook/useToogle'

export function Login() {

    const navigate = useNavigate()

    function openRegistrationScreen() {
        navigate('/register')
    }

    function openBarberSelection() {
        navigate('/barber')
    }

    const [isToggled, toggle] = useToggle(false);

    return (
        <div className=' space-y-8 h-full mt-16'>
            <div className='flex justify-center min-w-80 m-auto'>
                <img className='size-48' src="barber.png" alt="barbeiro logo" />
            </div>
            <form action="">
                <div className='px-7 m-auto space-y-10'>
                    <div className='space-y-4'>
                        <Input type="text" label="Login" placeHolder="Infome seu login">
                            <User className="size-5 text-zinc-900" />
                        </Input>

                        <Input type={isToggled ? 'text' : 'password'} label="Senha" placeHolder="Informe sua senha">
                            {isToggled ? <EyeOff className="size-5" onClick={toggle} /> : <Eye className="size-5" onClick={toggle} />}
                            <Lock className="size-5 ml-2 text-zinc-900" />
                        </Input>
                    </div>
                    <div  className='flex flex-col gap-2'>
                        <Button onClick={openBarberSelection} variant="primary">
                            Entrar
                        </Button>

                        <Button onClick={openRegistrationScreen} variant="secondary">
                            Cadastra-se
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}