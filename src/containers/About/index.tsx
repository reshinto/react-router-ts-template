import useNavigationHook from "../../shared/hooks/useNavigationHook";

function About() {
  const { handleClick } = useNavigationHook({});

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}

export default About;
