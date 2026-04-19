/* global emailjs */

const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email)
}

const showMessage = (message, type) => {
  const msg = document.getElementById("subscribe-message")
  if (msg) {
    msg.textContent = message
    msg.className = type === "success"
      ? "text-green-400 text-sm mt-2"
      : "text-red-400 text-sm mt-2"
  }
}

const handleSubscribe = async (e) => {
  e.preventDefault()

  const emailInput = document.getElementById("subscribe-email")
  const email = emailInput.value.trim()

  if (!email) {
    showMessage("Please enter your email address!", "error")
    return
  }

  if (!validateEmail(email)) {
    showMessage("Please enter a valid email address!", "error")
    return
  }

  try {
    await emailjs.send(
      CONFIG.EMAILJS_SERVICE_ID,
      CONFIG.EMAILJS_TEMPLATE_ID,
      { email: email, name: email },
      CONFIG.EMAILJS_PUBLIC_KEY
    )
    showMessage("Thank you for subscribing! Check your email", "success")
    emailInput.value = ""
  } catch (err) {
    console.log(err.message)
    showMessage("Something went wrong. Please try again.", "error")
  }
}


// Attach event listener after footer loads
setTimeout(() => {
  emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY)
  const subscribeBtn = document.getElementById("subscribe-btn")
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", handleSubscribe)
  }
}, 500)