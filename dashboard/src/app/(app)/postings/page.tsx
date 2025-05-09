"use client";

import { useGetAllDonations } from "@/app/queries/donations";
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
import PostingsTable from "./postings-table";

export default function PostingsPage() {
	const [openDonationModal, setOpenDonationModal] = useState(false);
	const [openDeleteDonationModal, setOpenDeleteDonationModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState<TDonation | null>(null);

	const editDonation = (donation: TDonation) => {
		setSelectedItem(donation);
		setOpenDonationModal(true);
	};

	const deleteDonation = (donation: TDonation) => {
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
						<PostingsTable
							editDonation={editDonation}
							deleteDonation={deleteDonation}
						/>
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
