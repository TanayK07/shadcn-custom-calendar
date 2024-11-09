import React, { useState } from "react";
import { Calendar } from "../components/Calendar";

function HomePage() {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
	const upcomingEventDates = [new Date(2024, 10, 15), new Date(2024, 10, 18)];
	const ongoingEventDates = [new Date(2024, 10, 10), new Date(2024, 10, 11)];
	const completedEventDates = [new Date(2024, 10, 1), new Date(2024, 10, 5)];

	return (
		<div className="flex justify-center flex-col">
			<div className="flex justify-center">
				<Calendar
					onDateClick={(date) => setSelectedDate(date)}
					className="flex justify-center rounded-lg"
					modifiers={{
						upcoming: upcomingEventDates,
						ongoing: ongoingEventDates,
						completed: completedEventDates,
					}}
				/>
			</div>
			{selectedDate ? (
				<div className="text-center mt-4">
					Selected Date: {selectedDate.toDateString()}
				</div>
			) : (
				<div className="text-center mt-4">No date selected</div>
			)}
		</div>
	);
}

export default HomePage;
