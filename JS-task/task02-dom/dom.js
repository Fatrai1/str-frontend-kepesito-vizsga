function changeOuterLinks() {
    const navItems = document.querySelectorAll('nav#link-list a');
    navItems.forEach( e => {
        if (e.innerHTML.includes('outer-link')) {
            e.target = '_blank';
            e.innerHTML = `<strong>${e.innerHTML}</strong>`;
        }
    })
    document.querySelectorAll('nav').forEach( e => {
        e.style.display = 'flex';
        e.style.flexDirection = 'column';
        e.style.margin = '0px auto';
        e.style.width = '30%';
        e.style.border = '1px solid blue';
        e.style.padding = '16px';
    });
}


export { changeOuterLinks };