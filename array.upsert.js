(function () {
	
	if (typeof Array.prototype.upsert !== 'undefined') {
		return
	}

	Array.prototype.upsert = function(primaryKey, key = {}, value = null) {
		let isFound = false
		let pKey = Object.keys(primaryKey)[0] || 'id'
		let pVal = Object.values(primaryKey)[0] || 1
		let that = this
		this.forEach(function(item, idx) {
			if (typeof item[pKey] != 'undefined' && item[pKey] == pVal) {
				isFound = true
				if (typeof key == 'object' && value == null) {
					that[idx] = Object.assign(that[idx], key)
				} else {
					that[idx][key] = value
				}
			}
		})
		if (!isFound) {
			let newItem = primaryKey
			if (typeof key == 'object') {
				newItem = Object.assign(newItem, key)
			} else {
				newItem[key] = value
			}
			this.push(newItem)
		}
	}
})()
