import React from "react"

const encodeQueryDataURL = data => {
  let singleQuery = []
  Object.keys(data).forEach(key => {
    singleQuery.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
  })
  return singleQuery.join("&")
}

export default ({ url, quality, format, alt }) => {
  let queryString = encodeQueryDataURL({
    format: format,
    quality: quality,
  })

  const imageUrl = `${url}?${queryString}`
  return <img src={imageUrl} alt={alt} />
}
