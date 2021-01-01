/* Each format function takes an input and returns
formated information */

/*React formatters*/
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

/*Data formatters*/
export function formatToId(text) {
  return text.toLowerCase().replace(" ", "-");
}
