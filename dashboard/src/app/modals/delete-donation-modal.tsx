"use client";

import { toast } from "sonner";
import { Button } from "../components/Button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../components/Dialog";
import { useDeleteDonation } from "../mutations/use-mutate-donations";
import { invalidateGetAllUserDonations } from "../queries/donations";

export function DeleteDonationModal({
	open,
	toggleOpen,
	donationId,
}: {
	open: boolean;
	toggleOpen: (open: boolean) => void;
	donationId?: string;
}) {
	if (!donationId) {
		return null;
	}

	const deleteDonationMutation = useDeleteDonation({
		onSuccess: () => {
			toggleOpen(false);
			invalidateGetAllUserDonations();
			toast("Donation has been deleted!");
		},
		onError: () => {
			toast("Donation has unsuccessfully been deleted!");
		},
	});

	const deleteDonation = () => {
		deleteDonationMutation.mutate(donationId);
	};

	return (
		<div>
			<Dialog open={open} onOpenChange={toggleOpen}>
				<DialogTrigger asChild />
				<DialogContent className="sm:max-w-[425px] bg-[#ffffff]">
					<DialogHeader>
						<DialogTitle>Delete Donation</DialogTitle>
					</DialogHeader>
					<p className="text-xs">
						Are you sure you want to delete this donation?
					</p>
					<div className="pt-4 flex flex-row justify-end">
						<Button
							className="bg-[#F6CE48] w-1/3"
							onClick={() => deleteDonation()}
						>
							Yes
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
