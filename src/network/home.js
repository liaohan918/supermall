import { request }  from 'network/request.js';


export function getHomMultidata(){
    return request({
        url:'home/multidata'
    })
}