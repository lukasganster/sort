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
      const VALID_PROPERTIES = properties.every(
        (singleProperty) =>
          Object.keys(this[0]).includes(singleProperty) ||
          Object.keys(this[0]).includes(singleProperty?.property),
      )
      if (!VALID_PROPERTIES) return this

      let evalString = []
      properties.forEach((singleProperty) => {
        // Multiple properties with different order
        if (
          typeof singleProperty === 'object' &&
          singleProperty.property &&
          singleProperty.order
        ) {
          const ORDER = singleProperty.order.toLowerCase().trim() || 'asc'
          const PROPERTY = singleProperty.property
          if (typeof this[0][PROPERTY] === 'string') {
            if (ORDER === 'desc' || ORDER === 'descending')
              evalString.push(`b.${PROPERTY}.localeCompare(a.${PROPERTY})`)
            else evalString.push(`a.${PROPERTY}.localeCompare(b.${PROPERTY})`)
          } else {
            if (ORDER === 'desc' || ORDER === 'descending')
              evalString.push(`b.${PROPERTY} - a.${PROPERTY}`)
            else evalString.push(`a.${PROPERTY} - b.${PROPERTY}`)
          }
        }

        // Multiple properties with default order (ascending)
        else if (typeof this[0][singleProperty] === 'string')
          evalString.push(
            `a.${singleProperty}.localeCompare(b.${singleProperty})`,
          )
        else evalString.push(`a.${singleProperty} - b.${singleProperty}`)
      })
      evalString = evalString.join(' || ')
      return this.sort((a, b) => {
        return eval(evalString)
      })
    }
  }
}
