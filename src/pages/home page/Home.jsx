import React from "react";
const Home = () => {
    return (
        <section className=' '>
            <div className=' py-18 space-y-16'>

                <div className='text-center space-y-6'>
                    <h1 className='font-bold text-6xl '>Friends to keep close in your life</h1>
                    <p className='text-mauve-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <button className='btn btn-primary'>+ Add a Friend</button>
                </div>


                <div className='grid md:grid-cols-4 gap-3 px-1.5'>
                    <div className='py-14  text-center shadow-2xl rounded-2xl space-y-2 '>
                        <h1 className='font-bold text-2xl '>10</h1>
                        <p className='opacity-75'>Total Friends</p>

                    </div>
                    <div className='py-14  text-center shadow-2xl rounded-2xl space-y-2 '>
                        <h1 className='font-bold text-2xl '>3</h1>
                        <p className='opacity-75'>On Track</p>

                    </div>
                    <div className='py-14  text-center shadow-2xl rounded-2xl space-y-2 '>
                        <h1 className='font-bold text-2xl '>6</h1>
                        <p className='opacity-75'>Need Attention</p>

                    </div>
                    <div className='py-14  text-center shadow-2xl rounded-2xl space-y-2 '>
                        <h1 className='font-bold text-2xl '>12</h1>
                        <p className='opacity-75'>Interactions This Month</p>

                    </div>

                </div>
            </div>

            <div>
                <h1>Your Friends</h1>
                  
            </div>


        </section>
    );
};

export default Home;