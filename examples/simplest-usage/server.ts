import { serve } from "https://deno.land/std@0.135.0/http/server.ts";

const port = 8080;

const handler = async (request: Request): Promise<Response> => {
  console.log("Request received by the server");
  console.log(`Body: ${JSON.stringify(await request.json())}`);

  return new Response("unused response body", { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
