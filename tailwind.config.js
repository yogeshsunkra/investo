/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Manrope:['var(--font-manrope)'],
        Inter:['var(--font-inter)'],
      },

      colors:{

        ui:{
          1:"#D1F701",
          2:"#5945FD",
          3:"#171717",
          4:"#595959",
          5:"#F1F5F9",
          6:"#E9E9E9",

        },

        text:{
          1:"#FFFFFF",
          2:"#000000",
          3:"#ADB1C7",
          4:"#595959"
        },

        other:{
          1:"#FFA200",
          2:"1AD05C"
        }



        

      },
      boxShadow: {
        '3xl': '0px -20px 20px 7px ',
      }

    },
  },
  plugins: [
    plugin(function({ addBase, addComponents, addUtilities }){
      addBase({});
      addComponents({
        ".h1":{
          "@apply text-[54px]  leading-[auto]":{}
        },
        ".h2":{
          "@apply text-[48px]  leading-[auto]":{}
        },
        ".h2-bold":{
          "@apply text-[48px] font-[600] leading-[auto]":{}
        },
        ".h3":{
          "@apply text-[32px]  leading-[auto]":{}
        },
        ".h3-bold":{
          "@apply text-[32px] font-[600] leading-[auto]":{}
        },
        ".h4":{
          "@apply text-[25px]  leading-[auto]":{}
        },
        ".h5":{
          "@apply text-[24px]  leading-[auto]":{}
        },
        ".h6":{
          "@apply text-[20px]  leading-[auto]":{}
        },
        ".p1":{
          "@apply text-[16px]  leading-[auto]":{}
        },
        ".p2":{
          "@apply text-[14px]  leading-[auto]":{}
        },
        ".p3":{
          "@apply text-[12px]  leading-[auto]":{}
        },
      });
      addUtilities({
        '.foo':{
          background : 'repeating-linear-gradient(90deg, rgb(238 238 240) 0px 4px, #F3F3F5 0px 70px)'
        },

        '.footer':{
          background : ' radial-gradient(at 10% 100%,  #d1f70117 10%  ,rgb(0,0,0,0)40%), radial-gradient(at 90% 0%,  #d1f70117 10%  ,rgb(0,0,0,0)40%),url(/footer_bg.svg)'
          // 'footer-texture': "url('/img/footer-texture.png')",

        },

        '.footer-bg':{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0) 20%, #F0F0F2 20%)"
        }

        
      });
    })
  ],
}

