function contarParesPequenos(a, b, k) {
    let number = 0;
    a.forEach((nA) => {
        
        for (let i = b.length -1; i >= 0; i = i - 1) {
          // console.log(nA.toString() + b[i]);
          console.log('valor A', nA);
          console.log('tamanho', b.length);
          console.log('valor B',b[i]);
         console.log(nA.toString() + b[i]);
          console.log('-------------------');

        }
    })
}

const a = [1, 2, 3];
const b = [1, 2, 3];
const k = 31;

contarParesPequenos(a, b, k);