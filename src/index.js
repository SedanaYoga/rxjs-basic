import { fromEvent } from 'rxjs'
import { pluck } from 'rxjs/operators'

const observable = fromEvent(document, 'keydown')
const codeOnly = observable.pipe(pluck('code'))

const subscription = codeOnly.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('completed')
  },
})
