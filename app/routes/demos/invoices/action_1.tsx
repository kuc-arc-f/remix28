import { Link } from "remix";

export default function invoicesAction1() {
console.log("invoicesAction1");
  return (
    <div>
      <h2>action_1.tsx [⇓]</h2>
      <p>
        welcome, invoices action_1
      </p>
      <hr />
      <span className="mx-2">
        <Link to="..">[index]</Link>
      </span>      
    </div>
  );
}
