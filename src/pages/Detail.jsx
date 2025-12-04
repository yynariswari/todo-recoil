import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { todoListState, currentUserState } from "../recoil/atoms";

export default function Detail() {
  const { id } = useParams();
  const todos = useRecoilValue(todoListState);
  const user = useRecoilValue(currentUserState);

  const item = todos.find((todo) => todo.id === Number(id));

  return (
    <div style={{ padding: "20px" }}>
      <h2>Detail Todo</h2>

      <p>
        <strong>ID:</strong> {item.id}
      </p>
      <p>
        <strong>Title:</strong> {item.title}
      </p>
      <p>
        <strong>Votes:</strong> {item.votes}
      </p>

      <hr />

      <p>
        <strong>Current User:</strong> {user}
      </p>
    </div>
  );
}
