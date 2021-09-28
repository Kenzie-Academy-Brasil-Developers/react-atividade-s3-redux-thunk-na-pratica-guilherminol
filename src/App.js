import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "./store/modules/user/thunk";
import { useState } from "react";
import CommentPost from "./components/CommentPost";
function App() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.user.comments);
  const [userInput, setUserInput] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <textarea
          placeholder="Sobre o que você está pensando ?"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={() => dispatch(addCommentThunk(userInput))}>
          Postar
        </button>
        {comments
          ? comments.map((comment) => <CommentPost str={comment}></CommentPost>)
          : null}
      </header>
    </div>
  );
}

export default App;
