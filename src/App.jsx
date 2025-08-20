
import Rating from "./components/rating.jsx";




const App = () => {
  return (
  <div> 
    <Rating heading = "How do you feel about React" feedBackMessages = {['hate it', 'dislike it', 'meh', 'like it', 'love it']}
  
    /> 
  </div>
    );
};
 
export default App;