"use client";

import { NavBar } from "../../components/NavBar";
import { DonationForm, type TDonationFormProps } from "./donate-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCreateDonation } from "@/app/mutations/use-mutate-donations";
import type { TDonation } from "@/app/utils/types";

export default function MakeADonation() {
	const createDonationMutation = useCreateDonation({
		onSuccess: () => {
			toast("Donation has been created!");
			router.push("./");
		},
		onError: () => {},
	});

	const router = useRouter();
	const onSubmit: TDonationFormProps["onSubmit"] = async (data) => {
		// create a donation

		const createdDonation: Omit<
			TDonation,
			"id" | "createdAt" | "updatedAt" | "recipientId" | "donorId" | "deletedAt"
		> = {
			title: data.title,
			description: data.description,
			category: data.category,
			status: "NEW",
			location: data.location,
			time: data.time,
		};
		createDonationMutation.mutate(createdDonation);
	};

	return (
		<div>
			<NavBar />
			<div className="p-8">
				<div className="text-xl font-semibold"> Make A Donation</div>
				<div className="grid grid-cols-2">
					<DonationForm onSubmit={onSubmit} type="Create" />
				</div>
			</div>
		</div>
	);
}
