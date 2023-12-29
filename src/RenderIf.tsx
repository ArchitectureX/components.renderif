import React, { FC, ReactElement } from 'react'

type Props = {
  children: ReactElement[] | ReactElement | string | any
  isTrue?: boolean
  isFalse?: boolean
}

const RenderIf: FC<Props> = ({ children, isTrue, isFalse }) => {
  if (isTrue === true) {
    return <>{children}</>
  }

  if (isFalse === false) {
    return <>{children}</>
  }

  return null
}

export default RenderIf
