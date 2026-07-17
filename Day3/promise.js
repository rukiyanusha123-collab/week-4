let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Successfully");
    } else {
        reject("Failed");
    }
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