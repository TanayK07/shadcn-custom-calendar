"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
	onDateClick?: (date: Date) => void;
};

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	onDateClick,
	...props
}: CalendarProps) {
	return (
		<DayPicker
			onDayClick={onDateClick}
			showOutsideDays={showOutsideDays}
			//@ts-ignore
			className={cn("p-3 bg-white", className)}
			classNames={{
				months:
					"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
				month: "space-y-4",
				caption: "flex justify-center pt-1 relative items-center",
				caption_label: "text-sm font-medium",
				nav: "space-x-1 flex items-center",
				nav_button: cn(
					buttonVariants({ variant: "outline" }),
					"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
				),
				nav_button_previous: "absolute left-1",
				nav_button_next: "absolute right-1",
				table: "w-full border-collapse space-y-1",
				head_row: "flex ml-2 flex-1 space-x-3 w-full",
				head_cell:
					"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
				row: "flex w-full mt-2",
				cell: "h-12 w-12 text-center text-sm p-0 relative",
				day: cn(
					buttonVariants({ variant: "ghost" }),
					"h-8 w-8 p-0 font-normal aria-selected:opacity-100"
				),
				day_range_end: "day-range-end",
				day_selected: "bg-primary text-primary-foreground rounded-md",
				day_today: "!bg-wi-primary !rounded-full text-white",
				day_outside: "text-muted-foreground opacity-50",
				day_disabled: "text-muted-foreground opacity-50",
				day_range_middle:
					"aria-selected:bg-accent aria-selected:text-accent-foreground",
				day_hidden: "invisible",
				...classNames,
			}}
			modifiersClassNames={{
				upcoming: "bg-[#f0c34e] rounded-full text-white",
				ongoing: "bg-[#34C759] rounded-full text-white",
				completed: "bg-[#C6C6C6] rounded-full text-white",
			}}
			components={{
				IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
				IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
			}}
			{...props}
		/>
	);
}

Calendar.displayName = "Calendar";

export { Calendar };
