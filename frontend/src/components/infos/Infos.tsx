function Infos() {
    return (
        <section className='w-full'>
            <div className='flex flex-col justify-center mx-auto w-5/6 gap-y-4'>
                <h2 className='font-montserrat text-m-30 font-normal text-primary-4 w-2/6 justify-start'>Informations</h2>
                <div className='w-full lg:h-[400px] lg:py-[50px] bg-primary-4 rounded-2xl py-10'>
                    <div className='flex flex-col lg:flex-row lg:h-[300px] w-5/6 mx-auto gap-10 lg:gap-40'>
                        <div className='flex flex-col justify-center items-center lg:w-[300px] lg:h-[300px] gap-3'>
                            <h3 className='text-primary-3 font-montserrat text-m-20 font-bold'>Plastic Pollution
                                Impact</h3>
                            <p className="text-primary-3 text-k-16 font-karla font-normal text-center">Over 8
                                million metric tons of plastic enter the oceans annually, posing a severe threat
                                to marine
                                life and ecosystems. By 2050, plastic is projected to outweigh all ocean fish.</p>
                        </div>
                        <div className='flex flex-col justify-center items-center lg:w-[300px] lg:h-[300px] gap-3'>
                            <h3 className='text-primary-3 font-montserrat text-m-20 font-bold'>Land-Based Beach
                                Trash</h3>
                            <p className="text-primary-3 text-k-16 font-karla font-normal text-center">Surprisingly,
                                80% of beach trash originates from land-based activities like littering, waste
                                disposal, and coastal industries.</p>
                        </div>
                        <div className='flex flex-col justify-center items-center lg:w-[300px] lg:h-[300px] gap-3'>
                            <h3 className='text-primary-3 font-montserrat text-m-20 font-bold'>Beach
                                Ambassadors</h3>
                            <p className="text-primary-3 text-k-16 font-karla font-normal text-center">Become a
                                beach ambassador to combat pollution. Your efforts organising and joining cleanups,
                                can make a significant impact in
                                preserving our beaches and marine environments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Infos;