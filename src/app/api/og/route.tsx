import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request: Request) {
  const imageData = await fetch(new URL('./purista_logo.png', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );

  const { searchParams } = new URL(request.url);

  // ?title=<title>
  let title = searchParams.get("title")?.slice(0, 100);

  if (!title || title.toLowerCase() === "undefined") {
    title = "PURISTA";
  }

  let description = searchParams.get("description")?.slice(0, 300);

  if (!description || description.toLowerCase() === "undefined") {
    description = "THE TYPESCRIPT BACKEND FRAMEWORK";
  }

  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        tw="bg-gray-50"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div tw="bg-gray-50 flex">
          <div tw="flex flex-col md:flex-col w-full py-3 px-4 md:items-center justify-between p-8">
            <img width="256" height="256" src={imageData} />
            <h1 tw="flex flex-col text-7xl font-extrabold text-gray-900 text-center">
              {title}
            </h1>
            <p tw="flex flex-col text-lg text-4xl font-normal text-gray-500 dark:text-gray-400 text-center">
              {description}
            </p>
            <div tw="flex">
              <div tw="flex rounded-md shadow">
                <a
                  href="#"
                  tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white"
                >
                  Visit purista.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
