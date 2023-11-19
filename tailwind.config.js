/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    fontFamily : {
      global : ['Inter', 'sans-serif'],
    },
    fontSize : {
      'heading' : ['30px', {
          lineHeight : '40px',
          letterSpacing : '0px',
          fontWeight : '700',
        }
      ],
    'section' : ['20px', {
        lineHeight : '32px',
        letterSpacing : '0px',
        fontWeight : '500',
      }
     ],
    'regular' : ['15px', {
        lineHeight : '28px',
        letterSpacing : '0px',
        fontWeight : '400',
      }
    ],
  },
    screens: {
      'mobile' : '375px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    colors : {
     "white" : "ffff",
     "transparent" : "transparent",
     "Light-Grayish-Cyan-(Background)": "hsl(180, 52%, 96%)",
     "Light-Grayish-Cyan": "hsl(180, 31%, 95%)",
     "Dark-Grayish-Cyan": "hsl(180, 8%, 52%)",
     "Very-Dark-Grayish-Cyan": "hsl(180, 14%, 20%)"
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
