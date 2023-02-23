function download(filename, text) {
  const element = document.createElement('a');
  element.href = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
  element.download = filename;
  element.style.display = 'none';
  document.body.appendChild(element);
  element.addEventListener('click', () => {
    requestAnimationFrame(() => {
      URL.revokeObjectURL(element.href);
      document.body.removeChild(element);
    });
  });
  element.click();
}