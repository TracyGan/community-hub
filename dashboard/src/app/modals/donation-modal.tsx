import { toast } from "sonner";
import { Button } from "../components/Button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../components/Dialog";
import { Input } from "../components/Input";
import type { TItem } from "../home/browse-items";

export function DonationModal({
	open,
	toggleOpen,
	donationItem,
}: {
	open: boolean;
	toggleOpen: (open: boolean) => void;
	donationItem: TItem;
}) {
	const { title, description, location, time, owner } = donationItem;

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
					<p className="text-xs">Donated by @{owner}</p>
					<p className="py-2">{description}</p>

					<p className="p-0">
						Pickup Location: {location} <br />
						Pickup Time: {time}
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
