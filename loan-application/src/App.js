import Header from "./components/Header";
import ApplicationForm from "./components/ApplicationForm";
import "./App.css";
import { userContext } from "./context/UserContext";

function App() {
  return (
    <userContext.Provider
      value={{ userName: "Kareem", name: "Ali", email: "KA@gmail.com" }}
    >
      <div className="App">
        <Header />
        <ApplicationForm />
      </div>
    </userContext.Provider>
  );
}

export default App;
