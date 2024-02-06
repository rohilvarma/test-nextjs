import React from 'react'

const page = ({params}: {params: {username: string}}) => {
  return (
    <div>User {params.username} page</div>
  )
}

export default page