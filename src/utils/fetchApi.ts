import { Impit } from "impit";

export async function FetchApi(url: string) {
  const impit = new Impit({
    browser: "chrome",
    ignoreTlsErrors: true,
  });
  return await impit.fetch(url);
}

// it response ->
// response.text , status , headers
