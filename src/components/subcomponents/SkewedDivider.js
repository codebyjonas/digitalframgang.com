import React from 'react'
import { FaDirections } from 'react-icons/fa'

const SkewedDivider = props => (
    <>
        <div
            style={{ borderTopColor: props.color }}
            class={'rotated-background-triangle1 ' + props.direction}
        ></div>
    </>
)

export default SkewedDivider
