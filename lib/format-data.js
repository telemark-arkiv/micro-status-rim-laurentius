'use strict'

module.exports = (data) => {
  let status = []
  status.push({name: 'queue', status: data.queue || 0})
  status.push({name: 'errors', status: data.errors || 0})
  status.push({name: 'done', status: data.done || 0})
  status.push({name: 'status', status: data.status || 0})

  return status
}
