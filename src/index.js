import { of } from 'rxjs'
import { reduce } from 'rxjs/operators'

const observable = of(1, 2, 3, 4, 5).pipe(reduce((prev, cur) => prev + cur, 0))

const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('completed')
  },
})
