import { FC, PropsWithChildren } from "preact/compat"

export const Heading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h3 class="mt-5 mb-4">
      {children}
    </h3>
  )
}
