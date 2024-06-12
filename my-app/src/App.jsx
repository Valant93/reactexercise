
import { Welcome } from './Welcome'


export function App () {
  return (
    <div>
      <Welcome name="John" age={30} />
      <Welcome name="Doe" age={17} />
      <Welcome name="Alice" age={25} />
      <Welcome name="John" age={70} />
      <Welcome name="Mark" age={40} />
    </div>
  );
};

