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
        class: ''
      },
      {
        en: '1',
        ru: '1',
        shift_en: '!',
        shift_ru: '!',
        class: 'digit1'
      },
      {
        en: '2',
        ru: '2',
        shift_en: '@',
        shift_ru: '"',
        class: 'digit2'
      },
      {
        en: '3',
        ru: '3',
        shift_en: '#',
        shift_ru: '№',
        class: 'digit3'
      },
      {
        en: '4',
        ru: '4',
        shift_en: '$',
        shift_ru: '%',
        class: 'digit4'
      },
      {
        en: '5',
        ru: '5',
        shift_en: '%',
        shift_ru: ':',
        class: 'digit5'
      },
      {
        en: '6',
        ru: '6',
        shift_en: '^',
        shift_ru: ',',
        class: 'digit6'
      },
      {
        en: '7',
        ru: '7',
        shift_en: '&',
        shift_ru: '.',
        class: 'digit7'
      },
      {
        en: '8',
        ru: '8',
        shift_en: '*',
        shift_ru: ';',
        class: 'digit8'
      },
      {
        en: '9',
        ru: '9',
        shift_en: '(',
        shift_ru: '(',
        class: 'digit9'
      },
      {
        en: '0',
        ru: '0',
        shift_en: ')',
        shift_ru: ')',
        class: 'digit0'
      },
      {
        en: '-',
        ru: '-',
        shift_en: '_',
        shift_ru: '_',
        class: 'minus'
      },
      {
        en: '=',
        ru: '=',
        shift_en: '+',
        shift_ru: '+',
        class: 'even'
      },
      {
        en: 'Backspace',
        ru: 'Backspace',
        shift_en: 'Backspace',
        shift_ru: 'Backspace',
        class: 'backspace'
      }
    ],
    [
      {
        en: 'Tab',
        ru: 'Tab',
        shift_en: 'Tab',
        shift_ru: 'Tab',
        class: 'tab'
      },
      {
        en: 'q',
        ru: 'й',
        shift_en: 'Tab',
        shift_ru: 'Й',
        class: 'q'
      },
      {
        en: 'w',
        ru: 'ц',
        shift_en: 'W',
        shift_ru: 'Ц',
        class: 'w'
      },
      {
        en: 'e',
        ru: 'у',
        shift_en: 'E',
        shift_ru: 'У',
        class: 'e'
      },
      {
        en: 'r',
        ru: 'к',
        shift_en: 'R',
        shift_ru: 'К',
        class: 'r'
      },
      {
        en: 't',
        ru: 'е',
        shift_en: 'T',
        shift_ru: 'Е',
        class: 't'
      },
      {
        en: 'y',
        ru: 'н',
        shift_en: 'Y',
        shift_ru: 'Н',
        class: 'y'
      },
      {
        en: 'u',
        ru: 'г',
        shift_en: 'U',
        shift_ru: 'Г',
        class: 'u'
      },
      {
        en: 'i',
        ru: 'ш',
        shift_en: 'I',
        shift_ru: 'Ш',
        class: 'i'
      },
      {
        en: 'o',
        ru: 'щ',
        shift_en: 'O',
        shift_ru: 'Щ',
        class: 'o'
      },
      {
        en: 'p',
        ru: 'з',
        shift_en: 'P',
        shift_ru: 'З',
        class: 'p'
      },
      {
        en: '[',
        ru: 'х',
        shift_en: '{',
        shift_ru: 'Х',
        class: 'backet-left'
      },
      {
        en: ']',
        ru: 'ъ',
        shift_en: '}',
        shift_ru: 'Ъ',
        class: 'backet-right'
      }
    ],
    [
      {
        en: 'CapsLock',
        ru: 'CapsLock',
        shift_en: 'CapsLock',
        shift_ru: 'CapsLock',
        class: 'capslock'
      },
      {
        en: 'a',
        ru: 'ф',
        shift_en: 'A',
        shift_ru: 'Ф',
        class: ''
      },
      {
        en: 's',
        ru: 'ы',
        shift_en: 'S',
        shift_ru: 'Ы',
        class: ''
      },
      {
        en: 'd',
        ru: 'в',
        shift_en: 'D',
        shift_ru: 'В',
        class: ''
      },
      {
        en: 'f',
        ru: 'а',
        shift_en: 'F',
        shift_ru: 'А',
        class: ''
      },
      {
        en: 'g',
        ru: 'п',
        shift_en: 'G',
        shift_ru: 'П',
        class: ''
      },
      {
        en: 'h',
        ru: 'р',
        shift_en: 'H',
        shift_ru: 'Р',
        class: ''
      },
      {
        en: 'j',
        ru: 'о',
        shift_en: 'J',
        shift_ru: 'О',
        class: ''
      },
      {
        en: 'k',
        ru: 'л',
        shift_en: 'K',
        shift_ru: 'Л',
        class: ''
      },
      {
        en: 'l',
        ru: 'д',
        shift_en: 'L',
        shift_ru: 'Д',
        class: ''
      },
      {
        en: ';',
        ru: 'ж',
        shift_en: ':',
        shift_ru: 'Ж',
        class: ''
      },
      {
        en: "'",
        ru: 'э',
        shift_en: '"',
        shift_ru: 'Э',
        class: ''
      },
      {
        en: '\\',
        ru: 'ё',
        shift_en: '|',
        shift_ru: 'Ё',
        class: 'backslash'
      },
      {
        en: 'Enter',
        ru: 'Enter',
        shift_en: 'Enter',
        shift_ru: 'Enter',
        class: 'enter'
      }
    ],
    [
      {
        en: 'Shift',
        ru: 'Shift',
        shift_en: 'Shift',
        shift_ru: 'Shift',
        class: 'shift-l'
      },
      {
        en: '`',
        ru: ']',
        shift_en: '~',
        shift_ru: '[',
        class: ''
      },
      {
        en: 'z',
        ru: 'я',
        shift_en: 'Z',
        shift_ru: 'Я',
        class: ''
      },
      {
        en: 'x',
        ru: 'ч',
        shift_en: 'X',
        shift_ru: 'Ч',
        class: ''
      },
      {
        en: 'c',
        ru: 'с',
        shift_en: 'C',
        shift_ru: 'С',
        class: ''
      },
      {
        en: 'v',
        ru: 'м',
        shift_en: 'V',
        shift_ru: 'М',
        class: ''
      },
      {
        en: 'b',
        ru: 'и',
        shift_en: 'B',
        shift_ru: 'И',
        class: ''
      },
      {
        en: 'n',
        ru: 'т',
        shift_en: 'N',
        shift_ru: 'Т',
        class: ''
      },
      {
        en: 'm',
        ru: 'ь',
        shift_en: 'M',
        shift_ru: 'Ь',
        class: ''
      },
      {
        en: ',',
        ru: 'б',
        shift_en: '<',
        shift_ru: 'Б',
        class: ''
      },
      {
        en: '.',
        ru: 'ю',
        shift_en: '>',
        shift_ru: 'Ю',
        class: ''
      },
      {
        en: '/',
        ru: '/',
        shift_en: '?',
        shift_ru: '?',
        class: ''
      },
      {
        en: '▲',
        ru: '▲',
        shift_en: '▲',
        shift_ru: '▲',
        class: 'up'
      },
      {
        en: 'Shift',
        ru: 'Shift',
        shift_en: 'Shift',
        shift_ru: 'Shift',
        class: 'shift-r'
      }
    ],
    [
      {
        en: 'Ctr',
        ru: 'Ctr',
        shift_en: 'Ctr',
        shift_ru: 'Ctr',
        class: 'ctr-l'
      },
      {
        en: 'Alt',
        ru: 'Alt',
        shift_en: 'Alt',
        shift_ru: 'Alt',
        class: 'alt-l'
      },
      {
        en: 'Cmd',
        ru: 'Cmd',
        shift_en: 'Cmd',
        shift_ru: 'Cmd',
        class: 'cmd-l'
      },
      {
        en: 'Space',
        ru: 'Space',
        shift_en: 'Space',
        shift_ru: 'Space',
        class: 'space'
      },
      {
        en: 'Cmd',
        ru: 'Cmd',
        shift_en: 'Cmd',
        shift_ru: 'Cmd',
        class: 'cmd-r'
      },
      {
        en: 'Alt',
        ru: 'Alt',
        shift_en: 'Alt',
        shift_ru: 'Alt',
        class: 'alt-r'
      },
      {
        en: '◄',
        ru: '◄',
        shift_en: '◄',
        shift_ru: '◄',
        class: 'left'
      },
      {
        en: '▼',
        ru: '▼',
        shift_en: '▼',
        shift_ru: '▼',
        class: 'down'
      },
      {
        en: '►',
        ru: '►',
        shift_en: '►',
        shift_ru: '►',
        class: 'right'
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
      value == 'Control' || 
      value == 'Alt' || 
      value == 'Del' || 
      value == 'CapsLock' || 
      value == 'Shift' ||
      value == 'Meta' || 
      value == 'ArrowLeft' ||
      value == 'ArrowRight' ||
      value == 'ArrowUp' ||
      value == 'ArrowDown'
    ) {
      return null
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
  p.innerHTML = 'Клавиатура создана в операционной системе MacOS<br/>Для переключения языка комбинация: левыe ctrl + alt (option)'


  body.appendChild(h1)
  body.appendChild(textarea)
  body.appendChild(keyboard)
  body.appendChild(p)

  window.addEventListener('keydown', function(e) {
    updateTextArea(e.key)

    // Disable Tab
    if (e.code == 'Tab') {
      e.preventDefault()
    }

    // Change language
    if (e.ctrlKey && e.altKey) { 
      currentLang = currentLang === 'ru' ? 'en' : 'ru'

      localStorage.setItem('lang', currentLang);

      renderKeyboard()

      document.querySelector('.ctr-l').classList.add('active')
      document.querySelector('.alt-l').classList.add('active')
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
      document.querySelector('.shift-l').classList.add('active')
    }

    if (e.code == 'ShiftRight') {
      document.querySelector('.shift-r').classList.add('active')
    }

    if (e.code == 'ControlLeft') {
      document.querySelector('.ctr-l').classList.add('active')
    }

    if (e.code == 'Backslash') {
      document.querySelector('.backslash').classList.add('active')
    }

    if (e.code == 'AltLeft') {
      document.querySelector('.alt-l').classList.add('active')
    }

    if (e.code == 'AltRight') {
      document.querySelector('.alt-r').classList.add('active')
    }

    if (e.code == 'MetaLeft') {
      document.querySelector('.cmd-l').classList.add('active')
    }

    if (e.code == 'MetaRight') {
      document.querySelector('.cmd-r').classList.add('active')
    }

    if (e.code == 'ArrowLeft') {
      document.querySelector('.left').classList.add('active')
    }

    if (e.code == 'ArrowRight') {
      document.querySelector('.right').classList.add('active')
    }

    if (e.code == 'ArrowUp') {
      document.querySelector('.up').classList.add('active')
    }

    if (e.code == 'ArrowDown') {
      document.querySelector('.down').classList.add('active')
    }

    let activeKey = document.querySelector(`[keyname="${e.key}"]`)
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
      document.querySelector('.shift-l').classList.remove('active')
    }

    if (e.code == 'ShiftRight') {
      document.querySelector('.shift-r').classList.remove('active')
    }

    if (e.code == 'ControlLeft') {
      document.querySelector('.ctr-l').classList.remove('active')
    }

    if (e.code == 'Backslash') {
      document.querySelector('.backslash').classList.remove('active')
    }

    if (e.code == 'AltLeft') {
      document.querySelector('.alt-l').classList.remove('active')
    }

    if (e.code == 'AltRight') {
      document.querySelector('.alt-r').classList.remove('active')
    }

    if (e.code == 'MetaLeft') {
      document.querySelector('.cmd-l').classList.remove('active')
    }

    if (e.code == 'MetaRight') {
      document.querySelector('.cmd-r').classList.remove('active')
    }

    if (e.code == 'ArrowLeft') {
      document.querySelector('.left').classList.remove('active')
    }

    if (e.code == 'ArrowRight') {
      document.querySelector('.right').classList.remove('active')
    }

    if (e.code == 'ArrowUp') {
      document.querySelector('.up').classList.remove('active')
    }

    if (e.code == 'ArrowDown') {
      document.querySelector('.down').classList.remove('active')
    }

    let activeKey = document.querySelector(`[keyname="${e.key}"]`)

    if (activeKey) {
      activeKey.classList.remove('active')
    }
  })
})()