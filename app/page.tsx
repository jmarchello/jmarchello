import SocialLinks from "./socialLinks";
import Menu from "./menu";

export default function Home() {
  return (
    <div className="p-24">
      <header className="flex flex-row">
        <div className="flex flex-col flex-1">
          <h1 className="text-7xl font-semibold">
            Hi! <br/>
            I'm Josh
          </h1>
          <SocialLinks/>
        </div>
        <div className="pe-24">
          <Menu/>
        </div>
      </header>
      <main>
      </main>
    </div>
  );
}
