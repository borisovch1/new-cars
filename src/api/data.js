import * as api from './api.js'

const host='http://localhost:3030'
api.settings.host = host

export const login =api.login
export const register =api.register
export const logout = api.logout
// //get all ads

// export async function getAllListings() {
//     return await api.get(host+'/data/cars?sortBy=_createdOn%20desc')
// }

//get all ads and pages

export async function getAllListings(page=1) {
    return await api
.get(host + `/data/cars?sortBy=_createdOn%20desc&offset=${(page - 1) * 3}&pageSize=3`)
}

//get by id

export async function getListingById(id) {
    return await api.get(host+'/data/cars/'+id)
}
//create
export async function createListing(listing) {
    return await api.post(host+'/data/cars',listing)
}
//edit
export async function updateListing(id,listing) {
    return await api.put(host+'/data/cars/'+id,listing)
}
// delete
export async function deleteListening(id) {
    return await api.del(host+'/data/cars/'+id)
}

//get my ads

export async function getMyListings(userId) {
    return await api.get(host+`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}
// search

export async function search(query) {
    return await api.get(host+`/data/cars?where=year%3D${query}`)
}

// for pages
export async function getCollectionSize() {
    return await api.get(host+'/data/cars?count')
}



