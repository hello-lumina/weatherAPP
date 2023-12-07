export default {
    data() {
        return{
            searchLocation: null,
            weatherInfo: null,
            weatherName: null,
            tempearture: null,
            location: null,
            country: null,
            region: null,
            day: null,
            hour: null,
            rainChances: 0,
            weatherAppearance: null,
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
                    this.getStreetViewImage();
                                                      }
                 },

          getWeatherInfo(){
            const apiKey = '5601e40046454d11965130257232811';
            const wheaterApiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.searchLocation}`;
                fetch(wheaterApiUrl) 
                    .then(response => response.json())
                    .then(info => {
                        this.weatherInfo = info;
                        const epochTime = this.weatherInfo.current.last_updated_epoch;
                        const region = this.weatherInfo.location.tz_id;
                        const city = this.weatherInfo.location.name;
                          const date = new Date(epochTime * 1000);
                            const daysOfWeek = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
                            const hours = date.getHours();
                            const minutes = date.getMinutes();
                              this.location = city;
                              this.dayOfWeek = daysOfWeek[date.getDay()];
                              this.dayHour = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                              this.rainChances = this.weatherInfo.current.precip_mm*100;
                              this.country = this.weatherInfo.location.country;
                              this.region = region.split("/")[0];

                        console.log(this.weatherInfo);
                                  });
                      },

          getStreetViewImage() {

                               },
             },
               };