function newImage(path, pixelsLeft, pixelsBottom) {
    let pictures = document.createElement('img')
    pictures.src = path
    pictures.style.position = 'fixed'
    pictures.style.left = pixelsLeft
    pictures.style.bottom = pixelsBottom
    document.body.append(pictures)  
}

newImage('assets/tree.png', '200px', '300px' )
newImage('assets/pillar.png', '350px', '100px' )
newImage('assets/crate.png', '150px', '200px' )
newImage('assets/well.png', '500px', '425px' )
newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')


function newItem(path, pixelsLeft2, pixelsBottom2) {
    let item = document.createElement('img')
    item.src = path
    item.style.position = 'fixed'
    item.style.left = pixelsLeft2
    item.style.bottom = pixelsBottom2
    document.body.append(item)

    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png','165px', '185px')
newItem('assets/staff.png','600px', '100px')