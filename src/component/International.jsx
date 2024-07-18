import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';










const International = () => {
    const [Data, setData] = useState([])
    const fetch = async () => {
        try {
            const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b872e7db7cdb4e9693ed135e7350c758");
            setData(res.data.articles)
        }
        catch (err) {
            console.error(err);

        }
    }
    useEffect(() => {
        fetch();
    }, [])
    
    return (
        <>

            <div className='mx-auto shadow-xl  h-full w-[80%] text-center'>
                <h1 className='pg-heading
                '><span className= 'text-orange-500'>Top</span> Headlines</h1>
                {Data.map((value) => (
                    
                            <div className='sports-section'>
                                <h2 className='my-5 font-semibold text-2xl'>{value.title}</h2>
                                <div className='flex justify-center mb-3'>
                                
                                    <img className='h-[300px] shadow-xl hover:shadow-slate-500 rounded-md' src={value.urlToImage} alt={"national"}></img>
                                
                                </div>
                                <p className='font-normal text-xl'>Context : {value.description}</p>
                                <a  href={value.url}><button className='my-2 '>Read More</button></a>
                                <hr className='w-full border-t-2 border-r-slate-900'></hr>
                            </div>
                       
                )
                
                        
                    



                   )

                }

            </div>

        </>
    )
}
export default International;