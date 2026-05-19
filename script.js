let width = 30;
const bar = document.getElementById('bar');
bar.style.width = `${width}%`;

const increment = () => {
  if (width === 100) return;
  width += 10;
  bar.style.width = `${width}%`;
};

const decrement = () => {
  if (width === 0) return;
  width -= 10;
  bar.style.width = `${width}%`;
};
