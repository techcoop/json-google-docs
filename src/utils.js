// Extracts nested fields from data
export const extractNested = (data, fields) => {
  // If no data, return empty object
  if (!data) {
    return {}
  }

  //  If fields aren't passed, return whole object
  if (!fields) {
    return data
  }

  if (typeof fields === 'string') {
    fields = [fields]
  }

  // Iterate fields
  let extracted = data
  Object.keys(fields).map((item) => {
    const key = fields[item].toLowerCase()
    if (extracted[key]) {
      extracted = extracted[key]
    }
  })

  return extracted
}
