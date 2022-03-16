import React from 'react'
import Layout from "../components/Layout"
import projectsData from '../resources/project'
import AOS from 'aos';
AOS.init({
  duration:1000
});


function Projects() {
    return (
        <Layout>
            <div className="mt-10">
                <div className="h-screen">
                    <div className="h-3/4">
                        <lottie-player
                        src="https://assets2.lottiefiles.com/packages/lf20_0tue65cn.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                        ></lottie-player>
                    </div>
                    <p className='text-xl font-semibold text-center'>Les bonnes idées ne sont pas adoptées automatiquement. Ils doivent être mises en pratique avec une patience courageuse</p>
                    <h1 className='text-4xl text-center font-bold mt-5' data-aos='slide-up'>Parceque</h1>
                </div>
                <div className='font-bold text-center bg-green-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5'>
                    <h1 className='text-8xl md:text-3xl' data-aos='slide-left'>PAS DE PATIENCE </h1>
                    <h1 className='text-8xl md:text-3xl' data-aos='slide-right'>PAS DE SCIENCES </h1>
                </div>
            </div>
            <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5">
                {projectsData.map((project=>{
                return <div>
                    <div className='relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400'>
                        <img src={project.image}  className='w-full h-52 text-center'/>

                        <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl' >
                            <h1 className='text-4xl font-semibold text-white'>{project.title}</h1>
                            <button className='border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white'>ALLER</button>
                        </div>
                    </div>
                </div>
                }))}
            </div>
        </Layout>
    )
}

export default Projects
