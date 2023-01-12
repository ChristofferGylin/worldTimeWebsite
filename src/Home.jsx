import Clock from "./Clock";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
      <Clock city="Stockholm" timeZone="Europe/Stockholm" />
      <Clock city="London" timeZone="Europe/London" />
      <Clock city="New York" timeZone="America/New_York" />
      <Clock city="Sydney" timeZone="Australia/Sydney" />
    </div>
  );
}
