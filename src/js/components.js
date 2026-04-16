const navbarElement = document.querySelector("header")
const footerElement = document.querySelector("footer")

const fetchNavbar = async () => {
  try {
    const res = await fetch("/src/components/navbar.html")
    const template = await res.text()
    navbarElement.innerHTML = template
  } catch (err) {
    console.log(err)
  }
}

const fetchFooter = async () => {
  try {
    const res = await fetch("/src/components/footer.html")
    const template = await res.text()
    footerElement.innerHTML = template
  } catch (err) {
    console.log(err)
  }
}

fetchNavbar()
fetchFooter()