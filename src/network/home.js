import { request }  from 'network/request.js';


export function getHomMultidata(){
    return request({
        url:'home/multidata'
    })
}

export function getHomeGoods(type, page) {
    return request({
        url:'home/data',
        params:{
            type,
            page
        }
    })
}