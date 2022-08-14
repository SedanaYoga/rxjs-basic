import { of } from 'rxjs'

// `of` can be used if we want to loop in args level
const observable = of(1, 2, 3, 4, 5)

const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    // the operator complete after finishing the loop
    console.log('completed')
  },
})
