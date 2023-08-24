const Widget = Object.create({
    create(chatId) {
        const wdg = document.createElement("div");
        wdg.classList.add("demo-box");
        wdg.innerHTML = `<h2>Dynamic demo widget: ${ chatId }</h2>`;
        // Load your chat data into UI
        return wdg;
    }
});