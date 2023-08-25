
/*

Dynamic Demo widget factory

*/

const Widget = Object.create({
    create(demoId) {
        const wdg = document.createElement("div");

        $(wdg).attr('id', demoId);

        wdg.classList.add("demo-box");
        wdg.innerHTML = `<h2>Dynamic demo widget: ${ demoId }</h2>`;

        var scriptElement = document.getElementById('demo-box-dyn-src');
        var loc = scriptElement.src;
        currDir = loc.substring(0, loc.lastIndexOf("/")) + '/';

        $(demoId).load(currDir + 'index.html');

        return wdg;
    }
});

/*

Dynamic Demo delay-loader to wait for DOM readiness

*/

const initWhenReady = () => {
    removeEventListener("DOMContentLoaded", initWhenReady);
    const myWidgetInstance = Widget.create("demo-123456");
};

addEventListener('DOMContentLoaded', initWhenReady);