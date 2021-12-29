import { Outlet, Link } from "remix";
import type { MetaFunction, LinksFunction } from "remix";


import stylesUrl from "~/styles/demos/about.css";

export let meta: MetaFunction = () => {
  return {
    title: "demos-About Remix"
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <div>
      <div>
        <span className="fs-3">invoices.tsx</span>
        <span className="mx-2">
          <Link to="action_1">[action-1]</Link>
        </span>
        <span className="mx-2">
          <Link to="action_2">[action-2]</Link>
        </span>
        <hr />
        <div className="container">
          <Outlet />
        </div>
      </div>
      {/*
      <Link to="/demos/invoices/action_1">[action-1]</Link>
      */}
    </div>
  );
}
