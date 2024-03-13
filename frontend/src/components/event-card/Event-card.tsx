type Props = {
    title: string,
    description: string,
    imageSrc: string,


}

function EventCard({ title, description, imageSrc }: Props) {


    return (
        <div className="event-container bg-none relative"> 
        <div className="relative">
            <div className="image-container w-96 h-48 m-auto overflow-hidden">
                <img className="rounded-2xl size-full object-cover" src={`images/${imageSrc}`} alt="" />
            </div>
            <div className="text-container absolute bottom-0 left-5 bg-gradient-to-b from-[#47A6C2] to-[#004567] w-32 h-16 rounded-md ml-5 mb-5 p-2"> 
                <p className="ml-2 ">{title}</p>
                <p className="ml-2">{description}</p>
            </div>
        </div>
        <div className="join-container"></div>
    </div>
    )
}


export default EventCard;