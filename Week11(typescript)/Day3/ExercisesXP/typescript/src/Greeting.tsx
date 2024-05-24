interface GreetingProps {
    name: string;
}
const Greeting = ({name}: GreetingProps) => {
  return (
    <div>
      <h2>{`Hello, ${name}, how are you ?`}</h2>
    </div>
  )
}

export default Greeting
