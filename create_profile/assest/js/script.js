    const same_address_button = document.getElementById("same_address");
    const permanent_country = document.getElementById("permanent_country");
    const permanent_state = document.getElementById("permanent_state");
    const add_skill_input_field = document.getElementById("add_skills");
    const add_skill_button = document.getElementById("add_skill_button");
    const skills_list = document.getElementById("skills_list");
    const work_exp_block = document.getElementById("work_exp_block");
    const add_work_exp_btutton = document.getElementById("add_work_exp");
    const work_exp_title = document.getElementById("work_exp_title");
    const work_exp_description = document.getElementById("work_exp_description");
    const add_exp_button = document.getElementById("add_exp");
    const work_exp_input = document.getElementById("work_exp");


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


        if(add_skill_input_field.value == "")
        {
            alert("Please Enter some skills Looser");
        }
        else
        {
            let button_colors = ["danger","warning","success","secondary","info"];
            let random_color_picker = Math.floor(Math.random() * button_colors.length);
    
            var skill_div = document.createElement("div");
            skill_div.classList.add("btn");
            skill_div.classList.add(`btn-${button_colors[random_color_picker]}`);
            skill_div.classList.add("m-1");
    
            skill_div.name = add_skill_input_field.value;
            skill_div.innerHTML = add_skill_input_field.value;
    
            skills_list.appendChild(skill_div);
    
            add_skill_input_field.value = "";
            add_skill_input_field.focus();
    
            skill_div.onclick = ()=>{
                skill_div.remove();
            }

        }


    }

    

    add_exp_button.onclick = ()=>{
        // work_exp_input.style.display = "none";
        work_exp_title.value = work_exp_title.value.trim();
        work_exp_title.value = work_exp_title.value.charAt(0).toUpperCase() + work_exp_title.value.slice(1);
        work_exp_title.value = work_exp_title.value.toString();

        work_exp_description.value = work_exp_description.value.trim();
        work_exp_description.value = work_exp_description.value.charAt(0).toUpperCase() + work_exp_description.value.slice(1);
        


        if(work_exp_description.value == "" || work_exp_title.value == "")
        {
            alert("No empty fields allowed")
        }
        else if(work_exp_description.value == "")
        {
            alert("Work experience description need to be filled");
        }
        else if(work_exp_description.value == "")
        {
            alert("Work exprience title cannot be empty");
        }
        else
        {
            var working_div = document.createElement("div");
            working_div.classList.add("shadow");
            working_div.classList.add("p-4");
            working_div.classList.add("mb-3");
            working_div.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.150)`;
            working_div.id = "working_div";

            var work_title_heading = document.createElement("h2");
            work_title_heading.classList.add("mt-2");
            work_title_heading.innerText = work_exp_title.value;

            var delete_exp = document.createElement("div");
            delete_exp.classList.add("btn");
            delete_exp.classList.add("btn-outline-danger");
            delete_exp.innerHTML = `Remove <i class="bi bi-trash"></i>`; 

            var work_des_title = document.createElement("p");
            work_des_title.innerText = work_exp_description.value;

            working_div.appendChild(work_title_heading);
            working_div.appendChild(work_des_title);
            working_div.appendChild(delete_exp);

            work_exp_block.appendChild(working_div);
            work_exp_block.classList.remove("d-none");

            work_exp_title.value = "";
            work_exp_description.value = "";
            
            delete_exp.onclick = ()=>{
                working_div.remove();
            }


        }
        
    }

