export const moveImagesOnMouseMove = (imgWrapper, movingObjectsSelector, bodyImgSelector) => {    
    const parallax = (e) => {
      const movingObjects = document.querySelectorAll(movingObjectsSelector)
      if (movingObjects.length > 0) {
        Array.from(movingObjects).map((movObj) => {
          const speed = movObj.getAttribute('data-value')
          const x = (window.innerWidth - e.pageX * Number(speed)) / 100
          const y = (window.innerWidth - e.pageY * Number(speed)) / 100
          // @ts-ignore
          movObj.style.transform = `translate(${x}px, ${y}px)`
        })
      }
    }

    const parallaxBody = (e) => {
      const bodyImg = document.querySelector(bodyImgSelector)
      const x = (window.innerWidth - e.pageX * 5) * 0.004
      const y = (window.innerHeight - e.pageY * 5) * 0.004
      // @ts-ignore
      bodyImg.style.transform = `translate(${x}px, ${y}px)`
    }

    if (imgWrapper) {
      imgWrapper.addEventListener('mousemove', parallax)
      imgWrapper.addEventListener('mousemove', parallaxBody)
    }
}