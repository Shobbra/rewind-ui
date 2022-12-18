function buttonBase() {
  return {
    '.btn':
      '@apply w-20 bg-red-200 p-2 shadow-sm rounded-md hover:bg-red-300 transition-colors',
  };
}

const Button = () => ({ ...buttonBase() });

module.exports = { Button };
