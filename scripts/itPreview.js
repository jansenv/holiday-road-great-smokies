


const eventHub = document.querySelector(".container")
const parkContent = document.querySelector(".parkPreview")
const weatherContent = document.querySelector(".weather")
const attractionContent = document.querySelector(".attractionPreview")
const eateryContent = document.querySelector(".eateryPreview")


export const itPreview = () => {
  
  eventHub.addEventListener("parkSelected", event => {
    const currentParkName = event.detail.park 
    const currentParkDescription = event.detail.description
    console.log(currentParkName)
    parkContent.innerHTML = `
    <p>${currentParkName}</p>
    <button id="dialog--" class="parkButton">Details</button>
    <dialog class="park--description">
    <div>${currentParkDescription}</div>
    <button id="closeDialog">Close</button>
    </dialog>
    
    `
  })


  eventHub.addEventListener("bizzarieSelected", event => {
    const currentAttractionName = event.detail.bizzarieName 
    console.log(currentAttractionName)
    attractionContent.innerHTML = `
    <p>${currentAttractionName}</p>
    <button class="attractionButton">Details</button>
    
    `
  })

  eventHub.addEventListener("eaterySelected", event => {
    const currentEateryName = event.detail.eateryName 
    console.log(currentEateryName)
    eateryContent.innerHTML = `
    <p>${currentEateryName}</p>
    <button class="eateryButton">Details</button>
    
    
    `

  })

  // eventHub.addEventListener("weatherParkSelected", event => {
  //   const 
  // })



}