import "./Landing.css";
import { CounterButton, NewTabLink } from "ui";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="container">
      <h1 className="title">
        Admin <br />
        <span>Kitchen Sink</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <NewTabLink href="https://turbo.build/repo">Turborepo</NewTabLink> +{" "}
        <NewTabLink href="https://vitejs.dev/">Vite</NewTabLink>
      </p>
      <Link to="/dashboard">Go to Dashboard page</Link>
    </div>
  );
}

export default Landing;
