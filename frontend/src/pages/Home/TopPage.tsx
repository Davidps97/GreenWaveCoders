import Button from "@/components/Button";

function TopPage() {
    return (
        <section className='w-full lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-y-[-150%] lg:-translate-x-2/4'>
            <div className='flex flex-col w-full h-[520px]'>
                <div className='flex flex-col justify-center items-center mx-auto w-5/6 gap-y-4 md:gap-y-12 pl-8 md:pl-0'>
                    <h1 className='flex justify-center w-full mx-auto text-white font-montserrat text-m-27 lg:text-m-64 font-bold md:pt-16'>
                        Welcome to GreenWaves!
                    </h1>
                    <div className='flex flex-col md:justify-center md:items-center md:mx-auto gap-y-6 md:gap-y-16'>
                        <div className='w-full md:w-[70%] h-auto'>
                            <p className='text-white text-k-16 md:text-k-20 w-5/6 md:w-full font-karla font-normal text-center'>
                                Your hub for ocean and beach preservation.
                                Join a community of passionate members committed to tackling pollution.
                                Engage in impactful events, collaborate with local teams, and access resources
                                for active involvement. Register now to contribute to a cleaner marine
                                environment.
                                Together, let's make waves of positive change!
                            </p>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-3'>
                            <div>
                                <Button bgColor='bg-primary-4' fontColor='text-primary-1' children='SIGN UP'/>
                            </div>
                            <div>
                                <Button bgColor='bg-primary-2' fontColor='text-primary-4' children='SIGN IN'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopPage;