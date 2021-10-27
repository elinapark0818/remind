const title = document.querySelector('.title')
    function update() {
      title.innerHTML = `
      window.screen: ${window.screen.width}px, ${window.screen.height}px <br/>
      window.outer: ${window.outerWidth}px, ${window.outerHeight}px <br/>
      window.inner: ${window.innerWidth}px, ${window.innerHeight}px <br/>
      documentElement.clientSize: ${document.documentElement.clientWidth}px, ${document.documentElement.clientHeight}px
      `;
    }
    window.addEventListener('resize', () => {
      update();
    });
    update();