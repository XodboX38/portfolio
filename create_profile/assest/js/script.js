    function get_state_list(){
        $country_value = country.value;
        var request =  new XMLHttpRequest();
        request.open("GET",`/get_states?country=${permanent_country.value}`);
        request.setRequestHeader("content-type","application/json");
        request.send();

        request.addEventListener("load",()=>{
            if(request.status === 200){
                set_options(JSON.parse(request.responseText()));
            }
            else{
                alert_error("Something Went Wrong");
            }
        })
    }


    function set_options(){
        array.forEach(element => {
            let option = document.createElement("option");
            option.value = element["name"];
            option.innerText = element["name"];
            permanent_state.appendChild(option);
        });
    }


    function fill_current_address(){
        
        // current_country.value = permanent_country.value;
        // current_city.value = permanent_city.value;
        // current_district.value = permanent_district.value;
        // current_state.value = permanent_state.value;
        // current_locality.value = permanent_locality.value;

        // current_country.readOnly = true;
        // current_city.readOnly = true;
        // current_district.readOnly = true;
        // current_state.readOnly = true;
        // current_locality.readOnly = true;

        // current_city.style.opacity = ".6";
        // current_country.style.opacity = ".6";
        // current_city.style.opacity = ".6";
        // current_district.style.opacity = ".6";
        // current_state.style.opacity = ".6";
        // current_locality.style.opacity = ".6";




        let address_data = ["country", "city", "district", "state", "locality"];

        for(var i=0; i<address_data.length; i++)
        {
            current_+address_data[i]+"."+value = permanent_+address_data[i]+"."+value;
            console.log(permanent_+address_data[i]+'.'+value);
        }
    };