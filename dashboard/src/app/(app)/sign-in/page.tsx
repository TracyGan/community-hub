"use client";

import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../components/Form";
import { Input } from "../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1),
});

export type TSignIn = z.infer<typeof signInSchema>;

export default function SignInPage() {
	const form = useForm<TSignIn>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onTouched",
	});

	const onSubmit = form.handleSubmit(async (data) => {});

	return (
		<div className="flex items-center justify-center py-20">
			<div className="flex flex-col items-center justify-center">
				<p className="text-2xl"> Sign In</p>
				<Form {...form}>
					<form onSubmit={onSubmit}>
						<div className="space-y-1">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email </FormLabel>
										<FormControl>
											<div className="relative text-grey-600">
												<Input
													className="h-14 rounded-xs pl-14 text-base"
													placeholder="Enter your email"
													required
													{...field}
												/>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<div className="flex items-center justify-between gap-4">
											<FormLabel>Password</FormLabel>
										</div>
										<FormControl>
											<Input placeholder="Enter your password" {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						<div className="mt-6 flex">
							<Button
								type="submit"
								size="lg"
								disabled={!form.formState.isValid}
								className="gap-1"
							>
								Sign In
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}
