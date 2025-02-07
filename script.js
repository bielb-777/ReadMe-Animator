function generateAnimation() {
    let input = document.getElementById("inputText").value;
    let preview = document.getElementById("preview");
    let output = document.getElementById("output");

    if (!input) {
        alert("Digite algo para gerar a animação!");
        return;
    }

    let animatedText = "";
    let colors = ["🔵", "🟢", "🟡", "🔴", "🟣"];

    for (let i = 0; i < input.length; i++) {
        let color = colors[i % colors.length];
        animatedText += `${color} ${input[i]} `;
    }

    preview.innerHTML = animatedText;
    output.value = `![ReadMe Animation](https://github.com/seuusuario/ReadMe-Animator/raw/main/assets/demo.gif)`;
}

function copyToClipboard() {
    let output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
    alert("Markdown copiado!");
}
