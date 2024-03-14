import Navbar from "@/components/navbar/Navbar.tsx";
import MapComponent from "@/pages/map/MapComponent.tsx";


function Map () {
  return (
      <div className='h-auto w-[100vw] flex flex-col pb-10 lg:relative'>
        <header>
          {/*<Navbar />*/}
        </header>
        <main className={`mt-44 h-full w-full gap-y-16`}>
          <MapComponent />
        </main>
      </div>
  );
}

export default Map;