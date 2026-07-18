let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Successfully");
    } else {
        reject("Failed");
    }
});
console.log(myPromise);

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


async function checkPromise() {
    try {
        let result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

checkPromise(); 