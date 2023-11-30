const app = require("./app");
const { PORT } = require("./constant");

function main() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
