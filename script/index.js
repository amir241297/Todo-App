let Array = []


function addTodo(e) {
    let input = document.getElementById("todoinput")
    let obj = {
        task: "",
        isCompleted: false,
        id: Math.random() + Date.now()
    }
    obj.task = input.value
    input.value=" "
    Array.push(obj)
    renderData()


}

function renderData() {
    let div = document.getElementById("parent")
    let table = document.querySelector("table")
    table.innerHTML = " "

    let tr = document.createElement("tr")
    let td = document.createElement("th")
    td.innerText = 'S.No'
    let td2 = document.createElement("th")
    td2.innerText = "Task"
    let td3 = document.createElement("th")
    td3.innerText = "Status"
    let td4 = document.createElement("th")
    td4.innerText = "Edit"
    let td5 = document.createElement("th")
    td5.innerText = "Delete"

    tr.append(td, td2, td3, td4, td5)
    table.append(tr)
    let c = 1
    let clr

    Array.forEach((ele) => {

        let serialNum = document.createElement("th")
        serialNum.innerText = c++

        let task = document.createElement("td")
        task.innerText = ele.task

        let status = document.createElement("td")
        { ele.isCompleted ? (status.innerText = "Completed",clr="green") : (status.innerText = "Not Completed",clr="red") }
        status.style.background=clr
        status.style.color="white"
        status.addEventListener("click", function () {
            ele.isCompleted ? ele.isCompleted = false : ele.isCompleted = true

            renderData(Array)

        })

        let tableRow = document.createElement("tr")
        let edit_btn = document.createElement("button")
        edit_btn.innerText = "Edit"
        let delete_btn = document.createElement("button")
        delete_btn.innerText = "Delete"

        edit_btn.addEventListener("click", function () {

            let task1 = document.createElement("input")
            task1.value = ele.task
            task.innerText = ""
            task.append(task1)
            let but = document.createElement("button")
            but.innerText = "Submit"
            task.append(but)

            but.addEventListener("click", function () {
                task.innerText = task1.value
                ele.task = task1.value
            })




            // task.innerHTML=null
            // task.innerHTML=input
        });

        delete_btn.addEventListener("click", function () {
            Array = Array.filter((e) => {
                return e.id !== ele.id
            })
            renderData(Array)
        })

        tableRow.append(serialNum, task, status, edit_btn, delete_btn)
        document.querySelector("table").append(tableRow)

    })
}

