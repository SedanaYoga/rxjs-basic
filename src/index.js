import { Observable } from 'rxjs'

const observable = new Observable((subscriber) => {
  const id = setInterval(() => {
    subscriber.next('test')
    console.log('leak')
  }, 1000)

  return () => {
    clearInterval(id) // clear the async function (setInterval)
  }
})

const subscription = observable.subscribe({
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

setTimeout(() => {
  subscription.unsubscribe()
}, 4000)
