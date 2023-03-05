const { getWeth } = require("../scripts/getWeth");

async function main() {
    // protocol treats everything as an erc20 token
    await getWeth();
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
