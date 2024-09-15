import * as React from "react";

export const MoonIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 4.88889C10.0726 4.88889 6.88889 8.07264 6.88889 12C6.88889 15.9274 10.0726 19.1111 14 19.1111C14.9229 19.1111 15.804 18.9355 16.6123 18.6161C14.4996 17.1767 13.1111 14.7508 13.1111 12C13.1111 9.24924 14.4996 6.82333 16.6123 5.38393C15.804 5.06449 14.9229 4.88889 14 4.88889ZM6 12C6 7.58172 9.58172 4 14 4C15.3603 4 16.6425 4.33985 17.765 4.93965L18.4987 5.33165L17.765 5.72364C15.5236 6.92128 14 9.28306 14 12C14 14.7169 15.5236 17.0787 17.765 18.2764L18.4987 18.6684L17.765 19.0604C16.6425 19.6601 15.3603 20 14 20C9.58172 20 6 16.4183 6 12Z"
    />
  </svg>
);

export const EditIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M19.488 3.732a2.5 2.5 0 0 0-3.535 0l-6.716 6.716a2.5 2.5 0 0 0-.715 1.473l-.19 1.605a2.5 2.5 0 0 0 2.777 2.777l1.605-.19a2.5 2.5 0 0 0 1.473-.715l6.716-6.716a2.5 2.5 0 0 0 0-3.536l-1.415-1.414Zm-2.828.707a1.5 1.5 0 0 1 2.121 0l1.415 1.415a1.5 1.5 0 0 1 0 2.12l-6.716 6.717a1.5 1.5 0 0 1-.884.428l-1.605.191a1.5 1.5 0 0 1-1.666-1.666l.19-1.605a1.5 1.5 0 0 1 .43-.884L16.66 4.44Z"
      clipRule="evenodd"
    />
    <path d="M4 9.135a3.5 3.5 0 0 1 3.5-3.5h4a.5.5 0 0 0 0-1h-4a4.5 4.5 0 0 0-4.5 4.5v8a4.5 4.5 0 0 0 4.5 4.5h8a4.5 4.5 0 0 0 4.5-4.5v-4a.5.5 0 0 0-1 0v4a3.5 3.5 0 0 1-3.5 3.5h-8a3.5 3.5 0 0 1-3.5-3.5v-8Z" />
  </svg>
);

export const SunIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M12 4C12.2325 4 12.4211 4.18851 12.4211 4.42105V6.10526C12.4211 6.3378 12.2325 6.52632 12 6.52632C11.7675 6.52632 11.5789 6.3378 11.5789 6.10526V4.42105C11.5789 4.18851 11.7675 4 12 4Z" />
    <path d="M17.6569 6.34314C17.8213 6.50757 17.8213 6.77417 17.6569 6.9386L16.4659 8.12951C16.3015 8.29395 16.0349 8.29395 15.8705 8.12951C15.7061 7.96508 15.7061 7.69849 15.8705 7.53406L17.0614 6.34314C17.2258 6.17871 17.4924 6.17871 17.6569 6.34314Z" />
    <path d="M19.5789 12.4211C19.8115 12.4211 20 12.2325 20 12C20 11.7675 19.8115 11.5789 19.5789 11.5789H17.8947C17.6622 11.5789 17.4737 11.7675 17.4737 12C17.4737 12.2325 17.6622 12.4211 17.8947 12.4211H19.5789Z" />
    <path d="M17.6568 17.6569C17.4924 17.8213 17.2258 17.8213 17.0614 17.6569L15.8705 16.4659C15.706 16.3015 15.706 16.0349 15.8705 15.8705C16.0349 15.706 16.3015 15.706 16.4659 15.8705L17.6568 17.0614C17.8213 17.2258 17.8213 17.4924 17.6568 17.6569Z" />
    <path d="M11.5789 19.5789C11.5789 19.8115 11.7675 20 12 20C12.2325 20 12.4211 19.8115 12.4211 19.5789V17.8947C12.4211 17.6622 12.2325 17.4737 12 17.4737C11.7675 17.4737 11.5789 17.6622 11.5789 17.8947V19.5789Z" />
    <path d="M6.34314 17.6569C6.17871 17.4924 6.17871 17.2258 6.34314 17.0614L7.53406 15.8705C7.69849 15.706 7.96508 15.706 8.12952 15.8705C8.29395 16.0349 8.29395 16.3015 8.12952 16.4659L6.9386 17.6569C6.77417 17.8213 6.50757 17.8213 6.34314 17.6569Z" />
    <path d="M4.42105 11.5789C4.18851 11.5789 4 11.7675 4 12C4 12.2325 4.18851 12.4211 4.42105 12.4211H6.10526C6.3378 12.4211 6.52632 12.2325 6.52632 12C6.52632 11.7675 6.3378 11.5789 6.10526 11.5789H4.42105Z" />
    <path d="M6.34316 6.34314C6.5076 6.17871 6.77419 6.17871 6.93862 6.34314L8.12954 7.53406C8.29397 7.69849 8.29397 7.96508 8.12954 8.12952C7.96511 8.29395 7.69851 8.29395 7.53408 8.12952L6.34316 6.9386C6.17873 6.77417 6.17873 6.50757 6.34316 6.34314Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7.36842C9.44205 7.36842 7.36842 9.44205 7.36842 12C7.36842 14.558 9.44205 16.6316 12 16.6316C14.558 16.6316 16.6316 14.558 16.6316 12C16.6316 9.44205 14.558 7.36842 12 7.36842ZM8.21053 12C8.21053 9.90713 9.90713 8.21053 12 8.21053C14.0929 8.21053 15.7895 9.90713 15.7895 12C15.7895 14.0929 14.0929 15.7895 12 15.7895C9.90713 15.7895 8.21053 14.0929 8.21053 12Z"
    />
  </svg>
);

export const DeleteIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M15.965 6H20.5a.5.5 0 0 1 0 1h-16a.5.5 0 0 1 0-1h4.535a3.5 3.5 0 0 1 6.93 0ZM10.05 6h4.9a2.5 2.5 0 0 0-4.9 0Z"
      clipRule="evenodd"
    />
    <path d="M6.5 9a.5.5 0 0 1 .5.5v7a3.5 3.5 0 0 0 3.5 3.5h4a3.5 3.5 0 0 0 3.5-3.5v-7a.5.5 0 0 1 1 0v7a4.5 4.5 0 0 1-4.5 4.5h-4A4.5 4.5 0 0 1 6 16.5v-7a.5.5 0 0 1 .5-.5Z" />
  </svg>
);

export const ArrowBackIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M15.62 3.155a.53.53 0 0 1 0 .749L10.142 9.38a3.71 3.71 0 0 0 .003 5.244l5.473 5.474a.53.53 0 1 1-.752.745l-5.47-5.47a4.769 4.769 0 0 1-.003-6.742l5.476-5.476a.53.53 0 0 1 .75 0Z" />
  </svg>
);

export const CrossIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M12.47 4.47a.47.47 0 0 0-.94 0v7.06H4.47a.47.47 0 0 0 0 .94h7.06v7.06a.47.47 0 0 0 .94 0v-7.06h7.06a.47.47 0 0 0 0-.94h-7.06V4.47Z" />
  </svg>
);
