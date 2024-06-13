import { AlertClock } from "./AlertClock";

export default function App() {
  const showAlertWithCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`The current time is: ${currentTime}`);
  };

  return (
    <div>
      <AlertClock handleClick={showAlertWithCurrentTime} />
    </div>
  );
}
