  // add ID class for anchor linking
  const table = document.querySelector('.facts');

  const tdElements = table.querySelectorAll('td');

  tdElements.forEach((td, index) => {
    td.setAttribute('id', index + 1);
  });

  // random fact button guts
  document.getElementById("random-fact-button").addEventListener("click", function() {
    const factRows = document.querySelectorAll('.fact');

    const randomFactRow = factRows[Math.floor(Math.random() * factRows.length)];

    const factText = randomFactRow.innerHTML;

    const factColorClass = randomFactRow.classList[0];

    const factDisplay = document.getElementById("random-fact-display");
    factDisplay.style.display = "block";
    factDisplay.innerHTML = factText;

    factDisplay.className = factColorClass;
  });

  // category number counters
document.getElementById("factscount").innerHTML = document.getElementsByClassName("fact").length
document.getElementById("naturecount").innerHTML = document.getElementsByClassName("nature").length
document.getElementById("spacecount").innerHTML = document.getElementsByClassName("space").length
document.getElementById("worldcount").innerHTML = document.getElementsByClassName("world").length
document.getElementById("bodycount").innerHTML = document.getElementsByClassName("body").length
document.getElementById("triviacount").innerHTML = document.getElementsByClassName("trivia").length
document.getElementById("flwcount").innerHTML = document.getElementsByClassName("flw").length
document.getElementById("peoplecount").innerHTML = document.getElementsByClassName("people").length
document.getElementById("wincount").innerHTML = document.getElementsByClassName("win").length
document.getElementById("jodicount").innerHTML = document.getElementsByClassName("jodi").length
document.getElementById("pancount").innerHTML = document.getElementsByClassName("pan").length
document.getElementById("kriegcount").innerHTML = document.getElementsByClassName("krieg").length
document.getElementById("sammiecount").innerHTML = document.getElementsByClassName("sammie").length
document.getElementById("recordscount").innerHTML = document.getElementsByClassName("records").length
 // lastModified
  const el = document.getElementById('last-modified');
  if (el && document.lastModified) {
    el.textContent = new Date(document.lastModified).toLocaleString();
  }