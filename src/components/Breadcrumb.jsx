import React from "react";
import { Link, useMatches } from "react-router-dom";

const Breadcrumb = () => {
  const matches = useMatches();

  return (
    <div className="breadcrumb-content flex items-center text-white bg-black space-x-2 h-20 w-full px-32">
      <Link to="/" className="hover:underline">
        Home
      </Link>

      {matches
        .filter((match, index) => {
          return (
            match.handle &&
            match.handle.breadcrumb &&
            (index > 0 || match.pathname !== "/")
          );
        })
        .map((match, index) => {
          const isLast = index === matches.length - 1;
          return (
            <React.Fragment key={match.pathname}>
              <span>{">"}</span>
              {isLast ? (
                <span className="underline">{match.handle.breadcrumb}</span>
              ) : (
                <Link to={match.pathname} className="hover:underline">
                  {match.handle.breadcrumb}
                </Link>
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Breadcrumb;
