// Este código exporta una función llamada `totalPrice` que calcula el precio total de una lista de productos.
export const totalPrice = (products) => {
    // Se inicializa una variable `sum` para almacenar la suma de los precios de los productos.
    let sum = 0;
    
    // Se itera sobre cada elemento del array `products` utilizando el método `forEach()`.
    // Para cada producto en el array, se suma su precio al valor de `sum`.
    // Se corrige el nombre de la variable de iteración a `product`.
    // Además, la variable `products` se pasa como parámetro a la función `totalPrice`.
    // La línea corregida es: `products.forEach(product => sum += product.price)`.
    // Esta línea suma el precio de cada producto al valor de `sum`.
    products.forEach(product => sum += product.price );

    // Se retorna el valor final de `sum`, que representa el precio total de todos los productos.
    return sum;
}
