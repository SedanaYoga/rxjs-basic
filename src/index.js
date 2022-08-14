import { fromEvent, interval } from 'rxjs'
import { switchMap, tap, take } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

const button = document.querySelector('#btn')
const observable = fromEvent(button, 'click').pipe(
  switchMap(() => {
    return interval(500).pipe(
      take(5),
      tap({
        complete() {
          console.log('Inner observable completed')
        },
      }),
    )
  }),
)

const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('completed')
  },
})
