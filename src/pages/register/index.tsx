import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
export function Register() {

    const navigate = useNavigate()

    function closeRegistrationScreen() {
        navigate('/')
    }
    return (
        <div className='space-y-8 h-full mt-16'>
            <div className='flex justify-center min-w-80 m-auto'>
                <img className='size-48' src="barber.png" alt="barbeiro logo" />
            </div>
            <form action="">
                <div className='px-7 m-auto space-y-10'>
                    <div className='space-y-4'>
                        <Input type="text" label="Login" placeHolder="Infome seu Login">
                            <User className="size-5 text-zinc-900" />
                        </Input>
                        <Input type="password" label="Senha" placeHolder="Informe sua senha">
                            <Lock className="size-5 text-zinc-900" />
                        </Input>
                        <Input type="password" label="" placeHolder="Repita sua senha">
                            <Lock className="size-5 text-zinc-900" />
                        </Input>

                    </div>
                    <div className='flex gap-4'>
                        <Button onClick={closeRegistrationScreen}>
                            Cadastrar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}