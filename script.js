let width = 0;
document.getElementById('bar').style.width = `${width}%`;

const increment = () => {
  if (width >= 100) return;
  width++;
  const bar = document.getElementById('bar');
  bar.style.width = `${width}%`;
};

const decrement = () => {
  if (width <= 0) return;
  width--;
  const bar = document.getElementById('bar');
  bar.style.width = `${width}%`;
}

