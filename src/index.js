import { fromEvent } from 'rxjs'
import { pluck, filter } from 'rxjs/operators'

const observable = fromEvent(document, 'keydown')
const spaceOnly = observable.pipe(
  pluck('code'),
  filter((code) => code === 'Space'),
)

const subscription = spaceOnly.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('completed')
  },
})
