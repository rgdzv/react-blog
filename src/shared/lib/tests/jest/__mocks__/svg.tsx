import { type SVGProps, forwardRef } from 'react'

const SvgrMock = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    (props, ref) => <svg ref={ref} {...props} />
)

SvgrMock.displayName = 'svg'

export default SvgrMock

export const ReactComponent = SvgrMock
