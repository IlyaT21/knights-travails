class Point {
  constructor(x, y, steps = 0) {
    this.x = x;
    this.y = y;
    this.steps = steps;
  }
}

function isInside(x, y, N) {
  return x >= 0 && y >= 0 && x < N && y < N;
}

function minStepsToReachTarget(start, target, N) {
  const dx = [2, 1, -1, -2, -2, -1, 1, 2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];

  const queue = [];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));

  queue.push(start);
  visited[start.x][start.y] = true;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.x === target.x && current.y === target.y) {
      return current.steps;
    }

    for (let i = 0; i < 8; i++) {
      const newX = current.x + dx[i];
      const newY = current.y + dy[i];

      if (isInside(newX, newY, N) && !visited[newX][newY]) {
        visited[newX][newY] = true;
        queue.push(new Point(newX, newY, current.steps + 1));
      }
    }
  }
}

const start = new Point(0, 0);
const target = new Point(7, 7);
const N = 8;

const steps = minStepsToReachTarget(start, target, N);
console.log(`Shortest number of steps: ${steps}`);