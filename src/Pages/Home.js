import React, { useEffect } from "react";
import { data } from "../components/data";
import Comp2 from "../components/Comp2";
import Comp3 from "../components/Comp3";
import "./home.css";

export default function Home() {
  const arr = data;
  const [d, setd] = React.useState(
    () => JSON.parse(localStorage.getItem("data")) || []
  );
  const [items, setItems] = React.useState([]);
  const [cr, setcr] = React.useState(
    () => JSON.parse(localStorage.getItem("current")) || []
  );
  const [crState, setCrState] = React.useState(
    () => JSON.parse(localStorage.getItem("currentState")) || 0
  );

  // set problem count and set admin pg also and comp2
  var firstRound = 6;
  var end = 12;

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  }, [0]);
  React.useEffect(() => {
    const handleStorageChange = () => {
      setcr(JSON.parse(localStorage.getItem("current")) || []);
      setCrState(JSON.parse(localStorage.getItem("currentState")) || 0);
    };

    localStorage.setItem("timerOn", JSON.stringify(0));
    localStorage.setItem("timer", JSON.stringify(-1));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  React.useState(() => {
    const handleStorageChange1 = () => {
      setd(JSON.parse(localStorage.getItem("data")) || []);
    };

    window.addEventListener("storage", handleStorageChange1);
    return () => window.removeEventListener("storage", handleStorageChange1);
  }, []);
  useEffect(() => {
    let slarr = d.slice(0, firstRound);
    if (crState == 2) {
      slarr = d.slice(firstRound, end);
    }
    const stuff = [];
    slarr.map((ob) => {
      stuff.push(<Comp2 data={ob} />);
    });
    setItems(stuff);
  }, [d]);

  useEffect(() => {
    let slarr = d.slice(0, firstRound);
    if (crState == 2) {
      slarr = d.slice(firstRound, end);
    }
    const stuff = [];
    slarr.map((ob) => {
      stuff.push(<Comp2 data={ob} />);
    });
    setItems(stuff);
  }, [crState]);

  return (
    <>
      <div>
        {!cr || cr == 0 ? (
          <>
            {crState == 0 || crState == 2 ? (
              <>
               <div className="rounds">
                <div className="number">
                <h1>{crState == 0 ? "First" : "Second"} Round</h1>
                </div>

                {crState == 2 ? (
                  <>{items}</>
                ) : (
                  <div className="instructions">
                    <h1>Here are the instrcutions for Round 1</h1>
                  </div>
                )}
                </div>
              </>
            ) : (
              <>
                <div className="banner">
                  <div className="analytIQ" id="subCategoriesHero">
                    <img src="https://pulz.acicts.lk/_next/static/media/analytiqLogo.deda410c.png"></img>

                    <div className="footer_logos">
                      <img src="https://pulz.acicts.lk/_next/static/media/favicon.5a26284e.png"></img>
                      <img src="https://pulz.acicts.lk/_next/static/media/acicts.ae7820fb.png"></img>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <></>
        )}
        {<Comp3 />}
      </div>
    </>
  );
}
