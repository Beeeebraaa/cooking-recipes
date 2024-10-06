import { FC, PropsWithChildren } from "preact/compat"

export const Text: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p class="bg-warning bg-opacity-75">
      {children}
    </p>
  )
}
