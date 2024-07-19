document.addEventListener("DOMContentLoaded", () => {
  const countersContainer = document.getElementById("counters");
  const totalSumElement = document.getElementById("total-sum");
  const addCounterButton = document.getElementById("add-counter");
  let totalSum = 0;

  function updateTotalSum() {
    totalSumElement.textContent = totalSum;
  }

  function createCounter() {
    let count = 0;

    const counter = document.createElement("div");
    counter.className = "counter";

    const incButton = document.createElement("button");
    incButton.textContent = "+";
    incButton.addEventListener("click", () => {
      count += 1;
      countElement.textContent = count;
      totalSum += 1;
      updateTotalSum();
    });

    const countElement = document.createElement("h3");
    countElement.className = "number";
    countElement.textContent = count;

    const decButton = document.createElement("button");
    decButton.textContent = "-";
    decButton.addEventListener("click", () => {
      if (count > 0) {
        count -= 1;
        countElement.textContent = count;
        totalSum -= 1;
        updateTotalSum();
      }
    });

    const clrButton = document.createElement("button");
    clrButton.textContent = "C";
    clrButton.addEventListener("click", () => {
      totalSum -= count;
      count = 0;
      countElement.textContent = count;
      updateTotalSum();
    });

    const delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.addEventListener("click", () => {
      totalSum -= count;
      updateTotalSum();
      counter.remove();
    });

    counter.appendChild(incButton);
    counter.appendChild(countElement);
    counter.appendChild(decButton);
    counter.appendChild(clrButton);
    counter.appendChild(delButton);

    countersContainer.appendChild(counter);
  }

  addCounterButton.addEventListener("click", createCounter);
});
