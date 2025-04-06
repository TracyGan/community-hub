"use client";

import * as React from "react";
// import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "../utils/cn";
import { Button } from "./Button";
import { Calendar } from "./Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { ScrollArea, ScrollBar } from "./ScrollArea";

type DateTimePickerProps = {
	value?: Date;
	onChange: (date: Date) => void;
};

export function DateTimePicker({ value, onChange }: DateTimePickerProps) {
	const [date, setDate] = React.useState<Date>();
	const [isOpen, setIsOpen] = React.useState(false);

	const hours = Array.from({ length: 12 }, (_, i) => i + 1);
	const handleDateSelect = (selectedDate: Date | undefined) => {
		if (selectedDate) {
			const newDate = new Date(selectedDate);
			setDate(newDate);
			onChange(newDate);
		}
	};

	const handleTimeChange = (type: "hour" | "minute" | "ampm", val: string) => {
		if (value) {
			const newDate = new Date(value);

			if (type === "hour") {
				const currentHour = newDate.getHours();
				const isPM = currentHour >= 12;
				const hour = Number.parseInt(val);
				newDate.setHours(isPM ? hour + 12 : hour);
			} else if (type === "minute") {
				newDate.setMinutes(Number.parseInt(val));
			} else if (type === "ampm") {
				const hour = newDate.getHours();
				if (val === "PM" && hour < 12) newDate.setHours(hour + 12);
				if (val === "AM" && hour >= 12) newDate.setHours(hour - 12);
			}

			onChange(newDate); // notify form
		}
	};

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button
					className={cn(
						"justify-start text-left font-normal",
						!date && "text-muted-foreground",
					)}
				>
					{/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
					{date ? (
						format(date, "MM/dd/yyyy hh:mm aa")
					) : (
						<span>MM/DD/YYYY hh:mm aa</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0 bg-white">
				<div className="sm:flex">
					<Calendar
						mode="single"
						selected={date}
						onSelect={handleDateSelect}
						initialFocus
					/>
					<div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
						<ScrollArea className="w-64 sm:w-auto">
							<div className="flex sm:flex-col p-2">
								{hours.reverse().map((hour) => (
									<Button
										key={hour}
										size="icon"
										variant={
											date && date.getHours() % 12 === hour % 12
												? "default"
												: "ghost"
										}
										className="sm:w-full shrink-0 aspect-square"
										onClick={() => handleTimeChange("hour", hour.toString())}
									>
										{hour}
									</Button>
								))}
							</div>
							<ScrollBar orientation="horizontal" className="sm:hidden" />
						</ScrollArea>
						<ScrollArea className="w-64 sm:w-auto">
							<div className="flex sm:flex-col p-2">
								{Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
									<Button
										key={minute}
										size="icon"
										variant={
											date && date.getMinutes() === minute ? "default" : "ghost"
										}
										className="sm:w-full shrink-0 aspect-square"
										onClick={() =>
											handleTimeChange("minute", minute.toString())
										}
									>
										{minute}
									</Button>
								))}
							</div>
							<ScrollBar orientation="horizontal" className="sm:hidden" />
						</ScrollArea>
						<ScrollArea className="">
							<div className="flex sm:flex-col p-2">
								{["AM", "PM"].map((ampm) => (
									<Button
										key={ampm}
										size="icon"
										variant={
											date &&
											((ampm === "AM" && date.getHours() < 12) ||
												(ampm === "PM" && date.getHours() >= 12))
												? "default"
												: "ghost"
										}
										className="sm:w-full shrink-0 aspect-square"
										onClick={() => handleTimeChange("ampm", ampm)}
									>
										{ampm}
									</Button>
								))}
							</div>
						</ScrollArea>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
