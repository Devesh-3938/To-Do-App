 let text1 = document.querySelector("#text")
        let addbtn = document.querySelector("#add")
        let ul1 = document.querySelector(".ul")


        addbtn.addEventListener('click', function () {
            let li1 = document.createElement("li")

            let btndel = document.createElement("button")
            btndel.innerText = "Del"
            btndel.id = ("btndel")

            let input1 = document.createElement("input")
            input1.value = text1.value
            input1.classList.add("head")
            input1.name = 'task'

            li1.appendChild(input1)
            li1.appendChild(btndel)
            ul1.appendChild(li1)



            btndel.addEventListener('click', function () {
                li1.remove()
            })

        })