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

export type TItem = {
	id: number;
	category: keyof typeof CATEGORY;
	title: string;
	location: string;
	description: string;
	time: string;
	owner: string;
};
const items: TItem[] = [
	{
		id: 1,
		category: "FOOD" as keyof typeof CATEGORY,
		title: "Corn",
		description:
			"hdsahfuiafi uhqiuhfwei uwhig uei dwehiu huia hfuihuaiwh i urhquih  edsi hduiashduihasuidhsuiahdia",
		location: "Jurong West St 42",
		time: "10/04/2025",
		owner: "Justine",
	},
	{
		id: 2,
		category: "HOUSEHOLD" as keyof typeof CATEGORY,
		title: "Hand Mixer",
		description:
			"dausi dh ihe wqi uehui wqhe ui wqhu eihw uie heiwqh hweih iuqwh eui hqwiue ",
		location: "Jurong West St 42",
		time: "10/04/2025",
		owner: "Justine",
	},
	{
		id: 3,
		category: "FURNITURE" as keyof typeof CATEGORY,
		title: "Dining Chairs",
		description: "d has udihsa iudhuh uehu hufhqh ruhuirh iuw ",
		location: "Jurong West St 42",
		time: "10/04/2025",
		owner: "Justine",
	},
	{
		id: 4,
		category: "CLOTHING" as keyof typeof CATEGORY,
		title: "Aritzia Sweatpants",
		description: "s hd iaodi sai odsi e jrio jioj ijwioq oirio w3r",
		location: "Jurong West St 42",
		time: "10/04/2025",
		owner: "Justine",
	},
	{
		id: 5,
		category: "BOOKS" as keyof typeof CATEGORY,
		title: "Harry Potter: Greatest Width",
		description: "ds ndia odiosh  wjieoh oiah  jiowqjr ",
		location: "Jurong West St 42",
		time: "10/04/2025",
		owner: "Justine",
	},
];

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
			{/* <div className="flex flex-row justify-center p-3">
				<button type="button" className="rounded-3xl px-3 py-2 bg-[#F6CE48]">
					Browse More ...
				</button>
			</div>{" "} */}
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
