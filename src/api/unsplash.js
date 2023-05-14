const URL =
  "https://api.unsplash.com/search/photos?client_id=7pmB29Xi9rOWHhYpvtuc4edchzh1w0eawUjJwNAqngA&query=";

export async function fetchImages(searchString) {
  const response = await fetch(`${URL}${searchString}`);
  return await response.json();
}
