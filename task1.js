let callCount = 0;

function foo () {
    return console.log(`${callCount += 1}`);
}

foo();
foo();
foo();
foo();