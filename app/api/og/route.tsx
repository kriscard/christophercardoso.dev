import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

import { siteConfig } from "@/lib/config"

export const runtime = "edge"

const calSansBold = fetch(
  new URL("../../../assets/fonts/CalSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const MAX_TITLE_LENGTH = 100

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const rawTitle = searchParams.get("title") ?? ""
  const cleanedTitle = rawTitle.replace(/[\p{Cc}\p{Cf}]/gu, "").trim()
  const postTitle =
    cleanedTitle.length > 0 && cleanedTitle.length <= MAX_TITLE_LENGTH
      ? cleanedTitle
      : siteConfig.name
  const backgroundImageUrl = new URL("/og-bg.png", siteConfig.url).toString()

  const fontHeading = await calSansBold

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
      ],
    }
  )
}
