import react, { useState } from 'react'

const useLoading = (initial = false) => {
  const [loading, setLoading] = useState<boolean>(initial)


  return ({ loading, setLoading })
}

export default useLoading