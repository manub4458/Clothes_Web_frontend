"use client";
import Link from "next/link";
import React, { useState } from "react";

const Mobnav = () => {
	const [nav, setNav] = useState(false);
	return (
		<div className="bg-[url('/hero5.webp')] sm:h-[100vh]  bg-cover  bg-no-repeat h-[100vh]">
			{/* MOBILE NAVIGATION */}
			<div className="select-none flex overflow-hidden items-center  justify-between md:h-[5rem]  mx-[4rem] sm:mx-[2rem]">
				<img className="" src="/logo5.png" width="100" alt="Photo" />

				<div className=" ">
					<button
						onClick={() => setNav(!nav)}
						className=" z-[999999999] text-2xl font-bold select-none rotate-90 text-black focus:outline-none sm:mr-[1rem]">
						|||
					</button>
				</div>
			</div>
			<div
				className={` ${
					nav ? "top-0 right-0" : "top-0 right-[-100vw]"
				} transition-all duration-[400ms] ease-in-out fixed bg-black blurry_bg w-[70%] sm:w-[100%] h-screen  z-[999]`}>
				<div className="">
					<button
						onClick={() => setNav(!nav)}
						className="absolute top-16 right-20 text-3xl text-[#bdbdbd] giga ">
						X
					</button>
					<img
						className="absolute top-[7%] left-20 sm:left-8 invert"
						src="/logo5.png"
						width="120"
						alt="Photo"
					/>

					<ul className="mt-[13rem] giga ml-[6rem] sm:ml-[4rem] text-black">
						<div className="md:ml-[1rem] scale-[0.7] z-[999999999]">
							{/* <input onClick={() => setNav(!nav)} type="checkbox" id="checkbox" />
						<label htmlFor="checkbox" className="toggle">
							<div className="bars" id="bar1"></div>
							<div className="bars" id="bar2"></div>
							<div className="bars" id="bar3"></div>
						</label> */}
						</div>

						<li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
							<Link href="/">Home</Link>
						</li>
						<li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
							<Link href="/About">About Us</Link>
						</li>
						<li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
							<div>Shop Now</div>
						</li>
						<li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
							<Link href="/Contact">Contact Us</Link>
						</li>
                        <li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
							<Link href="/Contact">My Cart</Link>
						</li>
						<div className="mt-[10rem] flex items-center h-[45px] w-[280px] bg-[#6e6e6e] rounded-2xl text-white ">
							<input
								className=" transition-all duration-500 ease-linear tracking-[-1.5px] focus:transition-all focus:duration-500 focus:ease-linear focus:placeholder:opacity-0 text-[13px] placeholder:opacity-100 placeholder-white w-[250px] bg-transparent font-medium pl-4 outline-none"
								placeholder="Search Here..."
							/>
							<img
								src="/search_white.png"
								alt="search_icon"
								width="20"
								height="20"
							/>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Mobnav;
