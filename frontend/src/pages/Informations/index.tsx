import Navbar from "@/components/Navbar";

type Props = {
    isTopOfPage: boolean;
}

function Informations({isTopOfPage}: Props) {
    return (
        <div className='h-auto w-[100vw] flex flex-col pb-10 lg:relative'>
            <header>
                <Navbar isTopOfPage={isTopOfPage}/>
            </header>
            <main className={`mt-44 h-full w-full gap-y-16`}>

            </main>
        </div>
    );
}

export default Informations;