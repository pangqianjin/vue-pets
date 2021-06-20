import axios from "axios";
import PubSub from 'pubsub-js'
import {Toast} from 'mint-ui'

export const reqPets = (dataObj) => axios({
  method: 'POST',
  url: 'http://api.tianapi.com/txapi/pet/index',
  params: {
    'key': 'a101b3074c31fc043b930a7b39146408',
    ...dataObj
  }
})


export const showResult = (data) => {
  if (data.code !== 200) {
    Toast(data.msg)
  }else{
    PubSub.publish('result', data.newslist)
  }
}
