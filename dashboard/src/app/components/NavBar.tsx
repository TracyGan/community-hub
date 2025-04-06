import logo from "../logo.svg";
import Image from "next/image";
import { Icons } from "./Icons";

export function NavBar() {
	return (
		<nav className=" border-gray-200 bg-[#C5D5B0]">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-row  md:space-x-8">
						<Image src={logo} alt="Logo" className="w-8 h-8" />
						<li>
							<a href="/home" className="" aria-current="page">
								Home
							</a>
						</li>
						<li>
							<a href="/browse" className="">
								Browse Items
							</a>
						</li>
						<li>
							<a href="/view-postings" className="">
								View Postings
							</a>
						</li>
						<li>
							<a href="/view-retrieval" className="">
								View Retrieval
							</a>
						</li>
						<li>
							<a href="/make-a-post" className="">
								Make A Post
							</a>
						</li>
						<li>
							<a href="/settings" className="">
								Settings
							</a>
						</li>
						<Icons.UserIconCircle />
					</ul>
				</div>
			</div>
		</nav>
	);
}
