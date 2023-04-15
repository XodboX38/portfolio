    const same_address_button = document.getElementById("same_address");
    const permanent_country = document.getElementById("permanent_country");
    const permanent_state = document.getElementById("permanent_state");
    
    
    
    function get_state_list(){
        let country_value = permanent_country.value;
        var request =  new XMLHttpRequest();
        request.open("GET",`https://topdogfound.000webhostapp.com/getStatesData?country=${permanent_country.value}`);
        request.send();

        request.addEventListener("load",()=>{
            if(request.status === 200){
                set_options(JSON.parse(request.responseText));
            }
            else{
                alert("Something Went Wrong");
            }
        })
    }


    function set_options(array){
        
        permanent_state.innerHTML = "";

        array.forEach(element => {
            let option = document.createElement("option");
            option.value = element["name"];
            option.innerText = element["name"];
            permanent_state.appendChild(option);
        });
    }

    same_address_button.onchange = ()=>
    {
        if(same_address_button.checked == true)
        {
            fill_current_address("0.6",true);

        }
        else
        {
            fill_current_address("1",false);
        }
    }

        /*
            @param string opacity
            @param boolean readonly

        */
    function fill_current_address(opacity,readonly_property){
        let address_data = ["country", "city", "district", "state", "locality"];

        for(var i=0; i<address_data.length; i++)
        {
            var permanent = document.getElementById(`permanent_${address_data[i]}`);
            var current = document.getElementById(`current_${address_data[i]}`);
            current.style.opacity = opacity;
            current.readOnly = readonly_property;
            current.value = permanent.value;
        }
    };