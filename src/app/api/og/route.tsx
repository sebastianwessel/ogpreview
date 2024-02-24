import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // ?title=<title>
  const hasTitle = searchParams.has("title");
  const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "PURISTA";

  const hasDescription = searchParams.has("description");
  const description = hasDescription
    ? searchParams.get("description")?.slice(0, 300)
    : "IoT/EDGE - SERVER - CLOUD - SERVERLESS";

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
