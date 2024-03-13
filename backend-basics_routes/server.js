import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request === "/api/fish/1") {
    response.statusCode = 200;
    response.end("Shrimp");
  } else if (request === "/api/fish/2") {
    response.statusCode = 200;
    response.end("Anemonefish");
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
});
