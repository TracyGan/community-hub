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

export function DonationModal({
	open,
	toggleOpen,
	donationItem,
}: {
	open: boolean;
	toggleOpen: (open: boolean) => void;
	donationItem: TDonation;
}) {
	const { title, description, location, time } = donationItem;

	const submitInterestInDonation = () => {
		// todo: place the interest of donation
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

					<DialogFooter>
						<Button
							type="submit"
							className="rounded-2xl bg-[#F6CE48] font-semibold hover:shadow-2xl border-none shadow-none"
							onClick={submitInterestInDonation}
						>
							Place Interest
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
