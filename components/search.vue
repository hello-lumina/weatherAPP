<template>
    <div>
        <input placeholder='Wyszukaj lokalizację...' v-model='writingLocation' @click='askForLocationPermission'/>
        <button @click="search">Szukaj</button>
            <div v-if="searchLocation != null">
                <p>Wprowadzona lokalizacja to: {{ searchLocation }}</p>
            </div>
    </div>
</template>
    
    <script>
        export default {
            data() {
                return{
                    searchLocation: null,
                    writingLocation: '',
                      };
                   },
            methods: {
                askForLocationPermission() {
                    if("geolocation" in navigator) {
                        navigator.geolocation.getCurrentPosition(
                            (position) => {
                                console.log('Lokalizacja uzyskana!',position.coords.latitude, position.coords.longitude);
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
                            },
                     },
                       };
    </script>

        <style>
            /* Cokolwiek, aby działało! */
        </style>