import { interval } from 'rxjs'
import { tap, reduce, take } from 'rxjs/operators'

const observable = interval(500).pipe(
  take(5),
  tap({
    next(value) {
      console.log(value)
    },
  }),
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
