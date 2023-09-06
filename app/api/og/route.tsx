// TODO still in progress and not working as expected yet

import { ImageResponse } from "next/server"

export const runtime = "edge"

const font = fetch(
  new URL("../../../assets/fonts/CalSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const postTitle = searchParams.get("title")

  const fontBold = await font

  return new ImageResponse(
    (
      <div
        tw="flex relative flex-col p-12 w-full h-full items-start"
        style={{
          background: "linear-gradient(90deg, #0B0F1A 0%, #6366f1 100%)",
        }}
      >
        <div
          tw="flex leading-[1.1] text-[80px] font-bold text-white"
          style={{
            fontFamily: "Cal Sans",
            fontWeight: "bold",
            marginLeft: "-3px",
          }}
        >
          {postTitle}
        </div>
        <div
          tw="flex leading-[1.1] text-[80px] font-bold text-white"
          style={{
            fontFamily: "Cal Sans",
            fontWeight: "bold",
            marginLeft: "-3px",
          }}
        >
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Cal Sans",
          data: fontBold,
          style: "normal",
        },
      ],
    }
  )
}
