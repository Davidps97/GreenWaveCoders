import {useNavigate} from "react-router-dom";
import Button from "@/components/button/Button.tsx";
import ErrorBottom from '@/assets/404-bottom.svg';
import ErrorBigSky from '@/assets/big-sky-404.svg';
import ErrorSmall from '@/assets/small-sky-404.svg';

function Error() {
    const navigate = useNavigate();
    return (
        <div
            className='lg:flex lg:content-center w-full h-[100vh] lg:bg-primary-2 bg-secondary-1 pt-20 lg:pt-0 overflow-y-hidden'
        >
            <div className='w-full lg:w-4/6 h-auto flex flex-col lg:gap-y-16 justify-center mx-auto content-center'>
                <div className='flex lg:hidden relative'>
                    <img src={ErrorSmall} alt="" className='z-10'/>
                    <img src={ErrorBigSky} alt="" className='z-20 absolute left-32 -top-20'/>
                </div>
                <h1 className='flex justify-center w-[70%] lg:w-full mx-auto text-white font-montserrat text-m-27 lg:text-m-64 font-bold text-center mb-[140px] lg:mb-0'>
                    404 ERROR
                </h1>
                <div className='flex flex-col justify-center items-center relative'>
                    <div className='z-30 flex flex-col items-center gap-y-4'>
                        <p className='text-white text-k-20 w-5/6 lg:w-4/6 font-karla font-normal text-center mx-auto'>
                            Oops! Looks like you've caught a wave in the wrong direction. Let's navigate you back to the
                            homepage.
                        </p>
                        <Button bgColor='bg-primary-4' fontColor='text-primary-1' children='HOME' handleClick={() => {
                            navigate('/home')
                        }}/>
                    </div>
                    <img src={ErrorBottom} alt="" className='lg:hidden absolute z-10'/>
                </div>
            </div>
        </div>
    );
}

export default Error;