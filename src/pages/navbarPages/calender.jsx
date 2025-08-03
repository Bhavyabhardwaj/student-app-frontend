import CalendarGrid from "../navbarPages/calenderGrid";

export default function Calendar() {
  return (
    <div className="min-h-screen p-4 bg-white">
      <h1 className="text-3xl font-bold text-center mb-4">📅 PathVibe Calendar</h1>
      <CalendarGrid />
    </div>
  );
}
