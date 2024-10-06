import clsx from 'clsx'
import { FC } from "preact/compat"

type Size = 100 | 200 | 300 | 400 | 500 | 600 | 700

type ImageProps = {
  src: string
  maxWidth?: Size
  maxHeight?: Size
}

export const Image: FC<ImageProps> = ({ src, maxWidth, maxHeight }) => {
  return (
    <img
      class={clsx("w-100 h-100 object-fit-cover rounded-3", maxWidth && `max-width-${maxWidth}`, maxHeight && `max-height-${maxHeight}`)}
      src={src}
      alt=""
    />
  )
}
