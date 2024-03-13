import Navbar from "@/components/Navbar";
import MapComponent from "@/pages/Map/MapComponent.tsx";

function Map () {
  return (
      <div className='h-auto w-[100vw] flex flex-col pb-10 lg:relative'>
        <header>
          <Navbar isTopOfPage={true}/>
        </header>
        <main className={`mt-44 h-full w-full gap-y-16`}>
          <MapComponent />
        </main>
      </div>
  );
}

export default Map;