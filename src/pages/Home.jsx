import { useRecoilState } from "recoil";
import { todoListState, currentUserState } from "../recoil/atoms";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [user, setUser] = useRecoilState(currentUserState);
  const navigate = useNavigate();

  const handleVote = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <label>User: </label>
      <select value={user} onChange={(e) => setUser(e.target.value)}>
        <option>Guest</option>
        <option>Ana</option>
        <option>Budi</option>
        <option>Charlie</option>
      </select>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            <span
              onClick={() => navigate(`/detail/${todo.id}`)}
              style={{ cursor: "pointer", marginRight: "10px" }}
            >
              {todo.title} — Votes: {todo.votes}
            </span>

            <button onClick={() => handleVote(todo.id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
