if (Array.prototype.sortBasic === undefined) {
  Array.prototype.sortBasic = function (order = 'asc', properties = []) {
    order = order.toLowerCase().trim()
    if (!this.length || this.length === 0) return

    if (order === 'desc' || order === 'descending')
      return this.sort((a, b) => (a > b ? -1 : 1))
    else return this.sort((a, b) => (a > b ? 1 : -1))
  }
}

if (Array.prototype.sortObjects === undefined) {
  Array.prototype.sortObjects = function (properties = []) {
    if (!this.length || this.length === 0) return
    if (typeof this[0] !== 'object') return this.sortBasic()

    if (typeof this[0] === 'object') {
      const SINGLE_PROPERTY = properties.length === 1 ? true : false
      const VALID_PROPERTIES = properties.every((property) =>
        Object.keys(this[0]).includes(property),
      )
      if (!VALID_PROPERTIES) return this
      if (SINGLE_PROPERTY) {
        return this.sort((a, b) =>
          a[properties[0]] > b[properties[0]] ? 1 : -1,
        )
      } else {
        let evalString = []
        properties.forEach((property) => {
          if (typeof this[0][property] == 'string')
            evalString.push(`a.${property}.localeCompare(b.${property})`)
          else evalString.push(`a.${property} - b.${property}`)
        })
        evalString = evalString.join(' || ')
        return this.sort((a, b) => {
          return eval(evalString)
        })
      }
    }
  }
}
