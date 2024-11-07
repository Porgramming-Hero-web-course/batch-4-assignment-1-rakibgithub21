
const removeDuplicates = (numbers: number[]): number[] => {
    let unq_numbers: number[] = []
    numbers.forEach((number) => {
        if (!unq_numbers.includes(number)) {
            unq_numbers.push(number)
        }
    })
    return unq_numbers;
}

console.log(removeDuplicates([1, 2,1, 2, 3, 4, 4, 5]));

