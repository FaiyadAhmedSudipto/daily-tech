import React from 'react';
import infinix from './Images/Infinix.PNG'

const TechNewsDesign = (props) => {
    const { title, description, author, search, date, img} = props.tech;
    return (
        <div class="flex p-6">
            <div class="flex-none w-80 relative">
                <img src={img} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" />
            </div>
            <form class="flex-auto pl-6">
                <div class="flex flex-wrap items-baseline">
                    <div class="text-4xl leading-7 font-bold text-blue-600">
                        {/* Infinix 160 W Charger */}
                        {title}
                    </div>
                    <br />
                    <h1 class="w-full flex-none font-semibold mt-2">
                        {/* Kids Jumpsuit */}
                        {author}
                    </h1>
                    <h1 class="w-full flex-none font-semibold mt-2">
                        {/* Kids Jumpsuit */}
                        {date}
                    </h1>
                </div>
                <br />
                <p class="text-base text-black-500 mb-5">
                    {description}
                    {/* Free shipping on all continental US orders. Free shipping on all continental US orders.
                    <br />
                    Free shipping on all continental US orders.Free shipping on all continental US orders. 
                    Free shipping on all continental US orders.Free shipping on all continental US orders.
                    Free shipping on all continental US orders.Free shipping on all continental US orders. */}
                </p>

                <div class="flex space-x-3 mt-5 text-sm font-semibold">
                    <div class="flex-auto flex space-x-3">
                        {/* <button class="w-1/2 flex items-center justify-center rounded-full bg-purple-700 text-white" type="submit">Buy now</button> */}
                        <button class="mr-5 bg-blue-500 text-indigo-100 p-2 px-4 rounded-full font-semibold transition-all hover:bg-pink-500 hover:text-white"
                        type="submit">Learn More</button>
                        
                        
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TechNewsDesign;