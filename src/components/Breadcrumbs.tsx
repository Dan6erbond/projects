import React from "react";
import { Link } from "react-router-dom";

interface Breadcrumb {
  url?: string;
  name: string;
}

const Breadcrumbs = (props: { breadcrumbs: Breadcrumb[] }) => (
  <ol className="breadcrumb">
    <style>
      {`
      .breadcrumb { background-color: white; }
      .breadcrumb > li:not(:last-child) > span::after {
        content: " / ";
        padding-right: 0.3em;
      }
      `}
    </style>
    {props.breadcrumbs.map((breadcrumb: Breadcrumb, index: number) => (
      <li key={index}>
        {breadcrumb.url ? (
          <span>
            <Link to={breadcrumb.url}>{breadcrumb.name}</Link>
          </span>
        ) : (
          <span>{breadcrumb.name}</span>
        )}
      </li>
    ))}
  </ol>
);

export default Breadcrumbs;
