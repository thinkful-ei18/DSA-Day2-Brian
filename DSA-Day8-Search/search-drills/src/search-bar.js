DsaSort(str.value) {
    value = Number(value);

    let arr = str.split(' ').filter(member => {
        return member !== '';
    }).map(member => Number(member));

    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        counter++;
        if (arr[i] === value) {
            return this.displayDsaResults({counter, found: true});
        }
    }
    return this.displayDsaResults({
        counter,
        found:false
    });
}

export default function binarySearch(array, value, start, end) {
    array = array.sort();
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    if(start > end) {
        return -1;
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item === value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index +1, end)
    }
    else if (item > value) {
        return binarySearch(array, value, start, index -1, )
    }
}