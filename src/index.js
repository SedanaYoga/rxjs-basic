import { interval } from 'rxjs'
import { scan, take } from 'rxjs/operators'

const observable = interval(500).pipe(
  take(5),
  scan((prev, cur) => prev + cur, 0), // accumulated values real time
)

const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('completed')
  },
})
