const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};
console.log(superman)

superman['fly']()
console.log(superman)

superman["real" + " " + "name"]
console.log(superman)

const hulk = {
    name: 'Hulk',
    ['catch' + 'Phrase']: 'Hulk ➥ Smash!'
};
console.log(hulk)

const bewitched = true;
console.log(bewitched)

const captainBritain = {
    name: 'Captain Britain',
    hero: bewitched ? false : true
};
console.log(captainBritain)

const name = Symbol('name');
console.log(name)

const supergirl = {
    [name]: 'Supergirl'
};
console.log(supergirl)

supergirl[name];
console.log(supergirl)

const realName = Symbol('real name');
supergirl[realName] = 'Kara Danvers';
console.log(realName)

const daredevil = {
    [name]: 'Daredevil',
    [realName]: 'Matt ➥ Murdoch'
};
console.log(daredevil)

superman.hasOwnProperty('city');
console.log(superman)

for (const key in superman) {
    console.log(key + ": " + superman[key]);
}

for (const key in superman) {
    if (superman.hasOwnProperty(key)) {
        console.log(key + ": " + superman[key]);
    }
}

for (const key of Object.keys(superman)) {
    console.log(key);
}

for (const value of Object.values(superman)) {
    console.log(value);
}

for (const [key, value] of Object.entries(superman)) {
    console.log(`${key}: ${value}`);
}

superman.city = 'Metropolis';

for (const [key, value] of Object.entries(superman)) {
    console.log(`${key}: ${value}`);
}
superman['real name'] = 'Kal-El';

for (const [key, value] of Object.entries(superman)) {
    console.log(`${key}: ${value}`);
}

const jla = {
        superman: {
            realName: 'Clark Kent'
        },
        batman: {
            realName: 'Bruce Wayne'
        },
        wonderWoman: {
            realName: 'Diana Prince' 
        },
            flash: {
                realName: 'Barry Allen'
            },
            aquaman: {
                realName: 'Arthur Curry'
            },
        }
        console.log(jla.wonderWoman.realName);
        console.log(jla['flash']['realName']);
        console.log(jla.aquaman['realName']);

        function greet({greeting,name,age}) {
            return `${greeting}! My name is ${name} and I am ${age} years old.`; }
            console.log(greet);

         greet({ greeting: "What's up dude", age: 10, name: "Bart"});
        
         const myMaths = {
            square(x) {
                return x * x;
                },
                mean(array,callback) {
                    if (callback) {
                    array.map( callback );
                    }
                    const total = array.reduce((a, b) => a + b);
                    return total/array.length;
            } };
            console.log(myMaths);