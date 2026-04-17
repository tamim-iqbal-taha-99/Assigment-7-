import React, { use } from 'react';
import FriendsCard from './FriendsCard';



const fetchData = fetch("/public/UserData.json")
 .then((res)=> res.json() );

const FriendsCards = () => {
    const friends = use(fetchData)
  
    
    
    return(
        <div className='grid md:grid-cols-3 lg:grid-cols-4  gap-2.5 space-y-3 '>
            {friends.map(friend=> <FriendsCard key={friend.id} friend={friend}></FriendsCard>)}
        </div>
    );
};

export default FriendsCards;