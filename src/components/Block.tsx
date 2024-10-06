import { FC, PropsWithChildren } from "preact/compat"

export const Block: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div class="d-flex flex-column gap-2 mt-5 mb-2">
      {children}
    </div>
  )
}
