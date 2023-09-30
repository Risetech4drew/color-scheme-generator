let schemeDataArry = [];

document
  .getElementById("get-color-scheme-btn")
  .addEventListener("click", getColorScheme);

function getColorScheme() {
  const seedColor = document
    .getElementById("seed-color")
    .value.replace("#", "");
  const selectedScheme = document.getElementById("color-scheme-options").value;
  console.log(seedColor);
  console.log(selectedScheme);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColor}&format=json&mode=${selectedScheme}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      schemeDataArry = data;
      renderSchemes();
    });
}

function renderSchemes() {
  const colorsDataArray = schemeDataArry.colors;
  let schemecolorsHtml = "";
  let colorValueHtml = "";
  colorsDataArray.forEach(function (scheme) {
    schemecolorsHtml += `
    <div class="scheme">
    <img src="${scheme.image.bare}"/>
    </div>`;
    colorValueHtml += `<p class="color-hex-value">${scheme.hex.value}</p>`;
  });
  document.getElementById("schemes-container").innerHTML = schemecolorsHtml;
  document.getElementById("scheme-values").innerHTML = colorValueHtml;
}
