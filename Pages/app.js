const q1 = "What most effective way to stay warm?";
const a1 = ["Layering", "wear one jacket", "wear a long sleeve"];
const q2 = "What is the most effective way to layer";
const a2 = ["start with lighter layers and add heavier layers", "Start with the heaviest layer and add lighter ones"];
const q3 = "It is raining outside and its cold how do you layer";
const a3 = ["wear your raincot ontop of your cotton layers", "wear your raincoat underneath and a fleace over it", "wear a long sleeve t-shirt"];
const q4 = "It snowed last night how do you dress";
const a4 = ["wear warm clothing with snow boots", "wear warm clothing with vans", "wear warm clothin with flip flops"];
const submit_btn = document.getElementById("submit_btn")




var finished = false;

function update_dom(finished) {

    if (finished) {
        document.getElementById("result_div").style.display = "block";
    } else {
        document.getElementById("result_div").style.display = "none";
    }
}

function evaluate() {
    document.getElementById
    // change ans list than eval
    var nl = [];
    for (i = 1; i < 5; i ++) {
        var s_type = "q_";
        s_type += String(i);
        var ddl = document.getElementById(s_type);
        var selectedValue = ddl.options[ddl.selectedIndex].value;
        nl.push(selectedValue);
        console.log(nl);
    }
    var ans_count = 0;
    for (i = 0; i < nl.length; i++)
    {
        if (nl[i] == 1) {
            ans_count ++;
        }
    }
    return ans_count;

}

document.getElementById("submit_btn").addEventListener("click", function() {
    finished = true;
    var return_ans = evaluate();
    if (return_ans >= 3) {
        document.getElementById("response_type").innerHTML = "Congratulations,";
        console.log("3")
    } else {
        document.getElementById("response_type").innerHTML = "You probably might want to review the information,";
    }
    document.getElementById("amount_right").innerHTML = return_ans;
    document.getElementById("amount_right2").innerHTML = return_ans;
    update_dom(true);

});

document.getElementById("retry_button").addEventListener("click", function(){
    update_dom(false);
});
