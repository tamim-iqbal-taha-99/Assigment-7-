
import { useContext } from 'react';
import { IoCall } from 'react-icons/io5';
import { useLoaderData } from 'react-router';
import { FndContext } from '../../context/Fndprovider';



const FriendDetails = () => {

   const { handleAction} = useContext(FndContext);
//    console.log(handleCallBtn);
   
  
    

    



    const userData = useLoaderData()
    const { picture, name, status, tags, bio, email, goal, next_due_date, days_since_contact , id} = userData
    console.log(userData);



    return (
        <section>
            <div className="py-20 px-10 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* LEFT SIDE (Profile) */}
                <div className="p-5 text-center space-y-3 shadow-md rounded-md">
                    <div className="flex justify-center">
                        <img className="w-[85px] rounded-full" src={picture} alt="" />
                    </div>

                    <h1 className="font-bold text-2xl">{name}</h1>

                    <button
                        className={`border rounded-4xl px-3 py-2 ${status === "overdue"
                                ? "bg-red-500 text-white"
                                : status === "on-track"
                                    ? "bg-amber-500 text-white"
                                    : "bg-green-500 text-white"
                            }`}
                    >
                        {status}
                    </button>

                    <div className="flex gap-2 justify-center flex-wrap">
                        {tags.map((tag, index) => (
                            <button
                                className="border px-3 rounded-4xl bg-green-300"
                                key={index}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    <p>{bio}</p>
                    <p>{email}</p>

                    <div className="space-y-2 pt-4 font-bold shadow-md ">
                        <button className="border w-full py-2">Snooze 2 Weeks</button>
                        <button className="border w-full py-2">Archive</button>
                        <button className="border w-full py-2 text-red-500">Delete</button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="md:col-span-2 space-y-6">

                    {/* TOP 3 BOX */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center shadow-md rounded-md p-5">
                            <h1 className="font-bold text-4xl">{days_since_contact}</h1>
                            <p className="opacity-75">Days Since Contact</p>
                        </div>

                        <div className="text-center shadow-md rounded-md p-5">
                            <h1 className="font-bold text-4xl">{goal}</h1>
                            <p className="opacity-75">Goal (Days)</p>
                        </div>

                        <div className="text-center shadow-md rounded-md p-5">
                            <h1 className="font-bold text-xl">{next_due_date}</h1>
                            <p className="opacity-75">Next Due</p>
                        </div>
                    </div>

                    {/* RELATIONSHIP GOAL */}
                    <div className="shadow-md flex justify-between items-center p-4 rounded-md">
                        <div>
                            <h1 className="font-semibold">Relationship Goal</h1>
                            <p>Connect every {goal} days</p>
                        </div>
                        <button className="px-3 py-1 shadow rounded-md">Edit</button>
                    </div>

                    {/* QUICK CHECK-IN */}
                    <div className="shadow-md p-5 rounded-md space-y-4">
                        <h1 className="font-bold text-xl">Quick Check-In</h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button onClick={()=> handleAction(userData, "call")} className="btn shadow-md rounded-md py-6">Call</button>
                            <button onClick={()=> handleAction(userData, "text")} className="btn shadow-md rounded-md py-6">Text</button>
                            <button onClick={()=> handleAction(userData, "video")} className="btn shadow-md rounded-md py-6">Video</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FriendDetails;