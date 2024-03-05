import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

// ?name=<name>
const hasName = searchParams.has('name')
const name = hasName
  ? searchParams.get('name')?.slice(0, 100)
  : ''
    
// ?title=<title>
const hasTitle = searchParams.has('title')
const title = hasTitle
  ? searchParams.get('title')?.slice(0, 100)
  : ''


if (title != "" && name != "") {
    return new ImageResponse(
      (
        <div
  style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    fontSize: 32,
    padding: 35,
    textAlign: 'center'
  }}
>
  <b style={{
  fontWeight: '600'
  }}>{name}</b> vừa hoàn thành bài test tâm lý với kết quả<br />{title}. <br /><span style={{color:'green'}}>Bấm vào đây để test ngay!</span><br /><p style={{fontSize: 17, marginBottom: 0}}>© {new Date().getFullYear()} TUNNA DUONG & TRUNG TÂM PHỤC HỒI CHỨC NĂNG TÂM THẦN</p>
</div>
      ),
      {
        width: 800,
        height: 400,
      }
    )
} else {
  return new ImageResponse(
      (
        <div
  style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    fontSize: 32,
    padding: 35,
    textAlign: 'center'
  }}
>
Khảo sát phát hiện sớm dấu hiệu<br />trầm cảm miễn phí!<br /><span style={{color:'green'}}>Bấm vào đây để test ngay!</span><br /><p style={{fontSize: 17, marginBottom: 0}}>© {new Date().getFullYear()} TUNNA DUONG & TRUNG TÂM PHỤC HỒI CHỨC NĂNG TÂM THẦN</p>
</div>
      ),
      {
        width: 800,
        height: 400,
      }
    )
}
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
