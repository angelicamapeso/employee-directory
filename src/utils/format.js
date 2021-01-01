/* Each format function formats the
apperance of a piece of employee information.
Each function returns a react element to
be displayed */

import React from "react";

export function formatName(name, nameFilter) {
  const match = name.match(nameFilter);
  if (match) {
    return (
      <React.Fragment>
        <strong>{match[0]}</strong>
        {name.slice(match[0].length)}
      </React.Fragment>
    );
  } else {
    return name;
  }
}
