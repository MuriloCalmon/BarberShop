import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {

    const navigate = useNavigate()

    function openRegistrationScreen() {
        navigate('/register')
    }

    function openBarberSelection() {
        navigate('/barber')
    }

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

                        <Input type="password" label="Senha" placeHolder="Informe sua senha">
                            <Lock className="size-5 text-zinc-900" />
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