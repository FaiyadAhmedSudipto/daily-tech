import React from 'react';

const Navbar = () => {
    return (
        <div>
            <main class="js">

                <section class="aw-header bg-white border-b border-gray-200 shadow-md">
                    <header class="container mx-auto flex items-center justify-between flex-wrap px-2 py-4 lg:p-6 ">
                        <div id="mobile-menu__toggler" class="block lg:hidden">
                            <button id="mobile-menu__open" class="px-3 py-1 w-20 border rounded text-white bg-purple-700 border-transparent hover:bg-purple-900 transition">
                                Menu
                            </button>
                            <button id="mobile-menu__close" class="hidden px-3 py-1 w-20 border rounded text-white bg-purple-700 border-transparent hover:bg-purple-900 transition">
                                Close
                            </button>
                        </div>

                        <div class="aw-header__logo flex items-center flex-shrink-0 text-purple-700 hover:text-purple-900 mx-2 lg:mr-6 order-1 transition">
                            <svg class="fill-current h-8 w-8 mr-2" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                                />
                            </svg>
                            <span class="font-semibold text-lg tracking-tight">MegaCorp</span>
                        </div>

                        <nav id="mobile-menu__items" class="aw-header__nav hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto order-3 lg:order-2">
                            <ol class="text-lg lg:flex-grow lg:flex lg:justify-around">
                                <li class="block mb-4 mt-3 lg:inline-block lg:mb-0 lg:mt-0 mr-4">
                                    <a href="#responsive-header" class="text-gray-700 hover:text-gray-900 transition">Welcome</a>
                                </li>

                                <li class="block mb-4 lg:inline-block lg:mb-0 mr-4">
                                    <a href="#responsive-header" class="text-gray-700 hover:text-gray-900 transition">Services</a>
                                </li>

                                <li class="block mb-4 lg:inline-block lg:mb-0 mr-4">
                                    <a href="#responsive-header" class="text-gray-700 hover:text-gray-900 transition">Sold Projects</a>
                                </li>

                                <li class="block mb-4 lg:inline-block lg:mb-0 mr-4">
                                    <a href="#responsive-header" class="text-gray-700 hover:text-gray-900 transition">Products & Shop</a>
                                </li>

                                <li class="block mb-4 lg:inline-block lg:mb-0 mr-4">
                                    <a href="#responsive-header" class="text-gray-700 hover:text-gray-900 transition">Team</a>
                                </li>

                                <li class="block lg:inline-block lg:mb-0 mr-4">
                                    <a href="#responsive-header" class="text-gray-700 hover:text-gray-900 transition">Contact</a>
                                </li>
                            </ol>
                        </nav>

                        <div class="flex order-2">

                            <div class="hidden sm:block mr-2">
                                <a href="#" class="text-gray-700 hover:text-purple-900 transition" title="Send us an email">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fal"
                                        data-icon="envelope"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        class="fill-current h-6 w-6"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"
                                            class=""
                                        ></path>
                                    </svg>
                                </a>
                            </div>

                            <div class="hidden sm:block mr-2">
                                <a href="#" class="text-gray-700 hover:text-purple-900 transition" title="Call us">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fal"
                                        data-icon="phone"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        class="fill-current h-6 w-6"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M487.8 24.1L387 .8c-14.7-3.4-29.8 4.2-35.8 18.1l-46.5 108.5c-5.5 12.7-1.8 27.7 8.9 36.5l53.9 44.1c-34 69.2-90.3 125.6-159.6 159.6l-44.1-53.9c-8.8-10.7-23.8-14.4-36.5-8.9L18.9 351.3C5 357.3-2.6 372.3.8 387L24 487.7C27.3 502 39.9 512 54.5 512 306.7 512 512 307.8 512 54.5c0-14.6-10-27.2-24.2-30.4zM55.1 480l-23-99.6 107.4-46 59.5 72.8c103.6-48.6 159.7-104.9 208.1-208.1l-72.8-59.5 46-107.4 99.6 23C479.7 289.7 289.6 479.7 55.1 480z"
                                            class=""
                                        ></path>
                                    </svg>
                                </a>
                            </div>

                            <div>
                                <a href="#" class="text-gray-700 hover:text-purple-900 transition" title="Message us on WhatsApp">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="whatsapp"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        class="fill-current h-6 w-6"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                                            class=""
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </header>
                </section>

                {/* <section class="aw-hero flex items-center justify-center text-white">
                    <h1 class="text-center text-5xl py-24">This is MegaCorp</h1>
                </section> */}
            </main>
        </div>
    );
};


// Learn More From https://gist.github.com/neisdev/154dc895d9e45a0fc7c9103e776a85cb
export default Navbar;