import './styles.css'
import './App.css';
import React from 'react';
import stew from './stew.jpg';
import noodles from './noodles.jpg'
import curry from './curry.jpg'
import { ReactDOM } from 'react';

function App() {
    const [hideToggle,setHideToggle]=React.useState(false);
    return (
        <div className="text-gray-500 font-body grid md:grid-cols-3">
            {/* content wrapper */}
            <div className='md:col-span-1 md:flex md:justify-end'>
                <nav className="text-right">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold uppercase p-4 border-b border-gray-100 text-mammoth">
                            <a href="/" className="hover:text-gray-700">Food Ninja</a>
                        </h1 >
                        <div className="px-4 cursor-pointer md:hidden" onClick={()=>setHideToggle(!hideToggle)}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                    </div>
                    <ul className={'text sm mt-6 md:block' + (hideToggle?' block':' hidden')} id="menu">
                        <li className="text-gray-700 font-bold py-1">
                            <a href="#" className="px-4 flex justify-end gap-2 border-r-4 border-primary">
                                <span>Home</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </a>
                        </li>
                        <li className='py-1'>
                            <a href="#" className="px-4 flex justify-end gap-2 border-r-4 border-white">
                                <span>About</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </li>
                        <li className='py-1'>
                            <a href="#" className="px-4 flex justify-end gap-2 border-r-4 border-white">
                                <span>Contact</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* end nav */}

            <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
                <div className='flex justify-center md:justify-end gap-2'>
                    <a href="#" className='btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'>Log in</a>
                    <a href="#" className=' btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'>Sign Up</a>
                </div>

                <header>
                    <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
                    <h3 className='text-2xl font-semibold'>For Ninjas</h3>
                </header>

                <div>
                    <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>

                    <div className="mt-8 grid lg:grid-cols-3 gap-10">
                        {/* card goes here */}
                        <div className="card">
                            <img src={stew} alt="stew" className="w-full h-32 sm:h-48 object-cover"></img>
                            <div className="m-4">
                                <span className="font-bold">5 Bean Chilli Stew</span>
                                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                            </div>
                            <div className='badge'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>25 mins</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={curry} alt="curry" className="w-full h-32 sm:h-48 object-cover"></img>
                            <div className="m-4">
                                <span className="font-bold">Tofu Curry</span>
                                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                            </div>
                            <div className='badge'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>25 mins</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={noodles} alt="noodles" className="w-full h-32 sm:h-48 object-cover"></img>
                            <div className="m-4">
                                <span className="font-bold">Veg Noodles</span>
                                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                            </div>
                            <div className='badge'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>25 mins</span>
                            </div>
                        </div>
                    </div>
                    <h4 className='font-bold mt-12 pb-2  border-b border-gray-200'>Most Popular</h4>
                    <div className='mt-8'>
                        {/* cards go here */}
                    </div>
                    <div className="flex justify-center">
                        <div className='bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50transition ease-out duration-300'>Load more</div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
