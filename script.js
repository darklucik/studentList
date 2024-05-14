function добавитьстудента() {
    let input = document.getElementById("studentName");
    let name = input.value;
    if (name.trim() !== "") {
        let list = document.getElementById("studentList");
        let li = document.getElementById("li");
        li.innerText = name;
    }
}