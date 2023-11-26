let courses = [
    'Java',
    'PHP',
    'JS'
]

// function myFunction(course) {
//     console.log(course)
// }
//
// courses.map(myFunction);

let htmls = courses.map(function (course) {
    return `<h2>${course}</h2>`
});

console.log(htmls.join(''))

function DemoCallback() {
    return (
        <>

        </>
    );
}
export default DemoCallback;