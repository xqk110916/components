import axios from '@/axios'

function getPro(url, data) {
  return new Promise((reslove, reject) => {
    axios.get(url, {
      params: data
    }).then(result => {
      reslove(result)
    })
  })
}

function postPro(url, data) {
  return new Promise((reslove, reject) => {
    axios.post(url, data).then(result => {
      reslove(result)
    })
  }) 
}

function putPro(url, data) {
  return new Promise((reslove, reject) => {
    axios.put(url, data).then(result => {
      reslove(result)
    })
  })
}

function deletePro(url, data) {
  return new Promise((reslove, reject) => {
    axios.delete(url, {
      data,
    }).then(result => {
      reslove(result)
    })
  })
}

const install = function(Vue, ops) {
  Vue.prototype.getPro = getPro
  Vue.prototype.postPro = postPro
  Vue.prototype.putPro = putPro
  Vue.prototype.deletePro = deletePro
}

export default install