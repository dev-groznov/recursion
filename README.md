# Recursion Projects

This repository contains solutions to practical exercises on Recursion as part of the JavaScript curriculum at [The Odin Project](https://www.theodinproject.com/lessons/javascript-recursion).

## 📁 Project Structure

```text
recursion/
├── fibs/
│   ├── fibs.js          # Fibonacci sequence implementations (iterative & recursive)
│   └── fibs.spec.js     # Jest unit tests for Fibonacci functions
├── merge/
│   ├── merge.js         # Merge Sort algorithm implementation
│   └── merge.spec.js    # Jest unit tests for Merge Sort
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Tasks Overview

### 1. Fibonacci (`/fibs`)
* **`fibs(n)`** — An iterative function that returns an array containing the first `n` numbers of the Fibonacci sequence.
* **`fibsRec(n)`** — A recursive implementation solving the same task.

### 2. Merge Sort (`/merge`)
* **`mergeSort(arr)`** — A sorting algorithm using a recursive "divide and conquer" approach to sort an array of numbers.

## 🧪 Running Tests

Unit testing is configured using [Jest](https://jestjs.io/).

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run all tests:**
   ```bash
   npm test
   ```

3. **Run specific tests:**
   ```bash
   npx jest fibs/fibs.spec.js
   npx jest merge/merge.spec.js
   ```