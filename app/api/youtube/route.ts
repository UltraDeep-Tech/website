import { NextResponse } from 'next/server'

// Channel handle: @UltraDeepTech
const CHANNEL_HANDLE = 'UltraDeepTech'
const CHANNEL_ID = 'UCivpA1Q4U8Y09Kvp1_j5QRg' // Channel ID del canal Ultra Deep Tech
const CHANNEL_URL = 'https://www.youtube.com/@UltraDeepTech'
const MAX_RESULTS = 10

/**
 * INSTRUCCIONES PARA AGREGAR VIDEOS DEL CANAL:
 * 
 * 1. Ve a https://www.youtube.com/@UltraDeepTech
 * 2. Abre cada video que quieras mostrar en el carrusel
 * 3. Copia el ID del video desde la URL:
 *    - Ejemplo: https://www.youtube.com/watch?v=VIDEO_ID_AQUI
 *    - El ID es la parte después de "v="
 * 4. Reemplaza los IDs en el array FALLBACK_VIDEOS abajo
 * 5. Opcionalmente, actualiza los títulos de los videos
 * 
 * ALTERNATIVA: Usar API de YouTube (requiere API key)
 * 1. Obtén una API key de Google Cloud Console
 * 2. Agrega YOUTUBE_API_KEY a tus variables de entorno (.env.local)
 * 3. Descomenta el código de la API en la función GET()
 */

// Fallback videos - IDs reales del canal @UltraDeepTech
// Para agregar más videos: ve a https://www.youtube.com/@UltraDeepTech/videos y copia los IDs de la URL
const FALLBACK_VIDEOS = [
  {
    id: 'Th8b2H0XcbI', // DeepSeek: A Groundbreaking Revolution in AI Architecture
    title: 'DeepSeek: A Groundbreaking Revolution in AI Architecture | Ultra Deep Tech',
  },
  // Agregar más IDs de videos del canal aquí:
  // 1. Ve a https://www.youtube.com/@UltraDeepTech/videos
  // 2. Abre cada video que quieras mostrar
  // 3. Copia el ID desde la URL (la parte después de ?v=)
  // 4. Agrega aquí: { id: 'VIDEO_ID_AQUI', title: 'Título del video' },
]

export async function GET() {
  try {
    // Intentar obtener videos usando la API de YouTube
    // Nota: Para usar la API oficial, necesitarías una API key
    // Por ahora, retornamos los videos fallback
    
    // Si tienes una API key de YouTube, puedes descomentar esto:
    /*
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
    if (!YOUTUBE_API_KEY) {
      return NextResponse.json({ videos: FALLBACK_VIDEOS })
    }

    // Primero obtener el channelId del handle
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${CHANNEL_HANDLE}&type=channel&part=snippet&maxResults=1`
    )
    
    if (!channelResponse.ok) {
      return NextResponse.json({ videos: FALLBACK_VIDEOS })
    }
    
    const channelData = await channelResponse.json()
    if (!channelData.items || channelData.items.length === 0) {
      return NextResponse.json({ videos: FALLBACK_VIDEOS })
    }
    
    const channelId = channelData.items[0].id.channelId
    
    // Obtener videos del canal
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video`
    )
    
    if (!videosResponse.ok) {
      return NextResponse.json({ videos: FALLBACK_VIDEOS })
    }
    
    const videosData = await videosResponse.json()
    const videos = videosData.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
    }))
    
    return NextResponse.json({ videos })
    */
    
    // Por ahora, retornamos los videos fallback
    // TODO: Agregar los IDs reales de los videos del canal @UltraDeepTech
    return NextResponse.json({ videos: FALLBACK_VIDEOS })
  } catch (error) {
    console.error('Error fetching YouTube videos:', error)
    return NextResponse.json({ videos: FALLBACK_VIDEOS })
  }
}

