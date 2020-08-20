export function create(data) {
    return firebase.firestore().collection('movies').add(data)
}
export function getAll() {
    return firebase.firestore().collection('movies').get()
}
export function get(id) {
    return firebase.firestore().collection('movies').doc(id).get()
}
export function deleteEl(id) {
    return firebase.firestore().collection('movies').doc(id).delete()
}
export function update(id, data) {
    return firebase.firestore().collection('movies').doc(id).update(data)
}