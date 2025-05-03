import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} replace/>}/>
      <Route path="/home" element={<HomePage />} />
      <Route path="/favorite-Books" element={<FavoritePage />} />
    </Routes>
  );
}

export default App;
