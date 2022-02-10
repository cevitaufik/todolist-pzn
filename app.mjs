import http from 'http'
import { Todolist } from './service.mjs'

const todolist = new Todolist()

const server = http.createServer((request, response) => {

  response.hasHeader('Content-Type', 'aplication/json')
  
  if (request.method === 'GET') {
    todolist.view(request, response)
  } else if (request.method === 'POST') {
    todolist.create(request, response)
  } else if (request.method === 'PUT') {
    todolist.update(request, response)
  } else if (request.method == 'DELETE') {
    todolist.delete(request, response)
  }

})

server.listen(3000)