document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let sum = 0;
      let count = 0;

      data.forEach((item) => {
        sum += item.score;
        count++;
        
        // Update detail-box values
        const detailBox = document.getElementById(`${item.category.toLowerCase()}-box-val`);
        detailBox.innerHTML = `${item.score} / 100`;
      });

      // Calculate average and round it
      const average = Math.round(sum / count);

      // Update average score in the DOM
      document.querySelector(".score-circle h2").innerHTML = average;
    });
});
