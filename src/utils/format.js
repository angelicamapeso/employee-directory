/* Each format function takes an input and returns
formated information */
export function formatToId(text) {
  return text.toLowerCase().replace(" ", "-");
}
