/* Crea una función que cuando el usuario clique el ratón espere un
segundo e imprima un 1 */

document.addEventListener('click', () => {
    setTimeout(() => {
      console.log(1);
    }, 1000);
  });
  