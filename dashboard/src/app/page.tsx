import { NavBar } from "./components/NavBar";
import { HomePage } from "./home/page";

export default function Home() {
	return (
		<div className="">
			<NavBar />
			<div className="p-8">
				<HomePage />
			</div>
		</div>
	);
}
