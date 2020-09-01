Vue.component("search-apartment", {
	data : function() {
		return {
			apartments : null,
			locations : null,
			locationSearch : "",
			isOpen : false,
			allLocations : null
		}
	},
	template: `
	
	
        <div class = "booking-section">
            <form class="form-inline" action="">
                <div class = "row">
                    <div class = "column">
                        <label for="destination">Destinacija:</label>
                        <input autocomplete="on" type="text" id="email" placeholder="Mesto, Država" v-model="locationSearch" v-on:change="autocomplete" name="dest">
                            <ul v-show="isOpen" class="autocomplete-results">
								<li
							      v-for="(location, i) in locations"
							      :key="i"
							      class="autocomplete-result"
							    >
								{{ location }}
								</li>
							</ul>
                    </div>
                    <div class = "column">
                        <label for="rooms">Broj soba:</label>
                        <input type="number" id="roomNumber" class = "number" name="roomNumber">
                    </div>
                    <div class = "column">
                        <label for="guests">Broj gostiju:</label>
                        <input type="number" id="guestNumber" class = "number" name="guestNumber">
                        </div>
                    <div class="column" >
                        <label for="startDate">Početni datum:</label>
                        <input type="date" id="startdate" name="start">
                    </div>
                    <div class = "column">
                        <label for="endDate">Krajnji datum:</label>
                        <input type="date" id="enddate" name="end">
                    </div>

            </div>
            <button type="submit" class = "form_button">Pretraži</button>
              </form>
        </div>

        </div>
	`,
	mounted () {
		axios 
			.get("/test")
			.then(response => {
				console.log("i did it");
			});
		axios
			.get("/locations")
			.then(response => {
				this.allLocations = response.data;
				console.log(this.allLocations.length);
			})
	},
	methods : {
		autocompleteGet : function() {
	        this.isOpen = true;
	        this.filterResults();
		},
		filterResults : function() {
	        this.locations = this.allLocations.filter(location => location.toLowerCase().indexOf(this.locationSearch.toLowerCase()) > -1);
		}
		
	}/*,
	computed : {
		autocomplete () {
			 return this.locations;
		}
	}, 
	watch : {
		autocomplete() {
			this.autocompleteGet();
		}
	}*/
});