fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(json => console.log(json));

// fetch('http://api.open-notify.org/astros.json')
//     .then(response => response.json())
//     .then(json =>
//         document.write(`Holy cow! There are ${json['number']} humans in space.`)
//     );

// => Holy cow! There are 6 humans in space.