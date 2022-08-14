import { of } from 'rxjs'
import { map } from 'rxjs/operators'

const observable = of(1, 2, 3, 4, 5, 6)
const numbersWithSymbol = observable.pipe(map((value) => `$${value}`))

const subscription = numbersWithSymbol.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('completed')
  },
})
