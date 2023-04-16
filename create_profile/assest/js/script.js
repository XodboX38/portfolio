    const same_address_button = document.getElementById("same_address");
    const permanent_country = document.getElementById("permanent_country");
    const permanent_state = document.getElementById("permanent_state");
    const add_skill_input_field = document.getElementById("add_skills");
    const add_skill_button = document.getElementById("add_skill_button");
    const skills_list = document.getElementById("skills_list");


    add_skill_button.onclick = () =>{
        add_skills_to_list();
    }
    
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
            option.name = element["name"];
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
            console.log(`Current ${address_data[i]} Value`,current);
            console.log(`Permanent ${address_data[i]} Value`,permanent);

            
            current.style.opacity = opacity;
            
            current.readOnly = readonly_property;
            
            current.value = permanent.value;

        }
    };


    
    function add_skills_to_list(){
        add_skill_input_field.value = add_skill_input_field.value.trim();
        add_skill_input_field.value = add_skill_input_field.value.toUpperCase();
        add_skill_input_field.value = add_skill_input_field.value.toString();

        let button_colors = ["danger","warning","success","secondary","info"];
        let random_color_picker = Math.floor(Math.random() * button_colors.length);

        var skill_div = document.createElement("div");
        skill_div.classList.add("btn");
        skill_div.classList.add(`btn-${button_colors[random_color_picker]}`);
        skill_div.classList.add("m-1");

        skill_div.name = add_skill_input_field.value;
        skill_div.innerHTML = add_skill_input_field.value;

        let delete_skill = document.createElement("i");
        delete_skill.classList.add("bi");
        delete_skill.classList.add("p-1");
        delete_skill.classList.add("bi-x");

        skill_div.appendChild(delete_skill);
        skills_list.appendChild(skill_div);

        add_skill_input_field.value = "";

    }