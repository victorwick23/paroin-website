import {Link} from 'react-scroll'

export default function Hero(){
    return (
        <>  
            <div className="flex-row md:flex md:py-8 items-center">
                <div className="flex-row md:w-6/12">
                    <p className="w-full font-bold text-2xl text-center mb-2 md:text-4xl md:leading-snug">
                        Menyediakan <span className="text-redTheme">Layanan Berlangganan</span> untukmu, dengan mudah
                    </p>
                    <p className=" text-gray-400 text-base text-center mb-2 md:text-xl">
                        Murah, Cepat, dan Bergaransi
                    </p>
                    <div className="w-full md:mt-8">
                        <Link to="registerPage" spy={true} smooth={true}>
                            <button className="bg-redTheme px-4 py-2 mt-8 rounded-md mx-auto block">
                                <p className="text-white font-bold">Beli Paket</p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-6/12 mt-8">
                    <img className="mx-auto md:w-9/12 " src="hero.svg" alt="" />
                </div>
            </div>
        </>
    )
}