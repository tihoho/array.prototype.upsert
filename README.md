# Array.prototype.upsert

Method .upsert() for Array of objects

`.upsert(primaryKey, key, value)`

where:
* `primaryKey` - Object {propertyKey: propertyValue}
* `key` - Object (for replace several properties) or String (for replace one property)
* `value` Any if `key` is String, and empty if key is Object 

## Install

### For node
`npm i array.prototype.upsert`

### For browsers
`<script src="array.upsert.js"></script>`

## Examples

```js
const users = []

users.push({ id: 1, name: 'Alice', age: 30 })
users.push({ id: 2, name: 'Bob', age: 40 })

/**
 * Change Bob name 
 */
users.upsert({id: 2}, {name: 'Bobby'})
//[ { id: 1, name: 'Alice', age: 30 },
//  { id: 2, name: 'Bobby', age: 40 } ]

/**
 * Change Alice age 
 */
users.upsert({id: 1}, 'age', 35)
//[ { id: 1, name: 'Alice', age: 35 },
//  { id: 2, name: 'Bobby', age: 40 } ]

/**
 * Change Bob's ID
 */
users.upsert({id: 2}, {id: 5})
//[ { id: 1, name: 'Alice', age: 35 },
//  { id: 5, name: 'Bobby', age: 40 } ]

/**
 * Add a new person 
 */
users.upsert({id: 7}, { name: 'Elon', age: 50 })
//[ { id: 1, name: 'Alice', age: 35 },
//  { id: 5, name: 'Bobby', age: 40 },
//  { id: 7, name: 'Elon', age: 50 } ]

```

## License
MIT

## If useful
* Star on GitHub
* If this project helped you a lot, and you have a lot of money, you can transfer a couple of dollars to me on PayPal: tihoho@yandex.ru or BTC 18CPod4yXyhcLdXF8UQAHowmWGLwZt15x2