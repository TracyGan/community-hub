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
					<TableHead className="w-[100px]">Title</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Category</TableHead>
					<TableHead>Donor</TableHead>
					<TableHead>Description</TableHead>
					<TableHead className="text-right">Pickup Location</TableHead>
					<TableHead className="text-right">Pickup Time</TableHead>
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
