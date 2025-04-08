"use client";

import { NavBar } from "../../components/NavBar";
import RetrievalTable from "./retrieval-table";

export default function RetrievalPage() {
	return (
		<div>
			<NavBar />
			<div className="p-8">
				<div className="text-xl font-semibold">
					View Previous Donation Retrievals
					<div className="py-3">
						<p className="text-lg py-3">All Retrievals</p>
						<RetrievalTable />
					</div>
				</div>
			</div>
		</div>
	);
}
