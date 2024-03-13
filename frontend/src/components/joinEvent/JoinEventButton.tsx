import { createClient } from "@supabase/supabase-js";
import { UUID } from "crypto";
import { SetStateAction, useState } from "react";
const projectUrl = import.meta.env.VITE_PROJECT_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

const supabase = createClient(projectUrl, anonKey);

type joined = { 
    eventID: number,
    userID: UUID
}




function JoinButton(  {eventID, userID}:{eventID:number, userID:UUID} ) {

    const [join, setJoin] = useState<joined[]>([]);
    async function joinEvent( eventID:number, userID:UUID) {
        const { data } = await supabase.from("user-follow-event").insert({ user_id:userID, event_id: eventID })
        setJoin(data! as SetStateAction<joined[]>);
    }
   const handleJoinEvent=(eventID: number, userID:UUID)=>{ 
     joinEvent(eventID,userID)
    }
    return (
        <div className="flex justify-end mr-9 mt-5 relative"> 
            <button className="w-[140px] h-[27px] bg-[#004567] rounded-md text-white" onClick={() =>handleJoinEvent(eventID,userID)}>Join now</button>
        </div>
    )
}


export default JoinButton;