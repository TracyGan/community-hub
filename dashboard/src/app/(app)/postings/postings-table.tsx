import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../../components/Table";
import { Icons } from "@/app/components/Icons";
import convertDateToString from "@/app/utils/date";
import { useGetAllDonations } from "@/app/queries/donations";
import type { TDonation } from "@/app/utils/types";

type TPostingsProps = {
	editDonation: (donation: TDonation) => void;
	deleteDonation: (donation: TDonation) => void;
};

export default function PostingsTable(props: TPostingsProps) {
	const { editDonation, deleteDonation } = props;

	const { data: donations } = useGetAllDonations();

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px] font-semibold">Title</TableHead>
					<TableHead className="font-semibold">Status</TableHead>
					<TableHead className="font-semibold">Category</TableHead>
					<TableHead className="font-semibold">Description</TableHead>
					<TableHead className="font-semibold">Pickup Location</TableHead>
					<TableHead className="font-semibold">Pickup Time</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{donations?.map((donation) => {
					return (
						<TableRow key={donation.id}>
							<TableCell className="font-medium">{donation.title}</TableCell>
							<TableCell className="font-medium">{donation.status}</TableCell>
							<TableCell className="font-medium">{donation.category}</TableCell>
							<TableCell className="font-medium">
								{donation.description}
							</TableCell>
							<TableCell className="font-medium">{donation.location}</TableCell>
							<TableCell className="font-medium">
								{convertDateToString(donation.time)}
							</TableCell>
							<TableCell className="font-medium">
								<span className="flex flex-row">
									{donation.status !== "RETRIEVED" && (
										<Icons.PencilIcon onClick={() => editDonation(donation)} />
									)}
									<Icons.TrashIcon onClick={() => deleteDonation(donation)} />
								</span>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}
