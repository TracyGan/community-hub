"use client";
import { useCallback, useState } from "react";
import { DonationModal } from "../../modals/donation-modal";
import { useGetAllDonationsNotByUser } from "@/app/queries/donations";
import type { TDonation } from "@/app/utils/types";

export const CATEGORY = {
	FOOD: {
		name: "Food",
		color: "bg-green-200 text-green-800",
	},
	CLOTHING: {
		name: "Clothing",
		color: "bg-blue-200 text-blue-800",
	},
	FURNITURE: {
		name: "Furniture",
		color: "bg-purple-200 text-purple-800",
	},
	BOOKS: {
		name: "Book",
		color: "bg-orange-200 text-orange-800",
	},
	HOUSEHOLD: {
		name: "Household",
		color: "bg-yellow-200 text-yellow-800",
	},
} as const;

export function BrowseItems() {
	const [openDonationModal, setOpenDonationModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState<TDonation | null>(null);

	const clickDonation = useCallback((item: TDonation) => {
		setSelectedItem(item);
		setOpenDonationModal(true);
	}, []);

	const { data: donations } = useGetAllDonationsNotByUser();

	return (
		<div>
			<div className="text-lg py-3 font-semibold">Browse Donations</div>
			<div className="grid grid-cols-3 gap-3">
				{donations?.map((donation) => {
					return (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<div
							key={donation.id}
							className="border rounded-lg p-3 bg-[#ffffff] border-gray-400 hover:shadow-xl"
							onClick={() => clickDonation(donation)}
						>
							<span className="flex flex-row justify-between">
								<div className="font-bold">{donation.title}</div>
								<div
									className={` border rounded-xl justify-end px-2  ${CATEGORY[donation.category].color}`}
								>
									{CATEGORY[donation.category].name}
								</div>
							</span>
							{/* <p className="text-gray-500 text-xs">@{donation.owner}</p> */}

							<p className="text-gray-500 text-sm">
								Pickup Location: {donation.location}
							</p>
							<p className="text-gray-500 text-sm">
								Pickup Time: {donation.time.toLocaleString()}
							</p>
						</div>
					);
				})}
			</div>

			{selectedItem && (
				<DonationModal
					open={openDonationModal}
					toggleOpen={setOpenDonationModal}
					donationItem={selectedItem}
				/>
			)}
		</div>
	);
}
