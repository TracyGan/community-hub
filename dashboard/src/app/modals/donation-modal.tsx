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
import { invalidateGetAllDonations } from "../queries/donations";
import { useUpdateDonation } from "../mutations/use-mutate-donations";

export function DonationModal({
	open,
	toggleOpen,
	donationItem,
}: {
	open: boolean;
	toggleOpen: (open: boolean) => void;
	donationItem: TDonation;
}) {
	const { title, description, location, time, category, status } = donationItem;

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

	const submitInterestInDonation = () => {
		const updatedDonation: Omit<
			TDonation,
			"createdAt" | "updatedAt" | "deletedAt"
		> = {
			id: donationItem.id,
			title: title,
			description: description,
			category: category,
			status: "PENDING",
			location: location,
			time: time,
			donorId: donationItem.donorId,
			recipientId: "",
		};

		updateDonationMutation.mutate(updatedDonation);
		toggleOpen(false);
		toast("Interest in donation!");
	};
	return (
		<div>
			<Dialog open={open} onOpenChange={toggleOpen}>
				<DialogTrigger asChild />
				<DialogContent className="sm:max-w-[425px] bg-[#ffffff]">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
					</DialogHeader>
					<p className="text-xs">Donated by @</p>
					<p className="py-2">{description}</p>

					<p className="p-0">
						Pickup Location: {location} <br />
						Pickup Time: {time ? time.toLocaleString() : "No set time"}
					</p>

					{status !== "NEW" && (
						<p className="text-xs text-gray-600">
							Sorry, this donation already has an recipient!
						</p>
					)}

					<DialogFooter>
						<Button
							type="submit"
							className={`rounded-2xl bg-[#F6CE48] font-semibold hover:shadow-2xl border-none shadow-none ${status !== "NEW" ? "cursor-not-allowed" : "cursor-pointer"}`}
							onClick={submitInterestInDonation}
							disabled={status !== "NEW"}
						>
							Place Interest
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
