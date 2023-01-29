export class FManager {
    constructor(user) {
        this.user = user;
    }
    isWatched = (id) => {
        return true // if the movie with id is in watched list
    }
    isQueue = (id) => {
        return true // if the movie with id is in queue list
    }
}

const getWatched = () => {

}

const test =  new FManager(25);
console.log(test.isWatched(10));