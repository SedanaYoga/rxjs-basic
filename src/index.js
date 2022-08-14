import { from } from 'rxjs'

// `from` can be used if we want to loop in values inside an array/string/object
const observable = from([1, 2, 3, 4, 5, 6])
// const observable = from(fetch('https://jsonplaceholder.typicode.com/todos/1'))

const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    // the operator complete after finishing the loop
    console.log('completed')
  },
})
