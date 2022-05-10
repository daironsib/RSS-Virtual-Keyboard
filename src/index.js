import './assets/styles/style.scss'

(() => {
  const body =  document.querySelector('body')

  let currentLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'
  let shiftIsActive = false
  let capsIsActive = false

  const buttons = [
    [
      {
        en: '§',
        ru: '>',
        shift_en: '£',
        shift_ru: '<',
        class: 'Backquote'
      },
      {
        en: '1',
        ru: '1',
        shift_en: '!',
        shift_ru: '!',
        class: 'Digit1'
      },
      {
        en: '2',
        ru: '2',
        shift_en: '@',
        shift_ru: '"',
        class: 'Digit2'
      },
      {
        en: '3',
        ru: '3',
        shift_en: '#',
        shift_ru: '№',
        class: 'Digit3'
      },
      {
        en: '4',
        ru: '4',
        shift_en: '$',
        shift_ru: '%',
        class: 'Digit4'
      },
      {
        en: '5',
        ru: '5',
        shift_en: '%',
        shift_ru: ':',
        class: 'Digit5'
      },
      {
        en: '6',
        ru: '6',
        shift_en: '^',
        shift_ru: ',',
        class: 'Digit6'
      },
      {
        en: '7',
        ru: '7',
        shift_en: '&',
        shift_ru: '.',
        class: 'Digit7'
      },
      {
        en: '8',
        ru: '8',
        shift_en: '*',
        shift_ru: ';',
        class: 'Digit8'
      },
      {
        en: '9',
        ru: '9',
        shift_en: '(',
        shift_ru: '(',
        class: 'Digit9'
      },
      {
        en: '0',
        ru: '0',
        shift_en: ')',
        shift_ru: ')',
        class: 'Digit0'
      },
      {
        en: '-',
        ru: '-',
        shift_en: '_',
        shift_ru: '_',
        class: 'Minus'
      },
      {
        en: '=',
        ru: '=',
        shift_en: '+',
        shift_ru: '+',
        class: 'Equal'
      },
      {
        en: 'Backspace',
        ru: 'Backspace',
        shift_en: 'Backspace',
        shift_ru: 'Backspace',
        class: 'Backspace'
      }
    ],
    [
      {
        en: 'Tab',
        ru: 'Tab',
        shift_en: 'Tab',
        shift_ru: 'Tab',
        class: 'Tab'
      },
      {
        en: 'q',
        ru: 'й',
        shift_en: 'Q',
        shift_ru: 'Й',
        class: 'KeyQ'
      },
      {
        en: 'w',
        ru: 'ц',
        shift_en: 'W',
        shift_ru: 'Ц',
        class: 'KeyW'
      },
      {
        en: 'e',
        ru: 'у',
        shift_en: 'E',
        shift_ru: 'У',
        class: 'KeyE'
      },
      {
        en: 'r',
        ru: 'к',
        shift_en: 'R',
        shift_ru: 'К',
        class: 'KeyR'
      },
      {
        en: 't',
        ru: 'е',
        shift_en: 'T',
        shift_ru: 'Е',
        class: 'KeyT'
      },
      {
        en: 'y',
        ru: 'н',
        shift_en: 'Y',
        shift_ru: 'Н',
        class: 'KeyY'
      },
      {
        en: 'u',
        ru: 'г',
        shift_en: 'U',
        shift_ru: 'Г',
        class: 'KeyU'
      },
      {
        en: 'i',
        ru: 'ш',
        shift_en: 'I',
        shift_ru: 'Ш',
        class: 'KeyI'
      },
      {
        en: 'o',
        ru: 'щ',
        shift_en: 'O',
        shift_ru: 'Щ',
        class: 'KeyO'
      },
      {
        en: 'p',
        ru: 'з',
        shift_en: 'P',
        shift_ru: 'З',
        class: 'KeyP'
      },
      {
        en: '[',
        ru: 'х',
        shift_en: '{',
        shift_ru: 'Х',
        class: 'BracketLeft'
      },
      {
        en: ']',
        ru: 'ъ',
        shift_en: '}',
        shift_ru: 'Ъ',
        class: 'BracketRight'
      }
    ],
    [
      {
        en: 'CapsLock',
        ru: 'CapsLock',
        shift_en: 'CapsLock',
        shift_ru: 'CapsLock',
        class: 'CapsLock'
      },
      {
        en: 'a',
        ru: 'ф',
        shift_en: 'A',
        shift_ru: 'Ф',
        class: 'KeyA'
      },
      {
        en: 's',
        ru: 'ы',
        shift_en: 'S',
        shift_ru: 'Ы',
        class: 'KeyS'
      },
      {
        en: 'd',
        ru: 'в',
        shift_en: 'D',
        shift_ru: 'В',
        class: 'KeyD'
      },
      {
        en: 'f',
        ru: 'а',
        shift_en: 'F',
        shift_ru: 'А',
        class: 'KeyF'
      },
      {
        en: 'g',
        ru: 'п',
        shift_en: 'G',
        shift_ru: 'П',
        class: 'KeyG'
      },
      {
        en: 'h',
        ru: 'р',
        shift_en: 'H',
        shift_ru: 'Р',
        class: 'KeyH'
      },
      {
        en: 'j',
        ru: 'о',
        shift_en: 'J',
        shift_ru: 'О',
        class: 'KeyJ'
      },
      {
        en: 'k',
        ru: 'л',
        shift_en: 'K',
        shift_ru: 'Л',
        class: 'KeyK'
      },
      {
        en: 'l',
        ru: 'д',
        shift_en: 'L',
        shift_ru: 'Д',
        class: 'KeyL'
      },
      {
        en: ';',
        ru: 'ж',
        shift_en: ':',
        shift_ru: 'Ж',
        class: 'Semicolon'
      },
      {
        en: "'",
        ru: 'э',
        shift_en: '"',
        shift_ru: 'Э',
        class: 'Quote'
      },
      {
        en: '\\',
        ru: 'ё',
        shift_en: '|',
        shift_ru: 'Ё',
        class: 'Backslash'
      },
      {
        en: 'Enter',
        ru: 'Enter',
        shift_en: 'Enter',
        shift_ru: 'Enter',
        class: 'Enter'
      }
    ],
    [
      {
        en: 'Shift',
        ru: 'Shift',
        shift_en: 'Shift',
        shift_ru: 'Shift',
        class: 'ShiftLeft'
      },
      {
        en: '`',
        ru: ']',
        shift_en: '~',
        shift_ru: '[',
        class: 'IntlBackslash'
      },
      {
        en: 'z',
        ru: 'я',
        shift_en: 'Z',
        shift_ru: 'Я',
        class: 'KeyZ'
      },
      {
        en: 'x',
        ru: 'ч',
        shift_en: 'X',
        shift_ru: 'Ч',
        class: 'KeyX'
      },
      {
        en: 'c',
        ru: 'с',
        shift_en: 'C',
        shift_ru: 'С',
        class: 'KeyC'
      },
      {
        en: 'v',
        ru: 'м',
        shift_en: 'V',
        shift_ru: 'М',
        class: 'KeyV'
      },
      {
        en: 'b',
        ru: 'и',
        shift_en: 'B',
        shift_ru: 'И',
        class: 'KeyB'
      },
      {
        en: 'n',
        ru: 'т',
        shift_en: 'N',
        shift_ru: 'Т',
        class: 'KeyN'
      },
      {
        en: 'm',
        ru: 'ь',
        shift_en: 'M',
        shift_ru: 'Ь',
        class: 'KeyM'
      },
      {
        en: ',',
        ru: 'б',
        shift_en: '<',
        shift_ru: 'Б',
        class: 'Comma'
      },
      {
        en: '.',
        ru: 'ю',
        shift_en: '>',
        shift_ru: 'Ю',
        class: 'Period'
      },
      {
        en: '/',
        ru: '/',
        shift_en: '?',
        shift_ru: '?',
        class: 'Slash'
      },
      {
        en: '▲',
        ru: '▲',
        shift_en: '▲',
        shift_ru: '▲',
        class: 'ArrowUp'
      },
      {
        en: 'Shift',
        ru: 'Shift',
        shift_en: 'Shift',
        shift_ru: 'Shift',
        class: 'ShiftRight'
      }
    ],
    [
      {
        en: 'Ctr',
        ru: 'Ctr',
        shift_en: 'Ctr',
        shift_ru: 'Ctr',
        class: 'ControlLeft'
      },
      {
        en: 'Alt',
        ru: 'Alt',
        shift_en: 'Alt',
        shift_ru: 'Alt',
        class: 'AltLeft'
      },
      {
        en: 'Cmd',
        ru: 'Cmd',
        shift_en: 'Cmd',
        shift_ru: 'Cmd',
        class: 'MetaLeft'
      },
      {
        en: 'Space',
        ru: 'Space',
        shift_en: 'Space',
        shift_ru: 'Space',
        class: 'Space'
      },
      {
        en: 'Cmd',
        ru: 'Cmd',
        shift_en: 'Cmd',
        shift_ru: 'Cmd',
        class: 'MetaRight'
      },
      {
        en: 'Alt',
        ru: 'Alt',
        shift_en: 'Alt',
        shift_ru: 'Alt',
        class: 'AltRight'
      },
      {
        en: '◄',
        ru: '◄',
        shift_en: '◄',
        shift_ru: '◄',
        class: 'ArrowLeft'
      },
      {
        en: '▼',
        ru: '▼',
        shift_en: '▼',
        shift_ru: '▼',
        class: 'ArrowDown'
      },
      {
        en: '►',
        ru: '►',
        shift_en: '►',
        shift_ru: '►',
        class: 'ArrowRight'
      }
    ]
  ]

  // H1
  let h1 = document.createElement('h1')
  h1.innerHTML = 'RSS Виртуальная клавиатура'

  // Textarea
  let textarea = document.createElement('textarea')
  textarea.classList.add('textarea')

  // Keyboard
  let keyboard = document.createElement('div')
  keyboard.classList.add('keyboard')

  function renderKeyboard() {
    keyboard.innerHTML = '';
    buttons.map(row => {
      let rowDiv = document.createElement('div')
      rowDiv.classList.add('keyboard__row')
      row.map(key => {
        let keyDiv = document.createElement('div')
        keyDiv.classList.add('keyboard__key')

        if (key.class) {
          keyDiv.classList.add(key.class)
        }

        keyDiv.innerText = shiftIsActive || capsIsActive ?
        key[`shift_${currentLang}`] : 
        key[`${currentLang}`]

        // Add keyname to attribute

        keyDiv.setAttribute('keyname', keyDiv.innerText)

        keyDiv.addEventListener('click', e => {
          const keyValue = e.target.getAttribute('keyname')
          
          if (keyValue == 'CapsLock') {
            if (capsIsActive) {
              capsIsActive = false
            } else {
              capsIsActive = true
            }
            renderKeyboard()
          }

          e.target.classList.add('active')
          updateTextArea(keyValue)
          window.setTimeout(function() {
            e.target.classList.remove('active')
          }, 300)
        })

        rowDiv.appendChild(keyDiv)
      })
      keyboard.appendChild(rowDiv)
    })
  }

  renderKeyboard()

  function updateTextArea(value) {
    if (
      value == 'Ctr' || 
      value == 'Alt' || 
      value == 'Del' || 
      value == 'CapsLock' || 
      value == 'Shift' ||
      value == 'Cmd'
    ) {
      return null
    } else if ( value == '◄' || value == '►' || value == '▲' || value == '▼') {
      textarea.focus()
    } else if (value == 'Backspace' && textarea !== document.activeElement) {
      textarea.value = textarea.value.substring(0, textarea.value.length - 1)
    } else if (value == 'Space' && textarea !== document.activeElement) {
      textarea.value = textarea.value + ' '
    } else if (value == 'Enter') {
      textarea.value = textarea.value + '\n'
    } else if (value == 'Tab') {
      textarea.value = textarea.value + '\t'
    } else {
      if (textarea !== document.activeElement) {
        textarea.value = textarea.value + value
      }
    }  
  }

  // Text
  let p = document.createElement('p')
  p.innerHTML = 'Клавиатура создана в операционной системе MacOS<br/>Для переключения языка комбинация: левыe ctrl + alt (option) <br/><br/> <a href="https://github.com/daironsib/RSS-Virtual-Keyboard/pull/1" target="_blank">Ссылка на Pull Request: https://github.com/daironsib/RSS-Virtual-Keyboard/pull/1</a>'


  body.appendChild(h1)
  body.appendChild(textarea)
  body.appendChild(keyboard)
  body.appendChild(p)

  window.addEventListener('keydown', function(e) {
    const keyValue = document.querySelector(`.${e.code}`).getAttribute('keyname')

    updateTextArea(keyValue)

    // Disable Tab
    if (e.code == 'Tab') {
      e.preventDefault()
    }

    // Change language
    if (e.ctrlKey && e.altKey) { 
      currentLang = currentLang === 'ru' ? 'en' : 'ru'

      localStorage.setItem('lang', currentLang);

      renderKeyboard()

      document.querySelector('.ControlLeft').classList.add('active')
      document.querySelector('.AltLeft').classList.add('active')
    }

    // Shift On
    if (e.key === 'Shift') { 
      shiftIsActive = true
      renderKeyboard()
    }

    // Caps On
    if (e.key === 'CapsLock') { 
      capsIsActive = true
      renderKeyboard()
    }

    if (e.code == 'Space') {
      document.querySelector(`[keyname="Space"]`).classList.add('active')
    }

    if (e.code == 'ShiftLeft') {
      document.querySelector('.ShiftLeft').classList.add('active')
    }

    if (e.code == 'ShiftRight') {
      document.querySelector('.ShiftRight').classList.add('active')
    }

    if (e.code == 'ControlLeft') {
      document.querySelector('.ControlLeft').classList.add('active')
    }

    if (e.code == 'Backslash') {
      document.querySelector('.Backslash').classList.add('active')
    }

    if (e.code == 'AltLeft') {
      document.querySelector('.AltLeft').classList.add('active')
    }

    if (e.code == 'AltRight') {
      document.querySelector('.AltRight').classList.add('active')
    }

    if (e.code == 'MetaLeft') {
      document.querySelector('.MetaLeft').classList.add('active')
    }

    if (e.code == 'MetaRight') {
      document.querySelector('.MetaRight').classList.add('active')
    }

    if (e.code == 'ArrowLeft') {
      document.querySelector('.ArrowLeft').classList.add('active')
    }

    if (e.code == 'ArrowRight') {
      document.querySelector('.ArrowRight').classList.add('active')
    }

    if (e.code == 'ArrowUp') {
      document.querySelector('.ArrowUp').classList.add('active')
    }

    if (e.code == 'ArrowDown') {
      document.querySelector('.ArrowDown').classList.add('active')
    }

    let activeKey = document.querySelector(`.${e.code}`)
    if (activeKey && e.key != 'Shift' && e.key != 'Alt') {
      activeKey.classList.add('active')
    }
  })

  window.addEventListener('keyup', function(e) {
    // console.log(e.code)

    // Shift Off
    if (e.key === 'Shift') { 
      shiftIsActive = false
      renderKeyboard()
    }

    // Caps Off
    if (e.key === 'CapsLock') { 
      capsIsActive = false
      renderKeyboard()
    }

    // Keyup button
    if (e.code == 'Space') {
      document.querySelector(`[keyname="Space"]`).classList.remove('active')
    }

    if (e.code == 'ShiftLeft') {
      document.querySelector('.ShiftLeft').classList.remove('active')
    }

    if (e.code == 'ShiftRight') {
      document.querySelector('.ShiftRight').classList.remove('active')
    }

    if (e.code == 'ControlLeft') {
      document.querySelector('.ControlLeft').classList.remove('active')
    }

    if (e.code == 'Backslash') {
      document.querySelector('.Backslash').classList.remove('active')
    }

    if (e.code == 'AltLeft') {
      document.querySelector('.AltLeft').classList.remove('active')
    }

    if (e.code == 'AltRight') {
      document.querySelector('.AltRight').classList.remove('active')
    }

    if (e.code == 'MetaLeft') {
      document.querySelector('.MetaLeft').classList.remove('active')
    }

    if (e.code == 'MetaRight') {
      document.querySelector('.MetaRight').classList.remove('active')
    }

    if (e.code == 'ArrowLeft') {
      document.querySelector('.ArrowLeft').classList.remove('active')
    }

    if (e.code == 'ArrowRight') {
      document.querySelector('.ArrowRight').classList.remove('active')
    }

    if (e.code == 'ArrowUp') {
      document.querySelector('.ArrowUp').classList.remove('active')
    }

    if (e.code == 'ArrowDown') {
      document.querySelector('.ArrowDown').classList.remove('active')
    }

    let activeKey = document.querySelector(`.${e.code}`)

    if (activeKey) {
      activeKey.classList.remove('active')
    }
  })
})()