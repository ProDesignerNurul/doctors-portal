import React from 'react';
import people1 from '../../../assets/images/people1.png';
import quote from '../../../assets/icons/quote.svg';

const Testimonial = () => {
    return (
        <section className='mt-12 md:mt-16 lg:mt-20 '>

            <div className='mb-36 flex justify-between'>
                <div>
                <h2 className="text-xl text-primary font-semibold"> Testimonial </h2>
                <h2 className="text-4xl"> What Our Patients Says </h2>
                </div>

                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>


                <div className='shadow-lg p-7 rounded-lg hover:bg-stone-100'>


                    <div>

                        <div className='mb-12'>
                            <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        </div>

                        <div className='flex items-center'>

                            <div>
                                <img className='w-14 border border-red-400 rounded-[50%] mr-5' src={people1} alt="" />
                            </div>

                            <div>
                                <h2 className="text-2xl"> Winson Herry</h2>
                                <p>California</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='shadow-lg p-7 rounded-lg hover:bg-stone-100'>


                    <div>

                        <div className='mb-12'>
                            <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        </div>

                        <div className='flex items-center'>

                            <div>
                                <img className='w-14 border border-red-400 rounded-[50%] mr-5' src={people1} alt="" />
                            </div>

                            <div>
                                <h2 className="text-2xl"> Winson Herry</h2>
                                <p>California</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='shadow-lg p-7 rounded-lg hover:bg-stone-100'>


                    <div>

                        <div className='mb-12'>
                            <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        </div>

                        <div className='flex items-center'>

                            <div>
                                <img className='w-14 border border-red-400 rounded-[50%] mr-5' src={people1} alt="" />
                            </div>

                            <div>
                                <h2 className="text-2xl"> Winson Herry</h2>
                                <p>California</p>
                            </div>

                        </div>

                    </div>
                </div>


            </div>




        </section>
    );
};

export default Testimonial;