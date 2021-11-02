
showing()
let btn = document.getElementById('submit')

btn.addEventListener('click', adding)
function adding() {
    let text = document.getElementById('text')
    notes = localStorage.getItem('notes')
    if (notes == null) {
        nobj = []
    } else {
        nobj = JSON.parse(notes)
    }
    nobj.push(text.value)
    localStorage.setItem('notes', JSON.stringify(nobj))

    text.value = ''
    showing()

}
function showing() {
    let notes = localStorage.getItem("notes")
    card = ''
    if (notes == null) {
        nobj = []
    }
    else {
        nobj = JSON.parse(notes)
    }
    nobj.forEach(function (element, index) {
        card += `<div class="card mx-4 my-5" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button class="btn btn-primary" id='${index}' onclick='deleting(this.id)'>Delete</button>
      </div>
    </div>`

    });

    let note = document.getElementById('oldnote')
    note.innerHTML = card
}

// let del=document.getElementById('delete')
// del.addEventListener('click',deleting)
function deleting(index) {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        nobj = []
    } else {
        nobj = JSON.parse(notes)
    }
    nobj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(nobj))
    showing()


}
search = document.getElementById('s')

search.addEventListener('click', searching)
function searching() {
    svalue = document.getElementById('svalue')
    // console.log(svalue.value)
    notes = localStorage.getItem('notes')
    if (notes == null) {
        nobj = []
    } else {
        nobj = JSON.parse(notes)
    }

    card = ''
    nobj.forEach(function (element) {

        if (element.includes(svalue.value)) {

            //  element.forEach(function (element1, index) {
            card += `<div class="card mx-4 my-5" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">search result</h5>
            <p class="card-text">${element}</p>
            
          </div>
        </div>`

            //  })
            let note = document.getElementById('oldnote')
            note.innerHTML = card
            






        }
    })


}