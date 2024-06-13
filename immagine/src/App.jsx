export default function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target);
  }
  return (
    <div>
     
      <button onClick={handleButtonClick}> <img width={24} height={24} />Click me! </button>
    </div>
  );
}
