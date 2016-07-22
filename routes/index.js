import localeMdw from '../middleware/locale'
import pages from './pages'
import todosAPI from './api/todos'

export default (app) => {
  app.use('/', pages)
  app.use('/:locale(ru|en)/api/todos', localeMdw, todosAPI)
}
