import { Search, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";

const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '36px',
    },
    bmBurgerBars: {
        background: '#09090b'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#fff'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#09090b',
        padding: '2.5em 1.5em 0',
        fontSize: '16px',
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'block',
        color: '#fff',
        marginBottom: '0.8em',
        
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

export function Barber() {



    const navigate = useNavigate()


    function openschedule() {
        navigate('/schedule')
    }


    return (

        <div className="px-7">
            <div className="space-y-24">

                <Menu right styles={styles} >
                    <a id="out" className="menu-item" href="/">Sair</a>
                </Menu>


                <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-zinc-900">
                    <span className="text-xs text-slate-100">Barbeiros disponíveis</span>
                    <Search className="text-slate-100" />
                </div>
            </div>


            <div onClick={openschedule} className="mt-10 flex justify-evenly bg-white py-3 rounded-3xl">
                <div className="">
                    <img className="size-16 rounded-full outline p-1" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&i" alt="" />
                </div>
                <div className="text-sm flex flex-col items-center gap-1">
                    <h3 className="">Murilo Calmon</h3>
                    <div className="flex gap-1">
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-zinc-950" />
                    </div>
                    <span className="text-xs">Ótimo</span>
                </div>
            </div>
            <div onClick={openschedule} className="mt-10 flex justify-evenly bg-white py-3 rounded-3xl">
                <div className="">
                    <img className="size-16 rounded-full outline p-1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZmlsfGVufDB8fDB8fHww" alt="" />
                </div>
                <div className="text-sm flex flex-col items-center gap-1">
                    <h3 className="">Aria Stark</h3>
                    <div className="flex gap-1">
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-zinc-950" />
                        <Star className="size-5 text-zinc-950" />
                    </div>
                    <span className="text-xs">Bom</span>
                </div>
            </div>
            <div onClick={openschedule} className="mt-10 flex justify-evenly bg-white py-3 rounded-3xl">
                <div className="">
                    <img className="size-16 rounded-full outline p-1" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyZmlsfGVufDB8fDB8fHww" alt="" />
                </div>
                <div className="text-sm flex flex-col items-center gap-1">
                    <h3 className="">João</h3>
                    <div className="flex gap-1">
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                        <Star className="size-5 text-amber-500" />
                    </div>
                    <span className="text-xs">Excelente</span>
                </div>
            </div>

        </div>
    )
}