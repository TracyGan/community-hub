"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../components/Form";
import { Input } from "../components/Input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../components/Select";
import { CATEGORY } from "../home/browse-items";
import { DateTimePicker } from "../components/DateTimePicker";
import { Button } from "../components/Button";

const formSchema = z.object({
	title: z.string().min(1),
	location: z.string().min(1),
	description: z.string().min(1),
	category: z.string().min(1, { message: "Select a category" }),
	time: z.date({ message: "Select a date and time" }),
});

export type TDonationFormProps = {
	onSubmit: (payload: {
		title: string;
		location: string;
		description: string;
		time: Date;
	}) => void;
};

export function DonationForm(props: TDonationFormProps) {
	const { onSubmit } = props;
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			location: "",
			description: "",
			category: "",
			time: new Date(),
		},
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 py-6">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<span className="flex flex-row">
								<FormLabel className="p-2 font-bold">Title</FormLabel>
								<FormControl className="px-3">
									<Input
										placeholder="Gap T-Shirt"
										{...field}
										className="border-none"
									/>
								</FormControl>
							</span>
							<FormMessage className="text-xs text-red-500 o" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<span className="flex flex-row">
								<FormLabel className="p-2 font-bold">Description</FormLabel>
								<FormControl className="px-3">
									<Input
										placeholder="Blue T-Shirt from Gap and of size XS."
										{...field}
										className="border-none"
									/>
								</FormControl>
							</span>

							<FormMessage className="text-xs text-red-500" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem>
							<span className="flex flex-row">
								<FormLabel className="p-2 font-bold">Category</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl className="px-3">
										<SelectTrigger className="border-none">
											<SelectValue placeholder="" />
										</SelectTrigger>
									</FormControl>
									<SelectContent className="border-none bg-white">
										{Object.entries(CATEGORY).map(([key, value]) => (
											<SelectItem key={key} value={key}>
												{value.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</span>

							<FormMessage className="text-xs text-red-500" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="location"
					render={({ field }) => (
						<FormItem>
							<span className="flex flex-row">
								<FormLabel className="p-2 font-bold">Pickup Location</FormLabel>
								<FormControl className="px-3">
									<Input
										placeholder="E. Pender St Block 42"
										{...field}
										className="border-none"
									/>
								</FormControl>
							</span>

							<FormMessage className="text-xs text-red-500" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="time"
					render={({ field }) => (
						<FormItem>
							<span className="flex flex-row">
								<FormLabel className="p-2 font-bold">Pickup Time</FormLabel>
								<FormControl className="px-3">
									<DateTimePicker
										value={field.value}
										onChange={field.onChange}
									/>
								</FormControl>
							</span>

							<FormMessage className="text-xs text-red-500" />
						</FormItem>
					)}
				/>
				<Button type="submit" className="bg-[#F6CE48]">
					Create A Donation
				</Button>
			</form>
		</Form>
	);
}
