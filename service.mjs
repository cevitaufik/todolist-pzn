export class Todolist {

  todolist = ['Cevi', 'Taufik', 'Jatinangor']

  getJsonTodolist() {
    return JSON.stringify({
      code: 200,
      status: 'OK',
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value
        }
      })
    })
  }

  view(request, response) {
    response.write(this.getJsonTodolist())
    response.end()
  }

  create(request, response) {
    request.addListener('data', (data) => {

      const body = JSON.parse(data.toString())      
      this.todolist.push(body.todo)

      response.write(this.getJsonTodolist())
      response.end()
    })
  }

  update(request, response) {
    request.addListener('data', (data) => {
      const body = JSON.parse(data.toString())      
      
      if (this.todolist[body.id]) {
        this.todolist[body.id] = body.todo
      }

      response.write(this.getJsonTodolist())
      response.end()
    })
  }

  delete(request, response) {
    request.addListener('data', (data) => {
      const body = JSON.parse(data.toString())      
      
      if (this.todolist[body.id]) {
        this.todolist.splice(body.id, 1)
      }

      response.write(this.getJsonTodolist())
      response.end()
    })
  }

}