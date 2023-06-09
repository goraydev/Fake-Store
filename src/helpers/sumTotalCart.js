export const sumTotalCart = (car = []) => {

    return car.map(product => product.total).
        reduce((prev, curr) => prev + curr, 0);

}
