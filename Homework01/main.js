// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0

document.addEventListener("DOMContentLoaded", () => {
  const counterElement = document.querySelector(".number");
  const incButton = document.querySelector(".btn-inc");
  const decButton = document.querySelector(".btn-dec");
  const clrButton = document.querySelector(".btn-clr");

  let count = 0;

  incButton.addEventListener("click", () => {
    count += 1;
    counterElement.textContent = count;
  });

  decButton.addEventListener("click", () => {
    if (count > 0) {
      count -= 1;
      counterElement.textContent = count;
    }
  });

  clrButton.addEventListener("click", () => {
    count = 0;
    counterElement.textContent = count;
  });
});
