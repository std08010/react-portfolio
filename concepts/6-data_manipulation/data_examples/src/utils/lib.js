export function loadJSON(key) {
  return key && JSON.parse(localStorage.getItem(key));
}

export function saveJSON(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
