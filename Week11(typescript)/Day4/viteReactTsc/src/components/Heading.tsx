import React from "react"

type HeadingProps = {
    title: string 
    }
const Heading = ({title}: HeadingProps): React.ReactElement => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default Heading
