"use client";
import logo from "../logo.svg";
import Image from "next/image";
import { Icons } from "./Icons";
import { usePathname } from "next/navigation";

export function NavBar() {
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;

	return (
		<nav className=" border-gray-200 bg-[#C5D5B0]">
			<div className="flex flex-wrap items-center px-8 py-3">
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-row  md:space-x-8">
						<li>
							<a href="/" className="" aria-current="page">
								<Image src={logo} alt="Logo" className="w-8 h-8" />
							</a>
						</li>
						<li>
							<a
								href="/postings"
								className={isActive("/postings") ? "font-bold" : ""}
							>
								View Postings
							</a>
						</li>
						<li>
							<a
								href="/retrieval"
								className={isActive("/retrieval") ? "font-bold" : ""}
							>
								View Retrieval
							</a>
						</li>
						<li>
							<a
								href="/donate"
								className={isActive("/donate") ? "font-bold" : ""}
							>
								Donate
							</a>
						</li>
						<div className="">
							<Icons.UserIconCircle />
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
}
