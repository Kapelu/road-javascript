/* eslint-disable no-undef */
const {
  string,
  numero,
  boolean,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deDolaresApesos,
  esVocal,
} = require("../conceptos");

describe("Conceptos", function () {
  describe("01) String", function () {
    it("Debe ser un string", function () {
      expect(typeof string).toBe("string");
    });
  });

  describe("02) Numero", function () {
    it("Debe ser un número", function () {
      expect(typeof numero).toBe("number");
    });
  });

  describe("03) Boolean", function () {
    it("Debe ser un booleano", function () {
      expect(typeof boolean).toBe("boolean");
    });
  });

  describe("04) suma(x, y)", function () {
    it("Debe retornar la suma de los dos argumentos", function () {
      expect(suma(5, 5)).toBe(10);
      expect(suma(-1, 5)).toBe(4);
    });
  });

  describe("05) resta(x, y)", function () {
    it("Debe retornar la resta de los dos argumentos", function () {
      expect(resta(5, 5)).toBe(0);
      expect(resta(-1, 5)).toBe(-6);
      expect(resta(5, -5)).toBe(10);
      expect(resta(0, 0)).toBe(0);
    });
  });

  describe("06) divide(x, y)", function () {
    it("Debe retornar la division de los dos argumentos", function () {
      expect(divide(5, 5)).toBe(1);
      expect(divide(10, 5)).toBe(2);
      expect(divide(11, 2)).toBe(5.5);
    });
  });

  describe("07) multiplica(x, y)", function () {
    it("Debe retornar el producto de los dos argumentos", function () {
      expect(multiplica(5, 5)).toBe(25);
      expect(multiplica(10, -5)).toBe(-50);
      expect(multiplica(11, 0)).toBe(0);
    });
  });

  describe("08) obtenerResto(x, y)", function () {
    it("Debe retornar el resto de dividir x sobre y", function () {
      expect(obtenerResto(15, 5)).toBe(0);
      expect(obtenerResto(21, 5)).toBe(1);
      expect(obtenerResto(22, 5)).toBe(2);
    });
  });

  describe("09) sonIguales(x, y)", function () {
    it("Debe devolver True si los argumentos son iguales", function () {
      expect(sonIguales(15, 15)).toBe(true);
      expect(sonIguales("test", "test")).toBe(true);
    });
    it("Debe devolver False si los argumentos no son iguales", function () {
      expect(sonIguales(90, 50)).toBe(false);
    });
  });

  describe("10) tienenMismaLongitud(str1, str2)", function () {
    it("Debe devolver True si los strings tienen la misma longitud", function () {
      expect(tienenMismaLongitud("javascript", "bumfuzzled")).toBe(true);
    });
    it("Debe devolver False si los strings tienen la distinta longitud", function () {
      expect(tienenMismaLongitud("hi", "there")).toBe(false);
    });
  });

  describe("11) menosQueNoventa(num)", function () {
    it("Debe devolver True si el número es menor a noventa", function () {
      expect(menosQueNoventa(15)).toBe(true);
    });
    it("Debe devolver False si el número no es menor a noventa", function () {
      expect(menosQueNoventa(90)).toBe(false);
      expect(menosQueNoventa(100)).toBe(false);
    });
  });

  describe("12) mayorQueCincuenta(num)", function () {
    it("Debe devolver True si el número es mayor a cincuenta", function () {
      expect(mayorQueCincuenta(15)).toBe(false);
      expect(mayorQueCincuenta(50)).toBe(false);
      expect(mayorQueCincuenta(60)).toBe(true);
    });
    it("Debe devolver False si el número no es mayor a cincuenta", function () {
      expect(mayorQueCincuenta(15)).toBe(false);
      expect(mayorQueCincuenta(50)).toBe(false);
      expect(mayorQueCincuenta(60)).toBe(true);
    });
  });

  describe("13) esPar(num)", function () {
    it("Debe devolver True si el número es par", function () {
      expect(esPar(6)).toBe(true);
      expect(esPar(0)).toBe(true);
    });
    it("Debe devolver False si el número no es par", function () {
      expect(esPar(7)).toBe(false);
    });
  });

  describe("14) esImpar(num)", function () {
    it("Debe devolver True si el número es impar", function () {
      expect(esImpar(6)).toBe(false);
      expect(esImpar(7)).toBe(true);
      expect(esImpar(0)).toBe(false);
    });
    it("Debe devolver False si el número no es impar", function () {
      expect(esImpar(6)).toBe(false);
      expect(esImpar(7)).toBe(true);
      expect(esImpar(0)).toBe(false);
    });
  });

  describe("15) elevarAlCuadrado(num)", function () {
    it("Debe devolver el número elevado al cuadrado", function () {
      expect(elevarAlCuadrado(6)).toBe(36);
      expect(elevarAlCuadrado(7)).toBe(49);
      expect(elevarAlCuadrado(0)).toBe(0);
      expect(elevarAlCuadrado(-5)).toBe(25);
    });
  });

  describe("16) elevarAlCubo(num)", function () {
    it("Debe devolver el número elevado al cubo", function () {
      expect(elevarAlCubo(3)).toBe(27);
      expect(elevarAlCubo(0)).toBe(0);
      expect(elevarAlCubo(-5)).toBe(-125);
    });
  });

  describe("17) elevar(num, exponent)", function () {
    it("Debe devolver el número elevado al exponente indicado", function () {
      expect(elevar(2, 2)).toBe(4);
      expect(elevar(2, 3)).toBe(8);
      expect(elevar(0, 5)).toBe(0);
      expect(elevar(10, 1)).toBe(10);
    });
  });

  describe("18) redondearNumero(num)", function () {
    it("Debe devolver el número redondeado", function () {
      expect(redondearNumero(1.5)).toBe(2);
      expect(redondearNumero(2)).toBe(2);
      expect(redondearNumero(0.1)).toBe(0);
    });
  });

  describe("19) redondearHaciaArriba(num)", function () {
    it("Debe devolver el número redondeado para arriba", function () {
      expect(redondearHaciaArriba(1.5)).toBe(2);
      expect(redondearHaciaArriba(2)).toBe(2);
      expect(redondearHaciaArriba(0.1)).toBe(1);
    });
  });

  describe("20) numeroRandom()", function () {
    it("Debe devolver un número entre 0 y 1", function () {
      expect(typeof numeroRandom()).toBe("number");
      expect(numeroRandom()).toBeGreaterThanOrEqual(0);
      expect(numeroRandom()).toBeLessThan(1);
    });
    it("Debe devolver un número random", function () {
      expect(numeroRandom()).not.toBe(numeroRandom());
    });
  });

  describe("21) esPositivo(num)", function () {
    it('Debe devolver "Es positivo" si el número es mayor a cero', function () {
      expect(esPositivo(23)).toBe("Es positivo");
    });
    it('Debe devolver "Es negativo" si el número es menor a cero', function () {
      expect(esPositivo(-2)).toBe("Es negativo");
    });
    it("Debe devolver False si el número es cero", function () {
      expect(esPositivo(0)).toBe(false);
    });
  });

  describe("22) agregarSimboloExclamacion(str)", function () {
    it("Debe agregar un signo de exclamacion al final del string", function () {
      expect(agregarSimboloExclamacion("hello world")).toBe("hello world!");
      expect(agregarSimboloExclamacion("Soy Henry")).toBe("Soy Henry!");
    });
  });

  describe("23) combinarNombres(nombre, apellido)", function () {
    it("Debe devolver los strings combinados con un espacio en el medio", function () {
      expect(combinarNombres("hello", "world")).toBe("hello world");
      expect(combinarNombres("Soy", "Henry")).toBe("Soy Henry");
    });
  });

  describe("24) obtenerSaludo(nombre)", function () {
    it("Debe devolver 'Hola {name}!'", function () {
      expect(obtenerSaludo("Martin")).toBe("Hola Martin!");
      expect(obtenerSaludo("Antonio")).toBe("Hola Antonio!");
    });
  });

  describe("25) obtenerAreaRectangulo(alto, ancho)", function () {
    it("Debe retornar el área correcta del rectángulo", function () {
      expect(obtenerAreaRectangulo(2, 2)).toBe(4);
      expect(obtenerAreaRectangulo(3, 6)).toBe(18);
      expect(obtenerAreaRectangulo(0, 2)).toBe(0);
    });
  });

  describe("26) retornarPerimetro(lado)", function () {
    it("Debe retornar el perímetro correcto del cuadrado", function () {
      expect(retornarPerimetro(2)).toBe(8);
      expect(retornarPerimetro(8)).toBe(32);
      expect(retornarPerimetro(0)).toBe(0);
    });
  });

  describe("27) areaDelTriangulo(base, altura)", function () {
    it("Debe retornar el área correcta del triángulo", function () {
      expect(areaDelTriangulo(10, 5)).toBe(25);
      expect(areaDelTriangulo(20, 10)).toBe(100);
      expect(areaDelTriangulo(0, 10)).toBe(0);
    });
  });

  describe("28) deDolaresApesos(dolar)", function () {
    it("Debe retornar el valor correcto de dolares a pesos", function () {
      expect(deDolaresApesos(100)).toBe(120);
      expect(deDolaresApesos(200)).toBe(240);
      expect(deDolaresApesos(50)).toBe(60);
    });
  });

  describe("29) esVocal(letra)", function () {
    it('Debe devolver "Dato incorrecto", si el valor ingresado tiene más de una letra', function () {
      expect(esVocal("la")).toBe("Dato incorrecto");
      expect(esVocal("pero")).toBe("Dato incorrecto");
    });
    it('Debe devolver "Dato incorrecto", si el valor ingresado no es vocal', function () {
      expect(esVocal("l")).toBe("Dato incorrecto");
      expect(esVocal("p")).toBe("Dato incorrecto");
    });
    it('Debe devolver "Es vocal", si el valor ingresado lo es', function () {
      expect(esVocal("a")).toBe("Es vocal");
      expect(esVocal("e")).toBe("Es vocal");
      expect(esVocal("i")).toBe("Es vocal");
      expect(esVocal("o")).toBe("Es vocal");
      expect(esVocal("u")).toBe("Es vocal");
    });
  });
});
