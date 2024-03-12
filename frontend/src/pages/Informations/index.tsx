import Navbar from "@/components/Navbar";
import {SelectedPage} from "@/shared/SelectedPage.ts";

type Props = {
    selectedPage: SelectedPage;
    isTopOfPage: boolean;
    setSelectedPage: (value: SelectedPage) => void;
}

function Informations({selectedPage, setSelectedPage, isTopOfPage}: Props) {
    return (
        <div className='h-auto w-[100vw] flex flex-col pb-10 lg:relative'>
            <header>
                <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>
            </header>
            <main className={`mt-44 h-full w-full gap-y-16`}>

            </main>
        </div>
    );
}

export default Informations;