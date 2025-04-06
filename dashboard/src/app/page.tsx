import { NavBar } from "./components/NavBar";
import { HomePage } from "./home/page";

export default function Home() {
	const isAuthenticated = "";
	return (
		<div className="">
			<NavBar />
			<div className="p-8">
				<HomePage />
			</div>
		</div>
	);
}
