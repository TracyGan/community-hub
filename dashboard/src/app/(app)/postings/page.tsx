"use client";

import { useGetAllUserDonations } from "@/app/queries/donations";
import { NavBar } from "../../components/NavBar";
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
import { useCallback, useState } from "react";
import type { TDonation } from "@/app/utils/types";
import { EditDonationModal } from "@/app/modals/edit-donation-modal";
import { DeleteDonationModal } from "@/app/modals/delete-donation-modal";

export default function PostingsPage() {
	const { data: donations } = useGetAllUserDonations();

	const [openDonationModal, setOpenDonationModal] = useState(false);
	const [openDeleteDonationModal, setOpenDeleteDonationModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState<TDonation | null>(null);

	const editDonation = useCallback((donation: TDonation) => {
		setSelectedItem(donation);
		setOpenDonationModal(true);
	}, []);

	const useDeleteDonation = (donation: TDonation) => {
		setSelectedItem(donation);
		setOpenDeleteDonationModal(true);
	};

	return (
		<div>
			<NavBar />
			<div className="p-8">
				<div className="text-xl font-semibold">
					View Donation Postings
					<div className="py-3">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[100px] font-semibold">
										Title
									</TableHead>
									<TableHead className="font-semibold">Status</TableHead>
									<TableHead className="font-semibold">Category</TableHead>
									<TableHead className="font-semibold">Description</TableHead>
									<TableHead className="font-semibold">
										Pickup Location
									</TableHead>
									<TableHead className="font-semibold">Pickup Time</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{donations?.map((donation) => {
									return (
										<TableRow key={donation.id}>
											<TableCell className="font-medium">
												{donation.title}
											</TableCell>
											<TableCell className="font-medium">
												{donation.status}
											</TableCell>
											<TableCell className="font-medium">
												{donation.category}
											</TableCell>
											<TableCell className="font-medium">
												{donation.description}
											</TableCell>
											<TableCell className="font-medium">
												{donation.location}
											</TableCell>
											<TableCell className="font-medium">
												{convertDateToString(donation.time)}
											</TableCell>
											<TableCell className="font-medium">
												<span className="flex flex-row">
													{donation.status !== "RETRIEVED" && (
														<Icons.PencilIcon
															onClick={() => editDonation(donation)}
														/>
													)}
													<Icons.TrashIcon
														onClick={() => useDeleteDonation(donation)}
													/>
												</span>
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
						{openDonationModal && (
							<EditDonationModal
								open={openDonationModal}
								toggleOpen={setOpenDonationModal}
								donationItem={selectedItem}
							/>
						)}
						{openDeleteDonationModal && (
							<DeleteDonationModal
								open={openDeleteDonationModal}
								toggleOpen={setOpenDeleteDonationModal}
								donationId={selectedItem?.id}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
