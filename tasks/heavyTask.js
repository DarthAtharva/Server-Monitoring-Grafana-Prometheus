const getRandomValue = (arr) => {

    return arr[Math.floor(Math.random() * arr.length)];

}

const heavyTask = () => {

    const randomTime = getRandomValue([10, 100, 200, 250, 275, 500, 1000, 1500, 3000]);
    const isError = getRandomValue([1, 2, 3, 4]) === 4;
    
    if(isError){

        const possibleError = getRandomValue([
            "DB Server is down",
            "DB Server is busy",
            "Payment Failure",
            "Unauthorized Access",
            "Bad Request"
        ]);

        throw new Error(possibleError);

    }

    return new Promise((resolve) => setTimeout(() => resolve(randomTime), randomTime));

}

export {heavyTask};