type Props = {
    title: string,
    description: string,
    imageSrc: string,


}

function EventCard({ title, description, imageSrc }: Props) {


    return (
        <div className="event-cpntainer">
            <div className="image-container bg-black w-96 h-20 m-auto overflow-hidden">
            <img className="rounded-2xl size-full object-cover " src={`images/${imageSrc}`} alt="" />
            </div>
            <div className="text-container h-16 w-32 bg-slate-600 rounded-2xl">
                <p>{title}</p>
                <p>{description}</p>
            </div>
            <div className="join-container"></div>
        </div>
    )
}

export default EventCard;