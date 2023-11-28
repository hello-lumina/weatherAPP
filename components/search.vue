<template>
    <div>
        <input placeholder='Wyszukaj lokalizację...' v-model='writingLocation' @click='askForLocationPermission'/>
        <button @click="search">Szukaj</button>
            <div v-if="searchLocation != null">
                <p>Wprowadzona lokalizacja to: {{ searchLocation }}</p>
                    <p v-if="weatherInfo">Pogoda w tym obszarze:
                        <ul v-if="weatherInfo">
                            <li>Temperatura: {{ weatherInfo.current.temp_c}}°C</li>
                            <li>Wilgotność powietrza: {{ weatherInfo.current.humidity }}%</li>
                            <li>Wiatr: {{ weatherInfo.current.wind_kph }}km/h</li>
                            <li>Ciśnienie: {{ weatherInfo.current.pressure_mb }}mb</li>
                            <li>Opady: {{ weatherInfo.current.precip_mm }}mm</li>
                            <li>Zachmurzenie: {{ weatherInfo.current.cloud }}%</li>
                        </ul>
                    </p>
            </div>
    </div>
</template>
    
    <script>
        export default {
            data() {
                return{
                    searchLocation: null,
                    weatherInfo: null,
                    writingLocation: '',
                      };
                   },
            methods: {
                askForLocationPermission() {
                    if("geolocation" in navigator) {
                        navigator.geolocation.getCurrentPosition(
                            (position) => {
                                console.log('Lokalizacja uzyskana!');
                                          },
                            
                            (error) => {
                                console.error('Bład!', error);
                                       },
                                                                );
                                                   }
                    else {
                        console.error('Przeglądarka nie obsługuje geolokalizacji!');
                         }
                                           },
                                           
                search() {
                    this.searchLocation = this.writingLocation;
                        if(this.writingLocation.trim() != '') {
                            this.getWeatherInfo();
                                                              }
                        else {
                            console.log('Pole jest puste!')
                             }
                         },

                getWeatherInfo() {
                    const apiKey = '5601e40046454d11965130257232811';
                    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.searchLocation}`;

                        fetch(apiUrl) 
                            .then(response => response.json())

                            .then(info => {
                                this.weatherInfo = info;
                                          })
                                 },
                     },
                       };
    </script>

        <style>
            /* Cokolwiek, aby działało! */
        </style>