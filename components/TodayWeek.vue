<template>
    <div>
        <div class="header">
            <div class="nav">
                <p class="nav__item">Today</p>
                <p class="nav__item active">Week</p>
            </div>
                
            <div class="units">
                <div class="units__item"><span>&deg;C</span></div>
                <div class="units__item active"><span>&deg;F</span></div>
            </div>
        </div>

        <div class="week margin-top-xl">
            <div class="card">
                <p>Sun</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                            fill="orange"></path>
                    </svg>
                        <p>15 &deg; <span class="color-bg-darker">-3 &deg;</span></p>
            </div>

            <div class="card">
                <p>Mon</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                    </svg>
                        <p>15 &deg; <span class="color-bg-darker">-3 &deg;</span></p>
            </div>

            <div class="card">
                <p>Tue</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                    </svg>
                        <p>15 &deg; <span class="color-bg-darker">-3 &deg;</span></p>
            </div>

            <div class="card">
                <p>Wed</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                    </svg>
                        <p>15 &deg; <span class="color-bg-darker">-3 &deg;</span></p>
            </div>

            <div class="card">
                <p>Thu</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                    </svg>
                        <p>15 &deg; <span class="color-bg-darker">-3 &deg;</span></p>
            </div>

            <div class="card">
                <p>Fri</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                    </svg>
                        <p>15 &deg; <span class="color-bg-darker">-3 &deg;</span></p>
            </div>

            <div class="card">
                <p>Sat</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                    </svg>
                        <p>15 &deg; <span class="color-bg-darker">-3 &deg;</span></p>
            </div>
        </div>
    </div>
</template>

<style>
.right {
  background-color: var(--color-bg);
  padding: var(--space-lg);
       }
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
        }
       
.nav {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
      }

.nav .nav__item {
    line-height: 1.4;
    color: var(--color-bg-darker);
    margin: 0;
    cursor: pointer;
    transition: all .3s ease-out; 
            }

.nav .nav__item:hover {
    color: var(--color-contrast-higher);
                 }

.nav .nav__item.active {
    color: var(--color-contrast-higher);
    border-bottom: 2px solid var(--color-contrast-higher);
                  }

.units {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
       }

.units .units__item {
    background-color: var(--color-white);
    border-radius: 50%;
    display: grid;
    place-items: center;
    width: 45px;
    height: 45px;
    color: var(--color-contrast-higher);
    cursor: pointer;
    transition: all .3s ease-out;
             }

.units .units__item:hover {
      background-color: var(--color-contrast-higher);
      color: var(--color-white);
                   }
                                      
.units__item span {
      margin: 0;
      padding: 0;
      line-height: 1;
      font-size: 16px;
      font-weight: 700;
                 }

.units__item.active {
      background-color: var(--color-contrast-higher);
      color: var(--color-white);
                    }

.card {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  border-radius: var(--radius-md);
  padding: var(--spasm);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-white);
     }

.card:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px;
            }

.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: var(--space-xxs); 
       }

</style>