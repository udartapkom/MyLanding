export default function myImageLoader({ src, width, quality }: {
    src: string
    width: number
    quality?: number
}) {
    return `https://udartapkom.github.io/${src}?w=${width}&q=${quality || 75}`
}