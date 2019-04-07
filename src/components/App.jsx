import React from "react";
const Calculator = React.lazy(() => import("./Calculator"));

import "../css/normalize.scss";
import "../css/core.scss";

import appleSvg from "../assets/apple.svg";

export default function App() {
  document.title = "Calculator";
  return (
    <div className="pageWrapper">
      <div className="pageInner">
        <header className="header">
          <img src={appleSvg} alt="the Apple logo" />
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Special</span>
        </header>
        <main className="main">
          <React.Suspense fallback={""}>
            <Calculator />
          </React.Suspense>
        </main>
      </div>
    </div>
  );
}
