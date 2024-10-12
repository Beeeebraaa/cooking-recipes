import clsx from 'clsx'
import { FC } from "preact/compat"

type Size = 100 | 200 | 300 | 400 | 500 | 600 | 700

type MediaProps = {
  src: string
  maxWidth?: Size
  maxHeight?: Size
}

function isSrcVideo(src: string) {
  return ['mp4', 'webm', 'mov'].some(format => src.endsWith(format))
}

export const Media: FC<MediaProps> = ({ src, maxWidth, maxHeight }) => {
  if (isSrcVideo(src)) {
    return <video
      class={clsx("w-100 h-100 object-fit-cover rounded-3", maxWidth && `max-width-${maxWidth}`, maxHeight && `max-height-${maxHeight}`)}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
    />
  }

  return (
    <img
      class={clsx("w-100 h-100 object-fit-cover rounded-3", maxWidth && `max-width-${maxWidth}`, maxHeight && `max-height-${maxHeight}`)}
      src={src}
      alt=""
    />
  )
}
