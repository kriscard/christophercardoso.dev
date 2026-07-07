import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

import { siteConfig } from "@/lib/config"

export const runtime = "edge"

const calSansBold = fetch(
  new URL("../../../assets/fonts/CalSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const interRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const postTitle = searchParams.get("title") ?? siteConfig.name
  const backgroundImageUrl = new URL("/og-bg.png", siteConfig.url).toString()

  const [fontHeading, fontBody] = await Promise.all([calSansBold, interRegular])

  return new ImageResponse(
    <div
      tw="flex h-full w-full"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div
        tw="flex text-[80px] font-bold text-white w-[80%] mt-50 ml-10"
        style={{
          fontFamily: "Cal Sans",
          fontWeight: "bold",
        }}
      >
        {postTitle}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, s-maxage=31536000",
      },
      fonts: [
        {
          name: "Cal Sans",
          data: fontHeading,
          style: "normal",
          weight: 700,
        },
        {
          name: "Inter",
          data: fontBody,
          style: "normal",
          weight: 400,
        },
      ],
    }
  )
}
