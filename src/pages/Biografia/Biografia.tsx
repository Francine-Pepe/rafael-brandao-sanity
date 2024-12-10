import { GridLinkImages } from "../../data";
import GridLayout from "./GridLayout";

function Biografia() {
  return (
    <main className="biografia-container container">
      <GridLayout data={GridLinkImages} />  
    </main>
  );
}

export default Biografia;
