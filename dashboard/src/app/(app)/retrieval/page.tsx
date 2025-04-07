"use client";

import { NavBar } from "../../components/NavBar";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../../components/Table";

export default function RetrievalPage() {
	return (
		<div>
			<NavBar />
			<div className="p-8">
				<div className="text-xl font-semibold">
					View Previous Donation Retrievals
					<div className="py-3">
						<p className="text-lg py-3">All Retrievals</p>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[100px]">Title</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Category</TableHead>
									<TableHead>Owner</TableHead>
									<TableHead>Description</TableHead>
									<TableHead className="text-right">Pickup Location</TableHead>
									<TableHead className="text-right">Pickup Time</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">INV001</TableCell>
									<TableCell>Paid</TableCell>
									<TableCell>Credit Card</TableCell>
									<TableCell className="text-right">$250.00</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</div>
			</div>
		</div>
	);
}
