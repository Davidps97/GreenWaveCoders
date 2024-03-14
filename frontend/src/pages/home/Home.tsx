import Footer from "@/components/footer/Footer";
import Map from "../Map/Map";
import TopPage from "./TopPage";
import Infos from "@/components/info/Infos";
import News from "./News";

function Home() {
  return (
    <>
      <div className='h-auto w-[100vw] flex flex-col pb-10 bg-primary-2'>
            <header>
                {/*<Navbar />*/}
            </header>
            <main className={`mt-28 h-full w-full gap-y-16`}>
                <TopPage/>
                <Infos/>
                <News/>
                <section className='w-full mt-10'>
                    <h2 className='font-montserrat text-m-30 font-medium text-primary-4 w-5/6 mx-auto justify-start mb-4'>Events</h2>
                    <Map/>
                </section>
                <Footer/>
            </main>
        </div>
    </>)
}

export default Home;