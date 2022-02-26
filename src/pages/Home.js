import React, {useEffect} from 'react'
import Layout from "../components/Layout"
import {
    FaBootstrap,
    FaCss3,
    FaHtml5,
    FaWordpress,
    FaBuilding,
    FaLaptopCode,
    FaDollarSign
  } from "react-icons/fa";

import {
    MdArchitecture
} from "react-icons/md";

import {
    SiMicrosoftexcel,
    SiMicrosoftword,
    SiAdobephotoshop,
    SiMicrosoftaccess
} from "react-icons/si";
import AOS from 'aos';
AOS.init({
  duration:1000
});

function Home() {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <div>
                {/* Intro section*/}
                <div className='h-scren bg-theme'>
                    <div className='grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4
                    mx-10 z-10 bg-theme
                    border-white transform rotate-12 md:rotate-0'>
                        <div className='h-1/2'>
                            <lottie-player 
                                src="https://assets4.lottiefiles.com/packages/lf20_cUhVZH.json"
                                background="transparent"  
                                speed="1"  
                                loop
                                autoplay
                            ></lottie-player>
                        </div>

                        <div className='font-bold text-white md:px-5'>

                            <h1 className='text-5xl md:text-4xl' data-aos='slide-right'> Bienvenu à <b className='text-yellow-500'>PROXIMA</b> </h1>
                            <h1 className='text-4xl md:text-xl' data-aos='slide-left'> Votre Formateur <b className='text-red-500'>Polyvalent</b> </h1>
                            
                        </div>

                    </div> 
                </div>

                {/* Technologies */}
                <div className='mt-20'>
                    <h1 className="text-4xl text-blue-800 font-bold text-center my-8" data-aos='slide-up'>Nos différentes formations</h1>
                    <div className='grid md:grid-cols-1 grid-cols-4'>                 
                        <MdArchitecture
                            size={180}
                            color="cyan"
                            className="w-full text-center mt-20" 
                        />

                        <FaLaptopCode
                        size={180}
                        color="red"
                        className="w-full text-center mt-20 animate-bounce"
                        />
                        <SiMicrosoftexcel
                        size={180}
                        color="green"
                        className="w-full text-center mt-20 animate-bounce"
                        />
                        <SiMicrosoftword
                        size={180}
                        color="blue"
                        className="w-full text-center mt-20"
                        />
                        <FaDollarSign
                        size={180}
                        color="orange"
                        className="w-full text-center mt-20 animate-bounce"
                        />
                        <SiAdobephotoshop
                        size={180}
                        color="royalblue"
                        className="w-full text-center mt-20"
                        />
                        <SiMicrosoftaccess
                        size={180}
                        color="crimson"
                        className="w-full text-center mt-20"
                        />
                        <FaWordpress
                        size={180}
                        color="navy"
                        className="w-full text-center mt-20 animate-bounce"
                        />
                    </div>
                </div>

                {/* Intro section*/}

                <div className='my-20'>
                    <div className='text-center h-52 bg-primary'>
                        <h1 className='text-white font-bold text-4xl py-10'>Oui, nous sommes experts en dessin batiment</h1>
                    </div>

                    <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
                        <div className="h-96" data-aos='zoom-in'>
                        <lottie-player
                            src="https://assets8.lottiefiles.com/packages/lf20_7dnmrlnq.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                        ></lottie-player>
                        </div>
                        <p className="text-xl my-5 font-semibold md:px-5 px-14 py-10">
                        AutoCAD et ARCHICAD sont des logiciels de conception assistée par ordinateur (CAO) 
                        qui permet aux architectes, aux ingénieurs et aux professionnels de la construction
                        de créer des dessins 2D et 3D précis.
                        </p>

                    </div>
                </div>


                {/* {Dev stack section} */}
                <div className="my-20">
                    <div className="text-center h-52 bg-red-500">
                        <h1 className="text-white font-bold text-4xl py-10">
                        Autres domaines professionnelles
                        </h1>
                    </div>

                    <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
                        <div className="h-96" data-aos='zoom-in'>
                        <lottie-player
                            src="https://assets10.lottiefiles.com/packages/lf20_chcyxcbj.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                        ></lottie-player>
                        </div>

                        <div className="grid md:grid-cols-1 grid-cols-3 p-5">
                        <div>
                            <h1 className="text-xl font-bold">TECHNOLOGIE</h1>
                            <hr />
                            <p className="font-semibold mt-2">développement web</p>
                            <p className="font-semibold mt-2">Bureautique</p>

                            <p className="font-semibold mt-2">Secrétariat</p>
                            <p className="font-semibold mt-2">Réseau et télecom</p>
                            <p className="font-semibold mt-2">assistanat de Direction</p>
                        </div>

                        <div className="text-center">
                            <h1 className="text-xl font-bold"> GESTION</h1>
                            <hr />
                            <p className="font-semibold mt-2">Gestion de projet</p>
                            <p className="font-semibold mt-2">Marketing</p>

                            <p className="font-semibold mt-2">Communication</p>
                            <p className="font-semibold mt-2">Passation de marché</p>
                            <p className="font-semibold mt-2">Entrepreneuriat</p>
                        </div>

                        <div className="text-right">
                            <h1 className="text-xl font-bold">BTP SST</h1>
                            <hr />
                            <p className="font-semibold mt-2">Dessin bâtiment</p>
                            <p className="font-semibold mt-2">Installation solaire</p>

                            <p className="font-semibold mt-2">Froid Climatisation</p>
                            <p className="font-semibold mt-2">Gestion des risques professionnelles</p>
                            <p className="font-semibold mt-2">Sécurité Incendie</p>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Dev Info */}

                <div>
                    <h1 className="text-4xl text-gray-500 text-center font-bold">
                        Qui sommes nous ?
                    </h1>

                    <div className="h-screen relative text-gray-800">
                        <div className="h-full">
                            <lottie-player
                                src="https://assets5.lottiefiles.com/packages/lf20_dBbqyA.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
        
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Home
