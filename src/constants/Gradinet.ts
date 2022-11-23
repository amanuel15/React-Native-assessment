const GradientDirection = {
  horizontal: {
    start: {x: 0, y: 0.5},
    end: {x: 1, y: 0.5},
  },
  vertical: {
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 1},
  },
  diagonalTop: {
    start: {x: 0.2, y: 0.2},
    end: {x: 0.3, y: 0.5},
  },
} as const;

export {GradientDirection};
