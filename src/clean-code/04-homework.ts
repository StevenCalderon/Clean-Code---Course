(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    if (fruit === "manzana" || fruit === "cereza" || fruit === "ciruela") {
      return true;
    } else {
      return false;
    }
  }
  //Refactorizacion Steven Calderon.
  function isRedFruit1(fruit: string): boolean {
    let redFruits = ["manzana", "cereza", "ciruela"];
    return redFruits.includes(fruit);
    //return ["manzana", "cereza", "ciruela"].includes(fruit); // Tambien esta bien pero creo q es mas complicado de leer
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor(color: string): string[] {
    if (color === "red") {
      return ["manzana", "fresa"];
    } else if (color === "yellow") {
      return ["piña", "banana"];
    } else if (color === "purple") {
      return ["moras", "uvas"];
    } else {
      throw Error("the color must be: red, yellow, purple");
    }
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (isFirstStepWorking === true) {
      if (isSecondStepWorking === true) {
        if (isThirdStepWorking === true) {
          if (isFourthStepWorking === true) {
            return "Working properly!";
          } else {
            return "Fourth step broken.";
          }
        } else {
          return "Third step broken.";
        }
      } else {
        return "Second step broken.";
      }
    } else {
      return "First step broken.";
    }
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit1("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit1("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
