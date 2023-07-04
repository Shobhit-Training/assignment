import "office-ui-fabric-react/dist/css/fabric.css";
import "./App.css";

import CardsSection from "./components/CardSelection/CardSection";
import GridData from "./components/Grid/Grid";

export const App: React.FunctionComponent = () => {
  return (
    <div role="parent-div" data-testid="parent">
      <div className="main-element">
        <div data-testid="card">
          <CardsSection />
        </div>
        <div data-testid="grid" className="ms-Grid-row">
          <GridData />
        </div>
      </div>
    </div>
  );
};
