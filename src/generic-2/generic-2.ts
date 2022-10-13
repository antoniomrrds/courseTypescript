type mytype = number;

const arrayNumber: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumber);

async function promiseAsync() {
  return 1;
}

export function myPromise(): Promise<mytype | number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 1));
