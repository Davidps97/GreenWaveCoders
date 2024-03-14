import Button from "@/components/button/Button.tsx";

type Props = {
    handleSignIn: () => void;
    handleSignUp: () => void;
}

function TopPage({ handleSignIn, handleSignUp }: Props) {
    return (
        <section className='w-full'>
            <div className='flex flex-col w-full h-auto'>
                <div className='flex flex-col justify-center items-center mx-auto w-5/6 gap-y-4 md:gap-y-12'>
                    <h1 className='flex justify-center w-[70%] lg:w-full mx-auto text-white font-montserrat text-m-27 lg:text-m-64 font-bold md:pt-16 text-center'>
                        Welcome to GreenWaves!
                    </h1>
                    <div className='flex flex-col justify-center items-center mx-auto gap-y-6 md:gap-y-16'>
                        <div className='w-full h-auto'>
                            <p className='text-white text-k-16 md:text-k-20 w-5/6 md:w-full font-karla font-normal text-center mx-auto'>
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
                                <Button bgColor='bg-primary-4' fontColor='text-primary-1' children='SIGN UP' handleClick={handleSignUp}/>
                            </div>
                            <div>
                                <Button bgColor='bg-primary-2' fontColor='text-primary-4' children='SIGN IN' handleClick={handleSignIn}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopPage;