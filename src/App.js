import { Sidebar } from "./component/Sidebar";
import { Navbar } from "./component/Navbar";
import { Form } from "./component/Route";
import { Cards } from "./component/Cards";

import "./App.css";

export const App = () => {
  return (
    <div class="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 p-0 border-start">
          <Navbar />
          <div className="p-3">
            <h3 className="m-4">
              Welcome, Find a felxible flight for your next trip
            </h3>
          </div>
          <Form />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default App;
