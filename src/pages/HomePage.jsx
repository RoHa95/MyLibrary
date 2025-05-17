
import BookList from "../components/BookList"
import Dashboard from "../components/Dashboard";
import FeutureBook from "../components/FeutureBook";
import Header from "../components/Header";
import ImageStoraged from "../components/ImageStoraged";
import RecommendedBooks from "../components/RecommendedBooks";

function HomePage()  {
   
    return (
      <div>
        <Header />
        <Dashboard />
        <RecommendedBooks/>
        <FeutureBook/>
        <BookList/>
       
      </div>
    );
  }

export default HomePage