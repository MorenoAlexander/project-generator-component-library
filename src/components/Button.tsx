import React from "react";
import "../styles/Button.css";

// import sibling components.

import LoadingIndicator from "./LoadingIndicator";
const { useContext } = React;

interface ButtonProps {
  primary: boolean;
  label: string;
  color: string;
  textColor: string;
  loading: boolean;
  disabled: boolean;
  loadingText?: string;
  onClick?: () => void;
}
// fixed styles that may be overwritten later

export default function Button({
  primary = false,
  label,
  color = "black",
  textColor = "white",
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  function DisplayChildren() {
    if (loading) {
      return (
        <div className="inline-flex">
          <LoadingIndicator />
          {props?.loadingText || "dsad"}
        </div>
      );
    }
    return <>{label}</>;
  }

  //   const context = useContext(context);

  const mode = primary ? "primary-button" : "secondary-button";
  if (loading) {
    // handled
  }
  return (
    <button
      className={[
        "button-fixed-style",
        mode,
        `bg-${color}`,
        `text-${textColor}`,
        loading ? "loading-style" : "",
      ].join(" ")}
      disabled={loading || disabled}
      onClick={props.onClick}
    >
      {DisplayChildren()}
    </button>
  );
}
