import * as React from "react"
const DeleteSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M15.965 6H20.5a.5.5 0 0 1 0 1h-16a.5.5 0 0 1 0-1h4.535a3.5 3.5 0 0 1 6.93 0ZM10.05 6h4.9a2.5 2.5 0 0 0-4.9 0Z"
      clipRule="evenodd"
    />
    <path
      d="M6.5 9a.5.5 0 0 1 .5.5v7a3.5 3.5 0 0 0 3.5 3.5h4a3.5 3.5 0 0 0 3.5-3.5v-7a.5.5 0 0 1 1 0v7a4.5 4.5 0 0 1-4.5 4.5h-4A4.5 4.5 0 0 1 6 16.5v-7a.5.5 0 0 1 .5-.5Z"
    />
  </svg>
)
export default DeleteSvgComponent

