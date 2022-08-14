import { Observable } from 'rxjs'

const observable = new Observable((subscriber) => {
  subscriber.next('Hello World')
  subscriber.error('Error!')
  subscriber.next('test')

  subscriber.complete()
  subscriber.next('next')
})

observable.subscribe({
  next: (value) => {
    console.log(value)
  },
  complete: () => {
    console.log('Complete called!')
  },
  error: (err) => {
    console.error(err)
  },
})
