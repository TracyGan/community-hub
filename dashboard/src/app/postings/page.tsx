"use client";

import { NavBar } from "../components/NavBar";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "../components/Table";

export default function PostingsPage() {
	return (
		<div>
			<NavBar />
			<div className="p-8">
				<div className="text-xl font-semibold">
					View Previous Donation Postings
					<div className="py-3">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[100px]">Title</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Category</TableHead>
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
