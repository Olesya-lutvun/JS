let foobar = (arreyPrimitive) =>{
    document.write(`<ul>`);
    for (const item of arreyPrimitive) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
foobar([33, 55, 55, 77, true, 'world'])