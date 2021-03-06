export const setText = ({ country, keysearch, category, sources }, type) => {
  const titleNode = document.querySelector("#title");
  switch (type) {
    case "one":
      titleNode.innerHTML = `Latest News from <span>${country}</span>`;
      break;
    case "two":
      titleNode.innerHTML = `Latest News from <span>${country}</span> with a category <span>${category}</span>`;
      break;
    case "three":
      titleNode.innerHTML = `Latest News from sources <span>${sources}</span> and the keyword search is <span>"${keysearch}"</span>`;
      break;
  }
};
