const Widget = Object.create({
    create(chatId) {
        const wdg = document.createElement("div");
        wdg.classList.add("chat-box");
        wdg.innerHTML = `<h1>Chat: ${ chatId }</h1>`;
        // Load your chat data into UI
        return wdg;
    }
});