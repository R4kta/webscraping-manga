import { core } from './core'

try {
  const app = core()
  app.start();
} catch (error) {
  console.log(error)
}
