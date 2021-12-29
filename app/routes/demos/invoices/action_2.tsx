import { Link } from "remix";

export default function invoicesAction2() {
console.log("invoicesAction2");
  return (
    <div>
      <h2>action_2.tsx [⇓]</h2>
      <p>
        welcome, action_2
      </p>
      <hr />
      <span className="mx-2">
        <Link to="..">[index]</Link>
      </span>

    </div>
  );
}
