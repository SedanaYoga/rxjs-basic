import { interval } from 'rxjs'
import { reduce, take } from 'rxjs/operators'

const observable = interval(500).pipe(
  take(5), // only take first 5 interval value
  reduce((prev, cur) => prev + cur, 0),
)

const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('completed')
  },
})
