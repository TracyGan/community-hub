"use client";

import { toast } from "sonner";
import { Button } from "../components/Button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../components/Dialog";
import type { TDonation } from "../utils/types";
import {
	DonationForm,
	type TDonationFormProps,
} from "../(app)/donate/donate-form";
import { useUpdateDonation } from "../mutations/use-mutate-donations";
import { invalidateGetAllDonations } from "../queries/donations";

export function EditDonationModal({
	open,
	toggleOpen,
	donationItem,
}: {
	open: boolean;
	toggleOpen: (open: boolean) => void;
	donationItem: TDonation | null;
}) {
	if (!donationItem) {
		return null;
	}
	const { time, ...otherDonationData } = donationItem;

	const updateDonationMutation = useUpdateDonation({
		onSuccess: () => {
			toggleOpen(false);
			invalidateGetAllDonations();
			toast("Donation has been created!");
		},
		onError: () => {
			toast("Donation has unsuccessfully been created!");
		},
	});

	const onSubmit: TDonationFormProps["onSubmit"] = async (data) => {
		const updatedDonation: Omit<
			TDonation,
			"createdAt" | "updatedAt" | "deletedAt"
		> = {
			id: donationItem.id,
			title: data.title,
			description: data.description,
			category: data.category,
			status: "PENDING",
			location: data.location,
			time: data.time,
			donorId: donationItem.donorId,
			recipientId: donationItem.recipientId,
		};
		updateDonationMutation.mutate(updatedDonation);
	};

	return (
		<div>
			<Dialog open={open} onOpenChange={toggleOpen}>
				<DialogTrigger asChild />
				<DialogContent className="sm:max-w-[425px] bg-[#ffffff]">
					<DialogHeader>
						<DialogTitle>Edit Donation</DialogTitle>
					</DialogHeader>
					<DonationForm
						onSubmit={onSubmit}
						donation={{
							...otherDonationData,
							time: new Date(time), // Ensure time is properly formatted
						}}
						type="Edit"
					/>
				</DialogContent>
			</Dialog>
		</div>
	);
}
