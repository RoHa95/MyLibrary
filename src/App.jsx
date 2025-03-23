import Dashboard from "./components/Dashboard";
import FeutureBook from "./components/FeutureBook";
import Header from "./components/Header";
import RecommendedBooks from "./components/RecommendedBooks";

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <RecommendedBooks/>
      <FeutureBook/>
    </div>
  );
}

export default App;
