// src/js/advisory.js
// Page: Travel Advisory
// Author: SAMNANG, Methiny
// Description: Fetches Cambodia travel advisory data from backend server

document.addEventListener('DOMContentLoaded', () => {

  const loadingEl       = document.getElementById('loading')
  const errorEl         = document.getElementById('error')
  const contentEl       = document.getElementById('advisory-content')
  const overallAdviceEl = document.getElementById('overall-advice')
  const riskBadgeEl     = document.getElementById('risk-badge')
  const lastUpdateEl    = document.getElementById('last-update')
  const lastChangedEl   = document.getElementById('last-changed')
  const adviceLevelsEl  = document.getElementById('advice-levels')
  const advisoryLinkEl  = document.getElementById('advisory-link')

  // Risk level colors based on Smartraveller levels
  const riskColors = {
    'Exercise normal safety precautions': { label: 'Normal',    classes: 'bg-green-100 text-green-700'   },
    'Exercise a high degree of caution':  { label: 'Caution',   classes: 'bg-yellow-100 text-yellow-700' },
    'Reconsider your need to travel':     { label: 'High Risk', classes: 'bg-orange-100 text-orange-700' },
    'Do not travel':                      { label: 'Extreme',   classes: 'bg-red-100 text-red-700'       },
  }

  // Clean HTML entities from text
  function cleanText(text) {
    return text
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;\*\*/g, '')
      .replace(/\*\*/g, '')
      .replace(/&amp;/g, '&')
      .trim()
  }

  // Parse advice levels string into array of objects
  function parseAdviceLevels(text) {
    const levels = [
      'Exercise normal safety precautions',
      'Exercise a high degree of caution',
      'Reconsider your need to travel',
      'Do not travel',
    ]

    const results = []
    let remaining = text

    levels.forEach(level => {
      const index = remaining.indexOf(level)
      if (index !== -1) {
        // Find the description after the level label
        const afterLabel = remaining.slice(index + level.length)
        const nextLevelIndex = levels.reduce((min, l) => {
          const i = afterLabel.indexOf(l)
          return i !== -1 && i < min ? i : min
        }, afterLabel.length)

        const description = afterLabel.slice(0, nextLevelIndex).replace(/^[\s,]+/, '').trim()

        if (description) {
          results.push({ level, description: cleanText(description) })
        }
      }
    })

    return results
  }

  // Render advice level badge color
  function getAreaBadge(level) {
    if (level.includes('Do not travel'))            return 'bg-red-100 text-red-700'
    if (level.includes('Reconsider'))               return 'bg-orange-100 text-orange-700'
    if (level.includes('high degree of caution'))   return 'bg-yellow-100 text-yellow-700'
    return 'bg-green-100 text-green-700'
  }

  async function fetchAdvisory() {
    try {
      const res = await fetch('https://corsproxy.io/?https://www.smartraveller.gov.au/destinations-export')
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      const cambodia = data.find(c => c.title === 'Cambodia')
      if (!cambodia) throw new Error('Cambodia not found')
      console.log(cambodia)
      renderAdvisory(cambodia)
    } catch (err) {
      console.error('Error:', err)
      showError()
    }
  }

  function renderAdvisory(data) {
    loadingEl.classList.add('hidden')
    contentEl.classList.remove('hidden')

    // Risk badge
    const riskLevel = data.field_overall_advice_level || 'Exercise normal safety precautions'
    const risk = riskColors[riskLevel] || riskColors['Exercise normal safety precautions']
    riskBadgeEl.textContent = risk.label
    riskBadgeEl.className += ` ${risk.classes} px-5 py-2 rounded-full text-sm font-semibold`

    // Overall advice
    overallAdviceEl.textContent = cleanText(data.field_overall_advice_level || '')

    // Latest update
    lastUpdateEl.textContent = cleanText(data.field_last_update || 'No recent updates.')

    // Last changed date
    if (data.changed) {
      lastChangedEl.textContent = `Last updated: ${data.changed}`
    }

    // Advice levels
    const levels = parseAdviceLevels(data.field_advice_levels || '')
    if (levels.length > 0) {
      adviceLevelsEl.innerHTML = levels.map(item => `
        <div class="border border-gray-100 rounded-xl p-4">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${getAreaBadge(item.level)}">
            ${item.level}
          </span>
          <p class="text-gray-600 text-sm leading-relaxed">${item.description}</p>
        </div>
      `).join('')
    } else {
      adviceLevelsEl.innerHTML = '<p class="text-gray-400">No specific area advisories available.</p>'
    }

    // Read more link
    if (data.field_url) {
      advisoryLinkEl.href = data.field_url
    }
  }

  function showError() {
    loadingEl.classList.add('hidden')
    errorEl.classList.remove('hidden')
  }

  fetchAdvisory()

})