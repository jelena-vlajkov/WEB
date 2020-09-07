Vue.component("profile-view", {
    data: function(){
        return {
            name:'',
            surname: '',
            username: '',
            gender: ''
        }
    },

    template: `
    <div class="form-part">
    <h2>Informacije o profilu</h2>
  <div class = "row-reservations">
        <div class="col-with-picture">
            <div class = "profile-image"> </div>
        </div>
        <div class="col-informations">
            <div class = "username">
                <label class="username2">Ime:</label>
                    <div class = "col-username2">
                        <p v-bind:"name"/>
                    </div>
               
            </div>
        
            <div class = "username">
                <label class="username2">Prezime:</label>
                <div class = "col-filters">
                    <div class = "col-username2">
                        <p>Neko prezime</p>
                    </div>
                </div>
            </div>

            <div class = "username">
                <label class="username2">Korisnicko ime:</label>
                <div class = "col-filters">
                    <div class = "col-username2">
                        <p>Neko korisnicko ime</p>
                    </div>
                </div>
            </div>

            <div class = "username">
                <label class="username2">Pol:</label>
                <div class = "col-filters">
                    <div class = "col-username2">
                        <p>M/Z</p>
                    </div>
                </div>
            </div>
            </div>

            <div class="sidenav">
                <button class="side-menu-button" type="button"> Izmena profila </button>
                <button class="side-menu-button" type="button"> Promena lozinke </button>
              </div>
        </div>
        
  
        <div>
            <label class="username2">Moje Rezervacije:</label>
            
        </div>

        <div>
            <label class="username2">Moji apartmani:</label>
            
        </div>
    </div> ` ,

    mounted () {
        axios
        .get('/user/seeIfLogged')
        .then(response => {
            if(response.data != null)
            {
                this.name=response.data.name;
                this.surname=response.data.surname;
                this.username=response.data.username;
                this.gender=response.data.gender;

            }
            

        	console.log("hello");
        })
    }
});