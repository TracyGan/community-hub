import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../../components/Table";
import convertDateToString from "@/app/utils/date";
import { useGetAllUserDonationRetrievals } from "@/app/queries/donations";

export default function RetrievalTable() {
	const { data: donationsWithUsers } = useGetAllUserDonationRetrievals();

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px] font-semibold">Title</TableHead>
					<TableHead className="font-semibold">Status</TableHead>
					<TableHead className="font-semibold">Category</TableHead>
					<TableHead className="font-semibold">Donor</TableHead>
					<TableHead className="font-semibold">Description</TableHead>
					<TableHead className="font-semibold">Pickup Location</TableHead>
					<TableHead className="font-semibold">Pickup Time</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{donationsWithUsers?.map((donation) => {
					return (
						<TableRow key={donation.id}>
							<TableCell className="font-medium">{donation.title}</TableCell>
							<TableCell className="font-medium">{donation.status}</TableCell>
							<TableCell className="font-medium">{donation.category}</TableCell>
							<TableCell className="font-medium">
								{donation.donor.name}
							</TableCell>
							<TableCell className="font-medium">
								{donation.description}
							</TableCell>
							<TableCell className="font-medium">{donation.location}</TableCell>
							<TableCell className="font-medium">
								{convertDateToString(donation.time)}
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}
