import { Counter } from "./Counter";

export default function App() {
  return (
    <div>
      <Counter initialCount={0} decrementAmount={1} />
    </div>
  );
}
