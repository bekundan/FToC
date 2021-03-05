const calculateTemp = () => {
  const TempNum = document.getElementById("temp").value;
  const TempSelect = document.getElementById("temp_div");
  const valueTemp = temp_div.options[TempSelect.selectedIndex].value;
  console.log(valueTemp);
  const cTof = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };
  const fToc = (feh) => {
    let celsius = Math.round(((feh - 32) * 5) / 9);
    return celsius;
  };
  var result;
  if (valueTemp == "cs") {
    result = cTof(TempNum);
    document.getElementById("result").innerHTML = `=${result} 'F`;
  } else {
    result = fToc(TempNum);
    document.getElementById("result").innerHTML = `=${result}'C`;
  }
};
