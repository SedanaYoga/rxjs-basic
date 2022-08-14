import { fromEvent, interval } from 'rxjs'
import { concatMap, tap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

const button = document.querySelector('#btn')
const observable = fromEvent(button, 'click').pipe(
  concatMap(() => {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
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
