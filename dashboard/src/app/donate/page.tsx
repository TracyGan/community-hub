"use client";

import { type FormEvent, useRef } from "react";
import { NavBar } from "../components/NavBar";
import { Label } from "../components/Label";
import { DonationForm, type TDonationFormProps } from "./donate-form";
import { Button } from "../components/Button";
import { toast } from "sonner";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MakeADonation() {
	const router = useRouter();
	const onSubmit: TDonationFormProps["onSubmit"] = async (data) => {
		// create a donation
		console.log(data);
		toast("Donation has been created!");
		router.push("./");
	};
	return (
		<div>
			<NavBar />
			<div className="p-8">
				<div className="text-xl font-semibold"> Make A Donation</div>
				<div className="grid grid-cols-2">
					<DonationForm onSubmit={onSubmit} />
				</div>
			</div>
		</div>
	);
}
