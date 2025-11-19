import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabin }) {
  const [settings, bookingDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth()
  const user = session?.user?.name
  return (
    <div className="grid md:grid-cols-2  border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        cabin={cabin}
        bookingDates={bookingDates}
      />
      <ReservationForm cabin={cabin} bookingDates={bookingDates} user={user} />
    </div>
  );
}
