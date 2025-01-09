import React from 'react'

const useFetch = () => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(null)
  const [error, setError] = React.useState(null)

  // uso necessário de useCallback para evitar um render infinito
  // esta função deve ser renderizada apenas 1 vez
  const request = React.useCallback(async (url, options) => {
    let response
    let json
    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
      if (response.ok === false) throw new Error(json.message)
    } catch (error) {
      json = null
      setError(error.message)
    } finally {
      setData(json)
      setLoading(false)
      return { response, json }
    }
  }, [])

  return { data, loading, error, request }
}

export default useFetch
