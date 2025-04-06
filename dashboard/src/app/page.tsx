import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { BrowsePage } from "./browse/page";
import { HomePage } from "./home/page";

export default function Home() {
	const isAuthenticated = "";
	return (
		<div className="">
			<NavBar />
			<div className="p-4">
				<HomePage />
				<BrowsePage />
			</div>
		</div>
	);
}
