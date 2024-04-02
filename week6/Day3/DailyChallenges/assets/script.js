/* Instructions
In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

Create a class named Video. The class should be constructed with the following parameters:
title (a string)
uploader (a string, the person who uploaded it)
time (a number, the duration of the video - in seconds)
Create a method called watch() which displays a string as follows:
“uploader parameter watched all time parameter of title parameter!”
Instantiate a new Video instance and call the watch() method.
Instantiate a second Video instance with different values.
Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
Think of the best data structure to save this information within the array.
Bonus: Loop through the array to instantiate those instances. * /

class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch() {
        return `${this.uploader} watched all ${this.time} of ${this.title}!`
    }
}

// let harryPotter = new Video('harry', 'warner', 120)
// console.log(harryPotter.watch());

// let club = new Video('aaa', 'bbb', 130)
// console.log(club.watch());

let arrOfVideos = [
    {title:'aaa', uploader:'AAA', time: 100},
    {title:'bbb', uploader:'BBB', time: 200},
    {title:'ccc', uploader:'CCC', time: 300},
    {title:'ddd', uploader:'DDD', time: 400},
    {title:'eee', uploader:'EEE', time: 500},
]

let arr = []
arrOfVideos.forEach((item) => {
    const { title, uploader, time } = item
    arr.push(new Video(title, uploader, time))
})

console.log(arr);
arr.forEach(item => {
    console.log(item);
})

