import React from "react";

export function Form({ children, ...props }) {
  return <form className="flex" {...props}>{children}</form>;
}
