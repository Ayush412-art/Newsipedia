import React from 'react';
import { useNavigate } from 'react-router-dom';
const img1 = "img/sports.jpg";
const img2 = "img/nation.jpg";
const img3 = "img/inter.jpg";
const img4 = "img/enter.jpg";

const Main = () => {

    const navigate = useNavigate();

    return (


        <>

            <div className='mx-auto my-5 h-full w-[80%] '>
                <div className='heading text-center '>
                    <h1 >NewsiPedia</h1><br></br>
                    <p className='font-medium text-2xl '>Reading daily news offers several benefits: it keeps you informed about local and global events, enhances critical thinking, broadens your general knowledge, provides conversation topics, and alerts you to various opportunities such as jobs and educational programs.</p>
                </div>
                <div className='categories mx-auto mt-[80px]  w-[80%]'>
                    <div className='row mb-8'>
                        <div className='columns-2 '>
                            <div className='sports'>
                                <img src={img1} className='h-[250px] shadow-xl  hover:shadow-slate-500 rounded-md' alt='Sports'></img>
                                <button onClick={() => (navigate("/Sports"))} >Sports Hub</button>
                            </div>
                            <div className='Entertainment'>
                                <img src={img4} className='h-[250px] shadow-xl  hover:shadow-slate-500 rounded-md  ' alt='Entertainment'></img>
                                <button onClick={() => (navigate("/Entertainment"))} >Entertainment</button>
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='columns-2'>
                            <div className='sports'>
                                <img src={img2} className='h-[250px] hover:shadow-slate-500 shadow-xl rounded-md' alt='Sports'></img>
                                <button onClick={() => (navigate('/National'))} >National</button>
                            </div>
                            <div className='Entertainment'>
                                <img src={img3} className='h-[250px] shadow-xl  hover:shadow-slate-500 rounded-md' alt='Entertainment'></img>

                                <button onClick={() => (navigate('/International'))}>International</button>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>

    )


}
export default Main;