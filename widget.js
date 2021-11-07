document.write(`
    <aside style="position:fixed;bottom:0;right:0">
        <h1>Widget</h1>
        <h2></h2>
        <p></p>
    </aside>
`);
import('./widget-only').then(({ createWidgetSubTitle }) => {
    document.querySelector('aside h2').textContent = createWidgetSubTitle();
});
